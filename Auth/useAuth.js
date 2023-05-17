import {useContext} from "react";
import AuthContext from "../context/AuthContext"
import { getAccount } from "../controller/userApi";
import authStorage from "./storage";

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = async (authToken, refreshToken) => {
    authStorage
      .storeToken(authToken, refreshToken).then( res => {
    
   
          console.log(res, "well stored")
          setUser(true)
     
        })
      .catch(e => setUser(false))
    
      .catch((e) => console.log(e));
  };

  const logOut = async () => {
    authStorage.removeToken().then(res => setUser(false)).catch(e => {console.log(e)
    setUser(false)})
  };

  const persistlogin = async () => {
    authStorage.getRefreshToken().then((refreshToken) => {
      if(refreshToken) {
  
          getAccount(refreshToken)
            .then((res) => {
              if(res.ok) {
              authStorage.storeToken(res.data.access, refreshToken)
              setUser(true)
              }else {
                setUser(false)
              }
              
            })
            .catch((e) => console.log(e));
      }else {
        setUser(false)
      }
    
    }).catch(e => {
      console.log(e)
      setUser(false)
    })
  };

  return { user, logIn, logOut, persistlogin };
};

export default useAuth;

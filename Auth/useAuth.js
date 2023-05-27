import {useContext} from "react";
import AuthContext from "../context/AuthContext"
import { getAccount } from "../controller/userApi";
import authStorage from "./storage";
import { useState } from "react";

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);
  const [Loading, setLoading] = useState(true);

  const logIn = async (authToken, refreshToken) => {
    authStorage
      .storeToken(authToken, refreshToken)
      .then((res) => {
        console.log(res, "well stored");
        setUser(true);
      })
      .catch((e) => setUser(false))

      .catch((e) => console.log(e));
  };

  const logOut = async () => {
    authStorage
      .removeToken()
      .then((res) => setUser(false))
      .catch((e) => {
        console.log(e);
        setUser(false);
      });
  };

  const persistlogin = async () => {
    setLoading(true);
    const refreshToken = await authStorage.getRefreshToken();

    if (refreshToken) {
      getAccount(refreshToken)
        .then((res) => {
          if (res.ok) {
            authStorage.storeToken(res.data.access, refreshToken);

            setUser(true);
            setLoading(false);
          } else {
            setUser(false);
            setLoading(false);
          }
        })
        .catch((e) => console.log(e));
    } else {
      setUser(false);
      setLoading(false);
    }

  };

  return { user, logIn, logOut, persistlogin, Loading };
};

export default useAuth;

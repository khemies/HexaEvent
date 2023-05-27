import * as SecureStore from "expo-secure-store";


const key = "authToken";
const keyRefresh = "refreshToken"

const storeToken = async (authToken, refreshToken) => {
  try {
 
    await SecureStore.setItemAsync(key, authToken);
    await SecureStore.setItemAsync(keyRefresh, refreshToken);
  } catch (error) {
    console.log("Error storing the auth token", error);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {}
};

const getRefreshToken = async () => {
  try {

    return await SecureStore.getItemAsync(keyRefresh)
    
  } catch (error) {
    console.log("getRefreshToken errpr");
  }
}

const removeToken = async () => {

 SecureStore.deleteItemAsync(key).then( res => {console.log("success removed" , key)

return SecureStore.deleteItemAsync(keyRefresh)

}).catch(e => console.log(e))
};

export default { getToken,getRefreshToken, removeToken, storeToken };

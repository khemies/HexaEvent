import { useEffect, useState , useContext } from "react";
import { useDispatch } from "react-redux";
import { setLocation } from "../redux/actions/location-actions";
import { geocodeLoc } from "../utility/LocationConverter.js";
import * as Location from "expo-location";
import { addNonConvertedLocation } from "../redux/actions/location-actions";
import LocationContext from "../context/LocationContext";

const useLocation = () => {
  const [LoadingLocation , setLoadingLocation] = useState(false)
  const {position, setPosition } = useContext(LocationContext)
  const dispatch = useDispatch();
  const getlocation = () => {
    Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.Highest,
        maximumAge: 10000,
      },
      (resLocation) => {
       setLoadingLocation(true)
        geocodeLoc(resLocation.coords.latitude, resLocation.coords.longitude)
          .then((resGeocode) => {
            let address = resGeocode.data.address;
            //  dispatch(addNonConvertedLocation({ ...address }));
            //  console.log(address, "address");
            // dispatch(
            //   setLocation({
            //     latitude: resLocation.coords.latitude,
            //     longitude: resLocation.coords.longitude,
            //     region: address.state,
            //     subregion: address.county,
            //     street: address.road ? address.road : address.village,
            //     code_postale: address.postcode,
            //   })
            // );
            setPosition(address)
            return setLoadingLocation(false)
          })
          .catch((e) => console.log("update location failed with error ", e));
      }
    );
  };

  useEffect(() => {
    getlocation();
  }, []);

  return { LoadingLocation };
};

export default useLocation;

import { View, Text, TouchableOpacity } from "react-native";
import { adaptToHeight, adaptToWidth } from "../config/dimensions";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import CustomView from "./CustomView";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import colors from "../config/colors";
import routes from "../navigation/routes";

function MyTabBar({ state, descriptors, navigation }) {
  const iconRender = (label) => {
    const size = adaptToHeight(0.04);
    if (label == routes.HOME)
      return (
        <Ionicons name="md-home-outline" size={size} color={colors.primary} />
      );
    else if (label == routes.PROFILE)
      return <AntDesign size={size} name="user" color={colors.primary} />;
        else if (label == routes.CATEGORY)
      return <Ionicons name="search" size={size} color={colors.primary} />;
    else
      return (
        <Ionicons
          name="list"
          size={size}
          color={colors.primary}
        />
      );
  };
  return (
    <CustomView style={{ flexDirection: "row" }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
          key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              height: adaptToHeight(0.07),
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {iconRender(label)}
          </TouchableOpacity>
        );
      })}
    </CustomView>
  );
}
export default MyTabBar;

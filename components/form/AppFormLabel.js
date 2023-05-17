import React from "react";
import { Text, View } from "react-native";
import colors from "../../config/colors";
import { adaptToHeight } from "../../config/dimensions";
import AppText from "../AppText";

import CustomView from "../CustomView";

function AppFormLabel({ name, style, required = false, lang, label }) {
  return (
    <CustomView
      style={{
        flexDirection: lang == "AR" ? "row-reverse" : "row",
        alignSelf: lang == "AR" ? "flex-end" : "flex-start",
        alignItems: "center",
        marginBottom: adaptToHeight(0.015),
      }}
    >
      <AppText style={[style, {}]}>{label}</AppText>
      {required && (
        <AppText
          style={{ color: colors.danger, paddingHorizontal: sizes.padding }}
        >
          *
        </AppText>
      )}
    </CustomView>
  );
}

export default AppFormLabel;

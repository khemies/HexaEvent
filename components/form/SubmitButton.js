import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";

function SubmitButton({ title, style , styleText }) {
  const { handleSubmit, values } = useFormikContext();
  
  return <AppButton title={title} onPress={handleSubmit} style={style} styleText={styleText}/>;
}

export default SubmitButton;

import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";
import AppButtonGradient from "../AppButtonGradient";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return <AppButtonGradient onPress={handleSubmit} title={title} />;
}

export default SubmitButton;

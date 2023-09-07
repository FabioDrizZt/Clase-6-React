import Container from "./Container";
import { useState } from "react";

const FormComponent = () => {
  const [inputValues, setInputValues] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValues);
    e.target.reset();
  };
  const handleClean = () => {
    setInputValues({
      name: "",
      lastName: "",
      email: "",
      password: "",
    });
  };
  const childProps = {
    inputValues,
    setInputValues,
    handleSubmit,
    handleClean,
  };
  return <Container {...childProps} />;
};

export default FormComponent;

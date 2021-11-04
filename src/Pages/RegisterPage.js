import React from "react";
import RegisterForm from "../Components/RegisterForm";
import { VStack } from "@chakra-ui/layout";

function RegisterPage() {
  return (
    <VStack p={4}>
      <RegisterForm />
    </VStack>
  );
}

export default RegisterPage;

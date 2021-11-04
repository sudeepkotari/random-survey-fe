import { VStack } from "@chakra-ui/layout";
import React from "react";
import LoginForm from "../Components/LoginForm";

function LoginPage() {
  return (
    <VStack p={4}>
      <LoginForm />
    </VStack>
  );
}

export default LoginPage;

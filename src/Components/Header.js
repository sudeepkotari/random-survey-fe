import React, { useEffect } from "react";
import axios from "axios";
import localStorage from "local-storage";
import { useHistory } from "react-router-dom";
import { VStack } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

function Header() {
  const history = useHistory();

  useEffect(() => {
    requestLogin();
  });

  const requestLogin = async () => {
    try {
      const accessToken = localStorage.get("accessToken");
      if (!accessToken) {
        history.replace("/register");
        return;
      }
      await axios.get("https://random-survey-be.herokuapp.com/api", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
    } catch (error) {
      if (!error.response) {
        return;
      }

      if (error.response.data.message === "jwt expired") {
        history.replace("/register");
      } else {
        localStorage.remove("accessToken");
        history.replace("/register");
      }
    }
  };

  return (
    <VStack>
      <Heading as="h2" size="xl">
        Environment Awareness Survey
      </Heading>
      <Heading as="h5" size="md">
        strongly disagree --- 1 2 3 4 --- strongly agree
      </Heading>
    </VStack>
  );
}

export default Header;

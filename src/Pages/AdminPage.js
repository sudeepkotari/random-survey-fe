import React, { useEffect, useState } from "react";
import { Heading, Progress } from "@chakra-ui/react";
import { Stack, VStack } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import axios from "axios";
import { useToast } from "@chakra-ui/toast";
import { Link as ReachLink } from "react-router-dom";
import localStorage from "local-storage";
import { Link } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";

import Header from "../Components/Header";

function AdminPage() {
  const accessToken = localStorage.get("accessToken");

  const [question1Value, setQuestion1Value] = React.useState([0, 0, 0, 0]);
  const [question2Value, setQuestion2Value] = React.useState([0, 0, 0, 0]);
  const [question3Value, setQuestion3Value] = React.useState([0, 0, 0, 0]);
  const [question4Value, setQuestion4Value] = React.useState([0, 0, 0, 0]);
  const [question5Value, setQuestion5Value] = React.useState([0, 0, 0, 0]);
  const [question6Value, setQuestion6Value] = React.useState([0, 0, 0, 0]);
  const [question7Value, setQuestion7Value] = React.useState([0, 0, 0, 0]);
  const [question8Value, setQuestion8Value] = React.useState([0, 0, 0, 0]);
  const [question9Value, setQuestion9Value] = React.useState([0, 0, 0, 0]);
  const [question10Value, setQuestion10Value] = React.useState([0, 0, 0, 0]);

  const toast = useToast();

  const [message, setMessage] = useState({
    status: "info",
    title: "Enter valid credentials",
    description: "enter valid email address and password",
    duration: 1,
  });

  useEffect(() => {
    toast({
      title: message.title,
      description: message.description,
      status: message.status,
      duration: message.duration,
      isClosable: true,
    });
  }, [message, toast]);

  const getSurveyResult = async () => {
    try {
      const response = await axios.get(
        "https://random-survey-be.herokuapp.com/api/admin/get-survey-result",
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      console.log(response);
      setMessage({
        status: "success",
        title: "Survey Result Received",
        description: "survey result displayed below",
        duration: 5000,
      });
      setQuestion1Value(response.data.question_1_percentage_calculation);
      setQuestion2Value(response.data.question_2_percentage_calculation);
      setQuestion3Value(response.data.question_3_percentage_calculation);
      setQuestion4Value(response.data.question_4_percentage_calculation);
      setQuestion5Value(response.data.question_5_percentage_calculation);
      setQuestion6Value(response.data.question_6_percentage_calculation);
      setQuestion7Value(response.data.question_7_percentage_calculation);
      setQuestion8Value(response.data.question_8_percentage_calculation);
      setQuestion9Value(response.data.question_9_percentage_calculation);
      setQuestion10Value(response.data.question_10_percentage_calculation);
    } catch (error) {
      setMessage({
        status: "error",
        title: "Authentication failed",
        description: error.response.data.message,
        duration: 5000,
      });
    }
  };

  return (
    <VStack spacing={8} m={8}>
      <Header />
      <Stack spacing={8}>
        <Button colorScheme="orange" size="md" onClick={getSurveyResult}>
          Get Survey Result
        </Button>
        <Stack>
          <Heading as="h2" size="sm">
            1) I am concerned about the environment and reusing/recycling is one
            way I can make a difference.
          </Heading>
          <Stack spacing={5}>
            <Progress colorScheme="pink" size="md" value={question1Value[0]} />
            <Progress colorScheme="red" size="md" value={question1Value[1]} />
            <Progress colorScheme="blue" size="md" value={question1Value[2]} />
            <Progress colorScheme="green" size="md" value={question1Value[3]} />
          </Stack>
        </Stack>

        <Stack>
          <Heading as="h2" size="sm">
            2) I know about recycling but don’t practice it.
          </Heading>
          <Stack spacing={5}>
            <Progress colorScheme="pink" size="md" value={question2Value[0]} />
            <Progress colorScheme="red" size="md" value={question2Value[1]} />
            <Progress colorScheme="blue" size="md" value={question2Value[2]} />
            <Progress colorScheme="green" size="md" value={question2Value[3]} />
          </Stack>
        </Stack>

        <Stack>
          <Heading as="h2" size="sm">
            3) I consciously try to recycle and tell my friends about it.
          </Heading>
          <Stack spacing={5}>
            <Progress colorScheme="pink" size="md" value={question3Value[0]} />
            <Progress colorScheme="red" size="md" value={question3Value[1]} />
            <Progress colorScheme="blue" size="md" value={question3Value[2]} />
            <Progress colorScheme="green" size="md" value={question3Value[3]} />
          </Stack>
        </Stack>

        <Stack>
          <Heading as="h2" size="sm">
            4) I know the earth is in trouble but I really don’t care.
          </Heading>
          <Stack spacing={5}>
            <Progress colorScheme="pink" size="md" value={question4Value[0]} />
            <Progress colorScheme="red" size="md" value={question4Value[1]} />
            <Progress colorScheme="blue" size="md" value={question4Value[2]} />
            <Progress colorScheme="green" size="md" value={question4Value[3]} />
          </Stack>
        </Stack>

        <Stack>
          <Heading as="h2" size="sm">
            5) I take steps not to damage the environment.
          </Heading>
          <Stack spacing={5}>
            <Progress colorScheme="pink" size="md" value={question5Value[0]} />
            <Progress colorScheme="red" size="md" value={question5Value[1]} />
            <Progress colorScheme="blue" size="md" value={question5Value[2]} />
            <Progress colorScheme="green" size="md" value={question5Value[3]} />
          </Stack>
        </Stack>

        <Stack>
          <Heading as="h2" size="sm">
            6) Lessons on the environment do not connect to the real world.
          </Heading>
          <Stack spacing={5}>
            <Progress colorScheme="pink" size="md" value={question6Value[0]} />
            <Progress colorScheme="red" size="md" value={question6Value[1]} />
            <Progress colorScheme="blue" size="md" value={question6Value[2]} />
            <Progress colorScheme="green" size="md" value={question6Value[3]} />
          </Stack>
        </Stack>

        <Stack>
          <Heading as="h2" size="sm">
            7) The information in the environment topics is not relevant to my
            needs.
          </Heading>
          <Stack spacing={5}>
            <Progress colorScheme="pink" size="md" value={question7Value[0]} />
            <Progress colorScheme="red" size="md" value={question7Value[1]} />
            <Progress colorScheme="blue" size="md" value={question7Value[2]} />
            <Progress colorScheme="green" size="md" value={question7Value[3]} />
          </Stack>
        </Stack>

        <Stack>
          <Heading as="h2" size="sm">
            8) Nowadays when I watch ill-treatment of wildlife on television, I
            get angry.
          </Heading>
          <Stack spacing={5}>
            <Progress colorScheme="pink" size="md" value={question8Value[0]} />
            <Progress colorScheme="red" size="md" value={question8Value[1]} />
            <Progress colorScheme="blue" size="md" value={question8Value[2]} />
            <Progress colorScheme="green" size="md" value={question8Value[3]} />
          </Stack>
        </Stack>

        <Stack>
          <Heading as="h2" size="sm">
            9) I am not concerned about what happens to the plants and animals.
          </Heading>
          <Stack spacing={5}>
            <Progress colorScheme="pink" size="md" value={question9Value[0]} />
            <Progress colorScheme="red" size="md" value={question9Value[1]} />
            <Progress colorScheme="blue" size="md" value={question9Value[2]} />
            <Progress colorScheme="green" size="md" value={question9Value[3]} />
          </Stack>
        </Stack>

        <Stack>
          <Heading as="h2" size="sm">
            10) Lessons on the environmental topics make me appreciate nature
            and want to help conserve it for future generations.
          </Heading>
          <Stack spacing={5}>
            <Progress colorScheme="pink" size="md" value={question10Value[0]} />
            <Progress colorScheme="red" size="md" value={question10Value[1]} />
            <Progress colorScheme="blue" size="md" value={question10Value[2]} />
            <Progress
              colorScheme="green"
              size="md"
              value={question10Value[3]}
            />
          </Stack>
        </Stack>
      </Stack>

      <Text>
        Home page
        <Link as={ReachLink} color="orange.400" to="/">
          Home
        </Link>
      </Text>
    </VStack>
  );
}

export default AdminPage;

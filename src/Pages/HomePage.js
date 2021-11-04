import React, { useEffect, useState } from "react";
import { Heading } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import { Stack, VStack } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import axios from "axios";
import { useToast } from "@chakra-ui/toast";
import { Link as ReachLink, useHistory } from "react-router-dom";
import localStorage from "local-storage";
import { Link } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";

import Header from "../Components/Header";

function HomePage() {
  const accessToken = localStorage.get("accessToken");

  const [question1Value, setQuestion1Value] = React.useState("1");
  const [question2Value, setQuestion2Value] = React.useState("1");
  const [question3Value, setQuestion3Value] = React.useState("1");
  const [question4Value, setQuestion4Value] = React.useState("1");
  const [question5Value, setQuestion5Value] = React.useState("1");
  const [question6Value, setQuestion6Value] = React.useState("1");
  const [question7Value, setQuestion7Value] = React.useState("1");
  const [question8Value, setQuestion8Value] = React.useState("1");
  const [question9Value, setQuestion9Value] = React.useState("1");
  const [question10Value, setQuestion10Value] = React.useState("1");

  const history = useHistory();
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

  const onSubmit = async () => {
    try {
      await axios.post(
        "https://random-survey-be.herokuapp.com/api/survey/take-survey",
        {
          question_1_answer: question1Value,
          question_2_answer: question2Value,
          question_3_answer: question3Value,
          question_4_answer: question4Value,
          question_5_answer: question5Value,
          question_6_answer: question6Value,
          question_7_answer: question7Value,
          question_8_answer: question8Value,
          question_9_answer: question9Value,
          question_10_answer: question10Value,
        },
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      setMessage({
        status: "success",
        title: "response received successfully",
        description: "10 Rs has been credited in your wallet",
        duration: 5000,
      });

      history.replace("/login");
    } catch (error) {
      console.log(error.response.data);
      setMessage({
        status: "error",
        title: "validation error",
        description: error.response.data.message,
        duration: 5000,
      });
    }
  };

  return (
    <VStack spacing={8} m={8}>
      <Header />
      <Stack spacing={8}>
        <Stack>
          <Heading as="h2" size="sm">
            1) I am concerned about the environment and reusing/recycling is one
            way I can make a difference.
          </Heading>
          <RadioGroup onChange={setQuestion1Value} value={question1Value}>
            <Stack direction="row">
              <Radio colorScheme="pink" value="1">
                1
              </Radio>
              <Radio colorScheme="red" value="2">
                2
              </Radio>
              <Radio colorScheme="blue" value="3">
                3
              </Radio>
              <Radio colorScheme="green" value="4">
                4
              </Radio>
            </Stack>
          </RadioGroup>
        </Stack>

        <Stack>
          <Heading as="h2" size="sm">
            2) I know about recycling but don’t practice it.
          </Heading>
          <RadioGroup onChange={setQuestion2Value} value={question2Value}>
            <Stack direction="row">
              <Radio colorScheme="pink" value="1">
                1
              </Radio>
              <Radio colorScheme="red" value="2">
                2
              </Radio>
              <Radio colorScheme="blue" value="3">
                3
              </Radio>
              <Radio colorScheme="green" value="4">
                4
              </Radio>
            </Stack>
          </RadioGroup>
        </Stack>

        <Stack>
          <Heading as="h2" size="sm">
            3) I consciously try to recycle and tell my friends about it.
          </Heading>
          <RadioGroup onChange={setQuestion3Value} value={question3Value}>
            <Stack direction="row">
              <Radio colorScheme="pink" value="1">
                1
              </Radio>
              <Radio colorScheme="red" value="2">
                2
              </Radio>
              <Radio colorScheme="blue" value="3">
                3
              </Radio>
              <Radio colorScheme="green" value="4">
                4
              </Radio>
            </Stack>
          </RadioGroup>
        </Stack>

        <Stack>
          <Heading as="h2" size="sm">
            4) I know the earth is in trouble but I really don’t care.
          </Heading>
          <RadioGroup onChange={setQuestion4Value} value={question4Value}>
            <Stack direction="row">
              <Radio colorScheme="pink" value="1">
                1
              </Radio>
              <Radio colorScheme="red" value="2">
                2
              </Radio>
              <Radio colorScheme="blue" value="3">
                3
              </Radio>
              <Radio colorScheme="green" value="4">
                4
              </Radio>
            </Stack>
          </RadioGroup>
        </Stack>

        <Stack>
          <Heading as="h2" size="sm">
            5) I take steps not to damage the environment.
          </Heading>
          <RadioGroup onChange={setQuestion5Value} value={question5Value}>
            <Stack direction="row">
              <Radio colorScheme="pink" value="1">
                1
              </Radio>
              <Radio colorScheme="red" value="2">
                2
              </Radio>
              <Radio colorScheme="blue" value="3">
                3
              </Radio>
              <Radio colorScheme="green" value="4">
                4
              </Radio>
            </Stack>
          </RadioGroup>
        </Stack>

        <Stack>
          <Heading as="h2" size="sm">
            6) Lessons on the environment do not connect to the real world.
          </Heading>
          <RadioGroup onChange={setQuestion6Value} value={question6Value}>
            <Stack direction="row">
              <Radio colorScheme="pink" value="1">
                1
              </Radio>
              <Radio colorScheme="red" value="2">
                2
              </Radio>
              <Radio colorScheme="blue" value="3">
                3
              </Radio>
              <Radio colorScheme="green" value="4">
                4
              </Radio>
            </Stack>
          </RadioGroup>
        </Stack>

        <Stack>
          <Heading as="h2" size="sm">
            7) The information in the environment topics is not relevant to my
            needs.
          </Heading>
          <RadioGroup onChange={setQuestion7Value} value={question7Value}>
            <Stack direction="row">
              <Radio colorScheme="pink" value="1">
                1
              </Radio>
              <Radio colorScheme="red" value="2">
                2
              </Radio>
              <Radio colorScheme="blue" value="3">
                3
              </Radio>
              <Radio colorScheme="green" value="4">
                4
              </Radio>
            </Stack>
          </RadioGroup>
        </Stack>

        <Stack>
          <Heading as="h2" size="sm">
            8) Nowadays when I watch ill-treatment of wildlife on television, I
            get angry.
          </Heading>
          <RadioGroup onChange={setQuestion8Value} value={question8Value}>
            <Stack direction="row">
              <Radio colorScheme="pink" value="1">
                1
              </Radio>
              <Radio colorScheme="red" value="2">
                2
              </Radio>
              <Radio colorScheme="blue" value="3">
                3
              </Radio>
              <Radio colorScheme="green" value="4">
                4
              </Radio>
            </Stack>
          </RadioGroup>
        </Stack>

        <Stack>
          <Heading as="h2" size="sm">
            9) I am not concerned about what happens to the plants and animals.
          </Heading>
          <RadioGroup onChange={setQuestion9Value} value={question9Value}>
            <Stack direction="row">
              <Radio colorScheme="pink" value="1">
                1
              </Radio>
              <Radio colorScheme="red" value="2">
                2
              </Radio>
              <Radio colorScheme="blue" value="3">
                3
              </Radio>
              <Radio colorScheme="green" value="4">
                4
              </Radio>
            </Stack>
          </RadioGroup>
        </Stack>

        <Stack>
          <Heading as="h2" size="sm">
            10) Lessons on the environmental topics make me appreciate nature
            and want to help conserve it for future generations.
          </Heading>
          <RadioGroup onChange={setQuestion10Value} value={question10Value}>
            <Stack direction="row">
              <Radio colorScheme="pink" value="1">
                1
              </Radio>
              <Radio colorScheme="red" value="2">
                2
              </Radio>
              <Radio colorScheme="blue" value="3">
                3
              </Radio>
              <Radio colorScheme="green" value="4">
                4
              </Radio>
            </Stack>
          </RadioGroup>
        </Stack>
      </Stack>
      <Button colorScheme="orange" size="lg" onClick={onSubmit}>
        submit
      </Button>
      <Text>
        Admin..?
        <Link as={ReachLink} color="orange.400" to="/admin">
          Get Survey Result
        </Link>
      </Text>
    </VStack>
  );
}

export default HomePage;

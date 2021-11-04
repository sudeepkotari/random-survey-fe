import { Button } from "@chakra-ui/button";
import { FormControl } from "@chakra-ui/form-control";
import { FormErrorMessage, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Link, VStack } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Link as ReachLink, useHistory } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
import { useToast } from "@chakra-ui/toast";
import localStorage from "local-storage";

function LoginForm() {
  const initialValues = {
    email: "",
    name: "",
    phoneNumber: "",
    otp: "",
  };

  const validationSchema = yup.object({
    email: yup.string().email().required("Email is a required field"),
    name: yup.string().required("Name is a required field"),
    phoneNumber: yup.string().required("phone number is required"),
    otp: yup.number().required("OTP is required field"),
  });

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

  const onSubmit = async (values, actions) => {
    try {
      const response = await axios.post(
        "https://random-survey-be.herokuapp.com/api/auth/login",
        {
          email: values.email,
          name: values.name,
          phoneNumber: values.phoneNumber,
          otp: values.otp,
        }
      );
      const { accessToken } = response.data;
      localStorage.set("accessToken", accessToken);
      history.replace("/");
      actions.setSubmitting(false);
    } catch (error) {
      setMessage({
        status: "error",
        title: "invalid credentials",
        description: error.response.data.message,
        duration: 5000,
      });
    }
  };

  return (
    <VStack p="4">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(props) => (
          <Form>
            <Field name="email">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.email && form.touched.email}
                >
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    {...field}
                    placeholder="Enter email"
                    id="email"
                    variant="outline"
                    type="email"
                  />
                  <FormErrorMessage mb={3}>
                    {form.errors.email}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="name">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input
                    {...field}
                    id="name"
                    variant="outline"
                    type="text"
                    placeholder="Enter name"
                  />
                  <FormErrorMessage mb={3}>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="phoneNumber">
              {({ field, form }) => (
                <FormControl
                  isInvalid={
                    form.errors.phoneNumber && form.touched.phoneNumber
                  }
                >
                  <FormLabel htmlFor="phoneNumber">phone Number</FormLabel>
                  <Input
                    {...field}
                    id="phoneNumber"
                    variant="outline"
                    type="number"
                    placeholder="Enter a phone number"
                  />
                  <FormErrorMessage mb={3}>
                    {form.errors.phoneNumber}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="otp">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.otp && form.touched.otp}>
                  <FormLabel htmlFor="otp">OTP</FormLabel>
                  <Input
                    {...field}
                    id="otp"
                    variant="outline"
                    type="number"
                    placeholder="Enter a OTP"
                  />
                  <FormErrorMessage mb={3}>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Button
              mt={3}
              mb={3}
              colorScheme="orange"
              isLoading={props.isSubmitting}
              type="submit"
              width="100%"
            >
              Log In
            </Button>
          </Form>
        )}
      </Formik>
      <Text>
        Dont have verification code..?
        <Link as={ReachLink} color="orange.400" to="/register">
          Generate Code
        </Link>
      </Text>
    </VStack>
  );
}

export default LoginForm;

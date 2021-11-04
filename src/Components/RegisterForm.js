import { Button } from "@chakra-ui/button";
import { FormControl } from "@chakra-ui/form-control";
import { FormErrorMessage, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Link, VStack } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { Link as ReachLink } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import { useToast } from "@chakra-ui/toast";
import { useHistory } from "react-router-dom";

function RegisterForm() {
  const history = useHistory();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = yup.object({
    email: yup.string().email().required("Email is a required field"),
  });

  //   const [show, setShow] = useState(false);
  //   const handleClick = () => setShow(!show);
  const toast = useToast();

  const [message, setMessage] = useState({
    status: "info",
    title: "Enter valid credentials",
    description:
      "enter your correct name,valid email addres and strong password",
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
        "https://random-survey-be.herokuapp.com/api/auth/verify-email",
        {
          email: values.email,
        }
      );
      actions.setSubmitting(false);
      setMessage({
        status: "success",
        title: response.data.message,
        description:
          "Please enter the verification code that has just been sent to your email account to verify your email and continue the registration process.",
        duration: 10000,
      });
      history.replace("/login");
    } catch (error) {
      setMessage({
        status: "error",
        title: "Email not sent!",
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
                    id="email"
                    variant="outline"
                    type="email"
                    placeholder="Enter email"
                  />
                  <FormErrorMessage mb={3}>
                    {form.errors.email}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Button
              mb={4}
              mt={3}
              width="100%"
              colorScheme="orange"
              isLoading={props.isSubmitting}
              type="submit"
            >
              Generate OTP
            </Button>
          </Form>
        )}
      </Formik>
      <Text>
        Already generated..?
        <Link as={ReachLink} color="orange.400" to="/login">
          Sign In
        </Link>
      </Text>
    </VStack>
  );
}

export default RegisterForm;

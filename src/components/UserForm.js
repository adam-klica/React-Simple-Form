import React, { useState } from "react";
import {
  Box,
  Input,
  FormControl,
  Button,
  FormLabel,
  Center,
} from "@chakra-ui/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserForm(props) {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      name.length < 1 ||
      lastname.length < 1 ||
      street.length < 1 ||
      city.length < 1
    ) {
      toast.error("You need to fill every field!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      name: name,
      lastname: lastname,
      street: street,
      city: city,
    });
  };

  return (
    <Center>
      <Box
        backgroundColor="white"
        p="3"
        m="10"
        borderRadius="10"
        boxShadow="8px 10px 22px -11px rgba(0,0,0,0.73)"
        width="75vw"
      >
        <FormControl
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Box p="4">
            <FormLabel>First Name</FormLabel>
            <Input
              placeholder="Firstname"
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></Input>
          </Box>
          <Box p="4">
            <FormLabel>Last Name</FormLabel>
            <Input
              placeholder="Lastname"
              onChange={(e) => {
                setLastname(e.target.value);
              }}
            ></Input>
          </Box>
          <Box p="4">
            <FormLabel>Street</FormLabel>
            <Input
              placeholder="Street"
              onChange={(e) => {
                setStreet(e.target.value);
              }}
            ></Input>
          </Box>
          <Box p="4">
            <FormLabel>City</FormLabel>
            <Input
              placeholder="City"
              onChange={(e) => {
                setCity(e.target.value);
              }}
            ></Input>
          </Box>
          <Box mt="2">
            <Button
              colorScheme="blue"
              onClick={handleSubmit}
              ml="3"
              mt="10"
              pl="3vw"
              pr="3vw"
              mr="3"
              w="10vw"
            >
              Insert
            </Button>
          </Box>
        </FormControl>
      </Box>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Center>
  );
}

export default UserForm;

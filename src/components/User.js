import React from "react";
import { Button } from "@chakra-ui/react";
import { Box, Text, Center } from "@chakra-ui/react";

const User = ({ users, removeUser }) => {
  return users.map((user, index) => (
    <Center>
      <Box
        key={index}
        backgroundColor="white"
        p="3"
        m="2"
        borderRadius="10"
        boxShadow="8px 10px 22px -11px rgba(0,0,0,0.73)"
        width="75vw"
      >
        <Box key={user.id} justifyContent="space-between">
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Box p="4">
              <Text fontWeight="500">{user.name}</Text>
            </Box>
            <Box p="4">
              <Text fontWeight="500">{user.lastname}</Text>
            </Box>
            <Box p="4">
              <Text fontWeight="500">{user.street}</Text>
            </Box>
            <Box p="4">
              <Text fontWeight="500">{user.city}</Text>
            </Box>

            <Button
              onClick={() => removeUser(user.id)}
              ml="3"
              pl="3vw"
              pr="3vw"
              mr="3"
              mt="2"
              w="10vw"
            >
              Remove
            </Button>
          </Box>
        </Box>
      </Box>
    </Center>
  ));
};

export default User;

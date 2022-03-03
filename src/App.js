import "./App.css";
import { Box } from "@chakra-ui/react";
import UserList from "./components/UserList";

function App() {
  return (
    <Box backgroundColor="gray.300" height="100vh">
      <UserList></UserList>
    </Box>
  );
}

export default App;

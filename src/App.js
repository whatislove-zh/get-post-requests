import { Container } from "@mui/material";
import {Header} from "./components/Header"
import {Hero} from "./components/Hero"
import {Users} from "./components/Users"
import {SignUp} from "./components/SignUp"


function App() {
  return (
    <Container maxWidth="lg">
      <Header />
      <Hero />
      <Users />
      <SignUp />
    </Container>
  );
}

export default App;

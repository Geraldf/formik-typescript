import React from "react";
// import styled from "styled-components";
import styled from "@mui/styled-engine";
import TestForm from './components/Forms/TestForm/TestForm';
import Signup from "./components/Forms/TestForm/signup";





const Container = styled("div")({
  margin: "0 auto",
  width: "40%",
  padding: "20px",

  // eslint-disable-next-line no-useless-computed-key
  ["@media (max-width: 768px)"]: {
    width: "100%",
  },
});

function App(): React.ReactElement {
  return (
    <Container>
      <Signup/>
      <TestForm />
      {/* <SimpleProjectForm />
      <SimpleProjectFormStyled />
      <NestedProjectForm />
      <FormWithFormikContext /> */}
    </Container>
  );
}

export default App;

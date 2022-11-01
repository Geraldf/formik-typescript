import React from "react";
// import styled from "styled-components";
import styled from "@mui/styled-engine";
import TestForm from "./components/Forms/TestForm/TestForm";
import Signup from "./components/Forms/TestForm/signup";
import { StyledApp } from "./components/Forms/styles";
import Form1 from "./components/Forms/Form1";
import WithMaterialUI from "./components/Form2/f2";

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
      <StyledApp>
        <WithMaterialUI />
      </StyledApp>
    </Container>
  );
}

export default App;

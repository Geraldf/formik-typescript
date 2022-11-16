import React from "react";
// import styled from "styled-components";
import styled from "@mui/styled-engine";
import { StyledApp } from "./components/utils/styles";
import WithMaterialUI from "./components/Form2/f2";

const Container = styled("div")({
  margin: "0 auto",
  width: "90%",
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

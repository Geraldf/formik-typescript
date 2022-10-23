import styled from "styled-components";

const Status = styled.div`
  font-size: 0.8rem;
  margin-bottom: 1em;
`;

export const GreenStatus = styled(Status)`
  color: #00ac15;
`;

export const GrayStatus = styled(Status)`
  color: #444444;
`;

export const State = styled.div`
  font-family: "Courier New", Courier, monospace;
  font-size: 0.8rem;
`;

export const TagCloud = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Tag = styled.div`
  background: #0c6d4d;
  color: #ffffff;
  font-size: 0.8rem;
  font-weight: bold;
  margin-right: 0.5rem;
  margin-top: 0.3rem;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
`;

export const TagRemove = styled.div`
  cursor: pointer;
  display: inline-block;
  margin-left: 0.3rem;
  color: #cccccc;
`;

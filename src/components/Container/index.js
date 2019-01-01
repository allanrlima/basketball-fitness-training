import React from "react";
import styled from "styled-components/native";

const StyledContainer = styled.View`
  background-color: papayawhip;
  flex: 1;
  text-align: center;
  justify-content: center;
  padding: 32px 16px 32px 16px;
`;

export const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

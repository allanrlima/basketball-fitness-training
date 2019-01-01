import React from "react";
import styled from "styled-components/native";

const StyledContainer = styled.View`
  background-color: papayawhip;
  flex: 1;
  text-align: center;
  justify-content: ${props => props.justifyContent || "center"};
  padding: 32px 16px 32px 16px;
`;

export const Container = ({ children, justifyContent }) => {
  return (
    <StyledContainer justifyContent={justifyContent}>
      {children}
    </StyledContainer>
  );
};

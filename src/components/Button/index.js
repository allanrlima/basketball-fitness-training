import React from "react";
import styled from "styled-components/native";
import { orange, white } from "../../config/styles/index";

const StyledButton = styled.TouchableOpacity`
  background-color: ${orange};
  border-radius: 45;
  height: 48px;
  justify-content: center;
  align-items: center;
`;

const StyledButtonText = styled.Text`
  color: ${white};
  font-size: 14px;
`;

export const Button = ({ title = "no title", onPress }) => {
  const uppercaseTitle = title.toUpperCase();
  return (
    <StyledButton onPress={onPress}>
      <StyledButtonText>{uppercaseTitle}</StyledButtonText>
    </StyledButton>
  );
};

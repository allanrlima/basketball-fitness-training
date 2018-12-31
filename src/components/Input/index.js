import React from "react";
import styled from "styled-components/native";
import { orange, white } from "../../config/styles/index";

const Wrapper = styled.View`
  padding-bottom: 8px;
`;

const WrapperLabel = styled.View`
  padding-bottom: 16px;
`;

const Label = styled.Text``;

const StyledInput = styled.TextInput`
  height: 48px;
  background-color: ${white};
  border: #000;
  border-radius: 15px;
  border: 1px solid #ced4da;
  font-size: 14px;
  padding: 8px;
`;

export const Input = ({ label = "No label", value }) => {
  return (
    <Wrapper>
      <WrapperLabel>
        <Label>{label}</Label>
      </WrapperLabel>
      <StyledInput value={value} maxLength={48} />
    </Wrapper>
  );
};

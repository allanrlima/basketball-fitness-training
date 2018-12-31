import React from "react";
import styled from "styled-components/native";

const LogoWrapper = styled.View`
  height: 56px;
`;

const LogoText = styled.Text`
  font-size: 28px;
`;

export const Logo = () => (
  <LogoWrapper>
    <LogoText>Basketball Fitness Training</LogoText>
  </LogoWrapper>
);

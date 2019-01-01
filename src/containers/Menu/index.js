import React from "react";
import i18n from "i18n-js";
import { Container } from "../../components/Container";
import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo/index";
import styled from "styled-components/native";

const ButtonWrapper = styled.View`
  padding-top: 8px;
`;

export default class Login extends React.Component {
  static navigationOptions = { header: null };

  render() {
    return (
      <Container>
        <Logo />
        <ButtonWrapper>
          <Button title={i18n.t("menu.addTraining")} />
        </ButtonWrapper>
        <ButtonWrapper>
          <Button title={i18n.t("menu.recordWeight")} />
        </ButtonWrapper>
        <ButtonWrapper>
          <Button title={i18n.t("menu.stats")} />
        </ButtonWrapper>
      </Container>
    );
  }
}

import React from "react";
import i18n from "i18n-js";
import { Container } from "../../components/Container";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo/index";

export default class Login extends React.Component {
  render() {
    return (
      <Container>
        <Logo />
        <Input
          label={i18n.t("login.insertYourNickname")}
          placeholder={i18n.t("login.inputPlaceholder")}
        />
        <Button title={i18n.t("login.submit")} />
      </Container>
    );
  }
}

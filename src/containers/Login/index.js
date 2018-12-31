import React from "react";
import styled from "styled-components/native";
import { Container } from "../../components/Container";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo/index";

export default class Login extends React.Component {
  render() {
    return (
      <Container>
        <Logo />
        <Input />
        <Button />
      </Container>
    );
  }
}

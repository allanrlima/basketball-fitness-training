import React from "react";
import styled from "styled-components/native";
import { Container } from "../../components/Container";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export default class Login extends React.Component {
  render() {
    return (
      <Container>
        <Input />
        <Button />
      </Container>
    );
  }
}

import React from "react";
import { Linking } from "react-native";
import i18n from "i18n-js";
import { Container } from "../../components/Container";
import { Button } from "../../components/Button";
import styled from "styled-components/native";

const TitleWrapper = styled.View`
  padding-top: 16px;
  padding-bottom: 16px;
`;

const Title = styled.Text`
  padding-top: 8px;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
`;

const ButtonWrapper = styled.View`
  padding-top: 16px;
`;

const HelpTextWrapper = styled.TouchableOpacity`
  padding-top: 8px;
`;

const HelpText = styled.Text`
  font-size: 14px;
  color: #663366;
`;

export default class Login extends React.Component {
  static navigationOptions = { header: null };

  showWebPage = link => {
    Linking.openURL(link);
  };

  render() {
    return (
      <Container justifyContent={"flex-start"}>
        <TitleWrapper>
          <Title>{i18n.t("training.title")}</Title>
        </TitleWrapper>
        {i18n.t("trainings").map(training => (
          <ButtonWrapper>
            <Button title={training.name} />
            <HelpTextWrapper
              onPress={() => this.showWebPage(training.likToHelp)}
            >
              <HelpText>{i18n.t("training.help")}</HelpText>
            </HelpTextWrapper>
          </ButtonWrapper>
        ))}
      </Container>
    );
  }
}

import React from "react";
import Login from "./src/containers/Login";
import { Localization } from "expo-localization";
import i18n from "i18n-js";
import { pt, en } from "./src/config/localization";

i18n.fallbacks = true;
i18n.translations = { pt, en };
i18n.locale = Localization.locale;

export default class App extends React.Component {
  render() {
    return <Login />;
  }
}

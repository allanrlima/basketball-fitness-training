import { Localization } from "expo-localization";
import i18n from "i18n-js";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "./src/containers/Login";
import Menu from "./src/containers/Menu";
import Training from "./src/containers/Training";
import { pt, en } from "./src/config/localization";

i18n.fallbacks = true;
i18n.translations = { pt, en };
i18n.locale = Localization.locale;

const AppNavigator = createStackNavigator(
  { Login, Menu, Training },
  { initialRouteName: "Training" }
);

export default createAppContainer(AppNavigator);

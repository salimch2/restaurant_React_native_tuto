import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/search.screen";
import ResultsShow from "./src/screens/ResultsShow.screen";
const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsShow,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search",
    },
  }
);
export default createAppContainer(navigator);

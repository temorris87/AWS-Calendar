import ViewPageScreen from './Components/ViewPage'
import LandingPageScreen from './Components/LandingPage'
import CreatePageScreen from './Components/CreatePage'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


const AppNavigator = createStackNavigator({
  View: ViewPageScreen,
  Landing: LandingPageScreen,
  Create: CreatePageScreen
});

export default createAppContainer(AppNavigator);
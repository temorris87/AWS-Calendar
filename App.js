import ViewPageScreen from './Components/ViewPage'
import LandingPageScreen from './Components/LandingPage'
import CreatePageScreen from './Components/CreatePage'
import EditPageScreen from './Components/CreatePage'
import { createAppContainer, StackNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


const AppNavigator = createStackNavigator({
  Landing: LandingPageScreen,
  View: ViewPageScreen,
  Create: CreatePageScreen,
  Edit: EditPageScreen
});

export default createAppContainer(AppNavigator);
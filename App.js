import ViewScreenPage from './Components/ViewPage'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


const AppNavigator = createStackNavigator({
  View: ViewScreenPage
});

export default createAppContainer(AppNavigator);


// export default createSwitchNavigator({ 
//   ViewScreen: ViewScreenPage
// });
// const AuthStack = createStackNavigator({ 
//   LogIn: LogInScreen, 
//   SignUp: SignUpScreen
// });

// createAppContainer(createSwitchNavigator(
//   {
//     LogIn: LogInScreen,
//     App: AppStack,
//     Auth: AuthStack,
//   },
//   {
//     initialRouteName: 'ViewScreen',
//   }
// ));

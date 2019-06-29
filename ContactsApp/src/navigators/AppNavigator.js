import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/Home';
import ContactsScreen from '../screens/Contacts';

const MainNavigator = createSwitchNavigator({
    Home: { screen: HomeScreen },
    Contacts: { screen: ContactsScreen },
  }, {
    initialRouteName: 'Home'
  })
;

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;
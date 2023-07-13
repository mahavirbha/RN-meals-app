import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar, StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor='#FFF' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='MealsCategories' component={CategoriesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

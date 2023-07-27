import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar, StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import FavouriteScreen from './screens/FavouriteScreen';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator(params) {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#351401',
        },
        headerTintColor: '#FFFFFF',
        sceneContainerStyle: {
          backgroundColor: '#3f2f25',
        },
        drawerContentStyle: {
          backgroundColor: '#351401',
        },
        drawerInactiveTintColor: '#FFFFFF',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#e4baa1',
      }}
    >
      <Drawer.Screen
        name='MealsCategories'
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => (
            <Ionicons name='list' color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name='FavouriteScreen'
        component={FavouriteScreen}
        options={{
          title: 'Favourites',
          drawerIcon: ({ color, size }) => (
            <Ionicons name='star' color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#3f2f25' />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='MealsCategories'
          screenOptions={{
            headerStyle: {
              backgroundColor: '#351401',
            },
            headerTintColor: '#FFFFFF',
            contentStyle: {
              backgroundColor: '#3f2f25',
            },
          }}
        >
          <Stack.Screen
            name='Drawer'
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='MealsOverviewScreen'
            component={MealsOverviewScreen}
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return { title: catId };
            // }}
          />
          <Stack.Screen
            name='MealDetailsScreen'
            component={MealDetailsScreen}
            options={{ title: 'About The Meal' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

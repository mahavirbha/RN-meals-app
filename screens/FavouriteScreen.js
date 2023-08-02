import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MealsList from '../components/mealslist/MealsList';
import { MEALS } from '../data/dummy-data';
import { useSelector } from 'react-redux';
// import { FavouriteContext } from '../store/context/FavouriteContext';

const FavouriteScreen = () => {
  // const favouriteMealsContext = useContext(FavouriteContext);
  const favouriteMealIds = useSelector((state) => state.favouriteMeals.ids);

  // const favouriteMeals = MEALS.filter((meal) =>
  //   favouriteMealsContext.ids.includes(meal.id)
  // );

  // const favouriteMealsIdsSet = new Set(favouriteMealsContext.ids);
  const favouriteMealsIdsSet = new Set(favouriteMealIds);
  const favouriteMeals = MEALS.filter((meal) =>
    favouriteMealsIdsSet.has(meal.id)
  );

  if (favouriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favourite meals yet !</Text>
      </View>
    );
  }

  return <MealsList items={favouriteMeals} />;
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

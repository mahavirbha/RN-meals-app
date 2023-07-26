import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import MealDetails from '../components/MealDetails';
import List from '../components/mealdetail/List';
import Subtitle from '../components/mealdetail/Subtitle';
import { MEALS } from '../data/dummy-data';

const MealDetailsScreen = ({ route }) => {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const { duration, complexity, affordability, imageUrl, ingredients, steps } =
    selectedMeal;
  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={duration}
        complexity={complexity}
        affordability={affordability}
        MealDetailsStyles={{ titleText: { color: '#FFF' } }}
      />

      <View style={styles.listOuterContainer}>
        <View style={styles.listInnerContainer}>
          <Subtitle title='Ingredients' />
          <List data={ingredients} />
          <Subtitle title='Steps' />
          <List data={steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 36,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  subtitle: {
    color: '#E2B497',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitleContainer: {
    marginHorizontal: 24,
    padding: 6,
    borderBottomColor: '#E2B497',
    borderBottomWidth: 2,
  },
  listInnerContainer: {
    width: '80%',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
});
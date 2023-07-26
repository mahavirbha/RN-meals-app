import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const MealDetails = ({
  duration,
  complexity,
  affordability,
  MealDetailsStyles,
}) => {
  return (
    <View style={[styles.details]}>
      <Text style={MealDetailsStyles?.titleText}>{duration}m</Text>
      <Text style={MealDetailsStyles?.titleText}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={MealDetailsStyles?.titleText}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    gap: 8,
    justifyContent: 'center',
  },
});

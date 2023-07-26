import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MealDetails from './MealDetails';

const MealItem = ({
  id,
  title,
  imagepath,
  duration,
  complexity,
  affordability,
}) => {
  const navigation = useNavigation();
  function mealDetailsHandler(params) {
    navigation.navigate('MealDetailsScreen', { mealId: id });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: '#CCC' }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={mealDetailsHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imagepath }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
            // MealDetailsStyles={{ titleText: { color: '#FFF' } }}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    gap: 8,
    justifyContent: 'center',
  },
  buttonPressed: {
    opacity: 0.5,
  },
});

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Subtitle = ({ title }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{title}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: '#E2B497',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitleContainer: {
    marginHorizontal: 12,
    padding: 6,
    borderBottomColor: '#E2B497',
    borderBottomWidth: 2,
  },
});

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const List = ({ data }) => {
  return data.map((item) => (
    <View style={styles.listItem}>
      <Text key={item} style={styles.itemText}>
        {item}
      </Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 12,
    marginVertical: 4,
    backgroundColor: '#E2B497',
  },
  itemText: { color: '#351401', textAlign: 'center' },
});

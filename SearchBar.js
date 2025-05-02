import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search"
        placeholderTextColor="#999"
        style={styles.input}
      />
      <Feather name="sliders" size={22} color="#000" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f1f1',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    color: '#000',
    fontSize: 16,
  },
});
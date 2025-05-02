import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const categories = [
  { name: 'Fruits', icon: 'apple-alt' },
  { name: 'Vegita', icon: 'leaf' },
  { name: 'Grocery', icon: 'shopping-basket' },
  { name: 'Bakery', icon: 'bread-slice' },
  { name: 'Foods', icon: 'utensils' },
];

export default function CategoryMenu() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((cat, index) => (
          <TouchableOpacity key={index} style={styles.item}>
            <FontAwesome5 name={cat.icon} size={20} color="#fff" style={styles.icon} />
            <Text style={styles.text}>{cat.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    marginBottom: 20,
  },
  item: {
    backgroundColor: '#4ade80',
    width: 80,
    height: 50,
    borderRadius: 12,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  icon: {
    marginBottom: 4,
  },
  text: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
  },
});

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={styles.container}>
      <Ionicons name="menu" size={28} color="#000" />

      <Text style={styles.title}>Online Grocery</Text>

      <View style={styles.iconGroup}>
        <Feather name="search" size={22} color="#000" style={styles.icon} />
        <Feather name="shopping-cart" size={22} color="#000" style={styles.icon} />
        <MaterialCommunityIcons name="bell-outline" size={22} color="#000" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginBottom: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  iconGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 6,
  },
});
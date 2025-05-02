import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import MealCard from './MealCard';

export default function MealList() {
  const offers = [
    {
      id: '1',
      title: 'Apple',
      image: require('../assets/apple.png'),
      price: 10,
      discount: '15% Off',
    },
    {
      id: '2',
      title: 'Pomegranate',
      image: require('../assets/pomegranate.png'),
      price: 8,
      discount: '10% Off',
    },
  ];

  const recommended = [
    {
      id: '3',
      title: 'Strawberry',
      image: require('../assets/strawberry.png'),
      price: 12,
    },
    {
      id: '4',
      title: 'Orange',
      image: require('../assets/orange.png'),
      price: 9,
    },
  ];

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 24 }}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Offers for you</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>

      {offers.map((meal) => (
        <MealCard
          key={meal.id}
          title={meal.title}
          image={meal.image}
          price={meal.price}
          discount={meal.discount}
        />
      ))}

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Recommended for you</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>

      {recommended.map((meal) => (
        <MealCard
          key={meal.id}
          title={meal.title}
          image={meal.image}
          price={meal.price}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  sectionHeader: {
    marginTop: 24,
    marginBottom: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111',
  },
  viewAll: {
    fontSize: 14,
    color: '#22c55e',
  },
});

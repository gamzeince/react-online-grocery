import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function MealCard({ title, image, price, discount }) {
  return (
    <View style={styles.card}>
      {discount && <Text style={styles.discount}>{discount}</Text>}
      <Image source={image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.sub}>Darrell Steward</Text>
        <View style={styles.bottom}>
          <Text style={styles.price}>${price}/kg</Text>
          <TouchableOpacity style={styles.addButton}>
            <Entypo name="plus" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    marginHorizontal: 20,
  },
  discount: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#22c55e',
    color: '#fff',
    fontSize: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    zIndex: 2,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover'
  },
  info: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111',
  },
  sub: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    color: '#22c55e',
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#22c55e',
    borderRadius: 6,
    padding: 6,
  },
});
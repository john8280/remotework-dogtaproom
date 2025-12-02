import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function DogCard({ location }) {
  return (
    <View style={styles.card}>
      <Image source={require('../../assets/taproom.jpg')} style={styles.img} />
      <View style={{ padding: 12 }}>
        <Text style={styles.name}>{location.name}</Text>
        <Text style={styles.meta}>Capacity: {location.capacity}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 12,
    marginBottom: 12,
    overflow: 'hidden',
    elevation: 2,
  },
  img: { width: 110, height: 90 },
  name: { fontWeight: '700', color: '#2B2D42' },
  meta: { color: '#6C757D', marginTop: 8 },
});


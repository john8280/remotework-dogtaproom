import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import BookingCard from '../components/BookingCard';
import { sampleBookings } from '../data/mockBookings';

export default function BookingScreen({ route }) {
  const { location } = route.params;
  const [bookings, setBookings] = useState(sampleBookings);

  const onBookNow = () => {
    const newBooking = {
      id: `b${Date.now()}`,
      userId: 'u1',
      locationId: location.id,
      start: new Date().toISOString(),
      status: 'confirmed',
    };
    setBookings([newBooking, ...bookings]);
    alert('Booked (mock)');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{location.name}</Text>
      <Text style={styles.subtitle}>Capacity: {location.capacity}</Text>

      <TouchableOpacity style={styles.bookBtn} onPress={onBookNow}>
        <Text style={{ color: '#fff', fontWeight: '700' }}>Quick Book Now</Text>
      </TouchableOpacity>

      <Text style={{ marginTop: 12, marginBottom: 8, color: '#6C757D' }}>Upcoming Bookings</Text>
      <FlatList
        data={bookings}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => <BookingCard booking={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#FFFFFF' },
  title: { fontSize: 20, fontWeight: '700', color: '#2B2D42' },
  subtitle: { color: '#6C757D' },
  bookBtn: {
    backgroundColor: '#2EC4B6',
    padding: 12,
    borderRadius: 12,
    marginTop: 12,
    alignItems: 'center',
  },
});

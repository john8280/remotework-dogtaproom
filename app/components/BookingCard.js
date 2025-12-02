import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BookingCard({ booking }) {
  return (
    <View style={styles.card}>
      <Text style={styles.id}>{booking.id}</Text>
      <Text style={styles.status}>{booking.status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 12, backgroundColor: '#F8FAFD', borderRadius: 10, marginBottom: 8 },
  id: { fontWeight: '700' },
  status: { color: '#6C757D', marginTop: 6 },
});

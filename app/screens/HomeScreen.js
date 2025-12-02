import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import DogCard from '../components/DogCard';

const locations = [
  { id: 'l1', name: 'East Austin Taproom', capacity: 24 },
  { id: 'l2', name: 'South Congress Taproom', capacity: 18 },
];

export default function HomeScreen({ navigation }) {
  const { user } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Hello, {user?.name}</Text>
      <Text style={styles.h2}>Nearby Locations</Text>
      <FlatList
        data={locations}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Booking', { location: item })}>
            <DogCard location={item} />
          </TouchableOpacity>
        )}
      />
      <View style={styles.footerRow}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.footerBtn}>
          <Text>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Admin')} style={styles.footerBtn}>
          <Text>Admin</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#FFFFFF' },
  welcome: { fontSize: 20, fontWeight: '700', color: '#2B2D42' },
  h2: { marginTop: 12, marginBottom: 8, fontSize: 16, color: '#6C757D' },
  footerRow: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 },
  footerBtn: { padding: 10, borderRadius: 10, backgroundColor: '#F2F6FF' },
});

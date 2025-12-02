import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function ProfileScreen() {
  const { user } = useContext(AuthContext);
  const [ownerName, setOwnerName] = useState(user?.name || '');
  const [dogName, setDogName] = useState('Buddy');
  const [breed, setBreed] = useState('Beagle');
  const [size, setSize] = useState('Medium');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Your Profile</Text>

      <Text style={styles.label}>Owner Name</Text>
      <TextInput style={styles.input} value={ownerName} onChangeText={setOwnerName} />

      <Text style={styles.label}>Dog Name</Text>
      <TextInput style={styles.input} value={dogName} onChangeText={setDogName} />

      <Text style={styles.label}>Breed</Text>
      <TextInput style={styles.input} value={breed} onChangeText={setBreed} />

      <Text style={styles.label}>Size</Text>
      <TextInput style={styles.input} value={size} onChangeText={setSize} />

      <Text style={styles.label}>Dog Photo (placeholder)</Text>
      <Image source={require('../../assets/dogs/small1.jpg')} style={styles.photo} />

      <TouchableOpacity style={styles.saveBtn} onPress={() => alert('Saved (mock)')}>
        <Text style={{ color: '#fff', fontWeight: '700' }}>Save Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 18, backgroundColor: '#FFF' },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 14, color: '#2B2D42' },
  label: { marginTop: 10, color: '#6C757D' },
  input: { borderWidth: 1, borderColor: '#E9EEF6', padding: 10, borderRadius: 10, marginTop: 6 },
  photo: { width: '100%', height: 180, borderRadius: 12, marginTop: 8, resizeMode: 'cover' },
  saveBtn: { backgroundColor: '#FF7A59', padding: 14, borderRadius: 12, marginTop: 18, alignItems: 'center' },
});

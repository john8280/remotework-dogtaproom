import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function OnboardingScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to TapWork</Text>
      <Text style={styles.subtitle}>Work remotely, socialize your dog, and enjoy a tap.</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.replace('Home')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFF7F0',
  },
  title: { fontSize: 28, fontWeight: '700', marginBottom: 10, color: '#2B2D42' },
  subtitle: { fontSize: 16, textAlign: 'center', marginBottom: 20, color: '#6C757D' },
  button: { backgroundColor: '#FF7A59', paddingVertical: 12, paddingHorizontal: 24, borderRadius: 14 },
  buttonText: { color: '#fff', fontWeight: '600' },
});

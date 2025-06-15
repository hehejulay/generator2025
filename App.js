import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Generator2025</Text>
      <Text style={styles.subtitle}>By poorDV</Text>
      <Text style={styles.text}>Fitur:</Text>
      <Text>- Kombinasi angka (default 7)</Text>
      <Text>- Digit 2, 3, atau 4</Text>
      <Text>- Numerologi</Text>
      <Text>- Regresi linear</Text>
      <Text>- Analisis korelasi</Text>
      <Text>- Pola naik-turun</Text>
      <Text>- Ganjil/genap</Text>
      <Text>- Input angka manual</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#00FFAA',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#aaa',
    marginBottom: 20,
  },
  text: {
    color: '#fff',
    marginBottom: 4,
  },
});

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import api from './src/services/Api'

export default function App() {

  async function setStatus() {
    await api.put('/device/LED')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Domótica</Text>
      <TouchableOpacity onPress={setStatus} style={styles.button}>
        <Text style={styles.buttonText}>Mudar Status</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  title: {
    fontSize: 28
  },

  button: {
    padding: 32,
    height: 42,
    backgroundColor: '#f05a5b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 25
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15
  }
});

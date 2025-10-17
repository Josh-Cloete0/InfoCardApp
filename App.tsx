import { SafeAreaView, ScrollView, Text, View, TextInput, StyleSheet, Image, Button } from 'react-native';
import { useState } from 'react';


export default function App() {
  const [name, setName] = useState('');
  const [hobby, setHobby] = useState('');
  const [message, setMessage] = useState('Welcome to my app');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>My Info Card</Text>
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5
  },
  card: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10
  },
  cardText: {
    fontSize: 18,
    marginBottom: 10
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    borderRadius: 75,
    marginBottom: 20
  },
  onlineImage: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10
  },
  extra: {
    fontSize: 16,
    marginVertical: 5
  }
});


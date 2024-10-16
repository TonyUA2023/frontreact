import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MainScreen = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  // Función para cerrar sesión
  const handleLogout = async () => {
    await AsyncStorage.removeItem('userToken');
    navigation.navigate('Login');
  };

  // Simulación de obtención de datos
  useEffect(() => {
    const fetchData = async () => {
      // Simula una llamada a una API para obtener datos
      setTimeout(() => {
        setData([
          { id: '1', title: 'Paquete turístico a la playa' },
          { id: '2', title: 'Paquete turístico a la montaña' },
          { id: '3', title: 'Paquete turístico a la ciudad' },
        ]);
        setLoading(false);
      }, 2000);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a la App de Turismo</Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardText}>{item.title}</Text>
          </View>
        )}
      />

      <Button title="Cerrar Sesión" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#e0e0e0',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  cardText: {
    fontSize: 18,
  },
});

export default MainScreen;

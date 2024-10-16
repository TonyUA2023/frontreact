import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ApolloProvider } from '@apollo/client';
import client from './src/services/apolloClient'; // Importar Apollo Client correctamente
import LoginScreen from './src/screens/LoginScreen';
import CrearCuentaScreen from './src/screens/CrearCuentaScreen';
import MainScreen from './src/screens/MainScreen';
import AuthLoadingScreen from './src/screens/AuthLoadingScreen';

type RootStackParamList = {
  AuthLoading: undefined;
  Login: undefined;
  CrearCuenta: undefined;
  Main: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="AuthLoading">
          <Stack.Screen name="AuthLoading" component={AuthLoadingScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="CrearCuenta" component={CrearCuentaScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Main" component={MainScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;

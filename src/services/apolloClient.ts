import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Enlace HTTP para conectar con el servidor de GraphQL
const httpLink = createHttpLink({
  uri: 'http://10.0.2.2:4000/', // Cambia "localhost" a la URL donde esté corriendo tu servidor, o a la IP si estás en un dispositivo físico
});

// Middleware para agregar el token JWT a las solicitudes
const authLink = setContext(async (_, { headers }) => {
  const token = await AsyncStorage.getItem('userToken');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// Crear Apollo Client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink)
});

export default client;

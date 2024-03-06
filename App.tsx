import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './screens/SearchScreen';
import DetailScreen from './screens/DetailScreen';

const Stack = createNativeStackNavigator();

// obviously it should be stored in another place
export const token =
  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJsVjZvNzJJQjd3cGdsRHhCIiwianRpIjoiNGFiZjA1MTI2NzNhY2ZkZTI5NTcxMGU3NjgxNjVjMmY1MWFjNzNlNTFkOWUwNWFkZmZjMjUyNzFkODY1ZDc4ZTYxM2FjZTNkNDYxNjhhZWYiLCJpYXQiOjE2Nzg2NjAxMjcuODIzNDcyLCJuYmYiOjE2Nzg2NjAxMjcuODIzNDc5LCJleHAiOjE3NDE4MTg1MjcuODIyNDUzLCJzdWIiOiIiLCJzY29wZXMiOlsicHVibGljIl19.uEaoxhTTfWqCoANRnNAwJaFU7Q0vz4K43XjYY3IwaXTeaydmcCgq1iPKpxrLsJ0Nrf8IPtyzYVFBiLDest-SkS76-Hbs75HMG66Wnl8WOyp5m8Uxc5KzAs6kzBwmhfr5b0TQEoLBVEEV5KSTJHWDTQlGlOJUwCRhoNHjqXJs9L4t_WOyKNE9y_Q2ED_z1dsEBNCl-HIiZ6c2Dci4pXZKs8-9jUpiaCga2tfjO6SvNqVkGle408p-9TRYD1BMTI1s7R1e8BbsTSo5FQJUgi6qUVapQCxu4WU3i3Wil1jjDKHqkSkafBl6VMX2ci-pj9fLKsUzuNSxCOUu9Jo8sbAE8e6VPOK3RxivIWN6BCX5sPBQIIWeS_bAjZ0vNBcubrJF4wwRwiUnSsgGKt3XnI9KhGsjaY5kmbqSnuQ6WdAvDkfvSA-HiX1xOCGmfQDXoGNrRR706bs7wlpqIbNF7lZZFjocfmiODif3rPj0QWf2amlSuCmlZzkyCoveNp43b2xYFQxcA1PlvAtchFTW6qA6vmqax7zoRfF1kQZg46P1pHimK3UchquAzeS4fALP0G93XQCprvN5iwNL9SuXgADlI-2QR1hWQ-i7RW2ElUhLt7PDQlEw5y49OLe5nhOMOxaSVRV8sbk5lX9CS28cJBezbg0ArLgFOv1nH88VNBZQKdM';

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

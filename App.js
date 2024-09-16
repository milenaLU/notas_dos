import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Detallenotas from './src/pantallas/Detallenotas';
import Editarnota from './src/pantallas/Editarnota';
import Login from './src/pantallas/Login';
import Singup from './src/pantallas/Singup';
import Notas from './src/pantallas/Notas';

export default function App() {

  const Stack = createStackNavigator();

  function MyStack() {
    return (
      <Stack.Navigator>

        <Stack.Screen
          name="Notas"
          options={{
            title: "Notas",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#881874" },
            headerTintColor: "white",
          }}
          component={Notas}
        />

        <Stack.Screen
          name="Singup"
          options={{
            title: "Singup",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#881874" },
            headerTintColor: "white",
          }}
          component={Singup}
        />

        <Stack.Screen
          name="Login"
          options={{
            title: "Login",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#881874" },
            headerTintColor: "white",
          }}
          component={Login}
        />


        <Stack.Screen
          name="Detallenotas"
          options={{
            title: "Detallenotas",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#881874" },
            headerTintColor: "white",
          }}
          component={Detallenotas}
        />

        <Stack.Screen
          name="Editarnota"
          options={{
            title: "Editarnota",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#881874" },
            headerTintColor: "white",
          }}
          component={Editarnota}
        />

      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <MyStack></MyStack>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

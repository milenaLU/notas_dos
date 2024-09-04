import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/pantallas/Home';
import Detallenotas from './src/pantallas/Detallenotas';
import Editarnota from './src/pantallas/Editarnota';
import Login from './src/pantallas/Login';
import Singup from './src/pantallas/Singup';

export default function App() {

  const Stack = createStackNavigator();

  function MyStack() {
    return (
      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          options={{
            title: "Home",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#881874" },
            headerTintColor: "white",
          }}
          component={Home}
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

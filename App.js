import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Detallenotas from './src/pantallas/Detallenotas';
import Editarnota from './src/pantallas/Editarnota';
import Notas from './src/pantallas/Notas';
import Modificarnota from './src/pantallas/Modificarnota';

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
            headerStyle: { backgroundColor: "#BBA9BB" },
            headerTintColor: "white",
          }}
          component={Notas}
        />

        <Stack.Screen
          name="Detallenotas"
          options={{
            title: "Detalle notas",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#BBA9BB" },
            headerTintColor: "white",
          }}
          component={Detallenotas}
        />

        <Stack.Screen
          name="Editarnota"
          options={{
            title: "Editar nota",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#BBA9BB" },
            headerTintColor: "white",
          }}
          component={Editarnota}
        />

        <Stack.Screen
          name="Modificarnota"
          options={{
            title: "Modificar nota",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#BBA9BB" },
            headerTintColor: "white",
          }}
          component={Modificarnota}
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

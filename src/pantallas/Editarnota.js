//crear y editar la nota
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import { Platform } from 'react-native';

import db from '../../credenciales'
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc } from 'firebase/firestore';
// const db = getFirestore(appFirebase)


export default function Editarnota(props) {

  const initialState = {
    titulo: '',
    detalle: '',
  }

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("empty");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [estado, setEstado] = useState(initialState);

  const OpenDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios")
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    let fTime =
      "Hora: " + tempDate.getHours() + " minutos: " + tempDate.getMinutes();
    setFecha(fDate);
    setHora(fTime);
  };

  const showMode = (currentDate) => {
    setShow(true);
    setMode(currentDate);
  };

  const handleChangeText = (value, name) => {
    setEstado({ ...estado, [name]: value });
  }

  const saveNote = async()=>{
    try {
      if(estado.titulo === '' || estado.detalle === ''){
        Alert.alert('mensaje importante','debes rellenar el campo requerido')
      }
      else{
        const nota = {
          titulo: estado.titulo,
          detalle: estado.detalle,
          fecha:fecha,
          hora: hora
        }
        await addDoc(collection(db, 'notas'),{
          ...nota
        })
        Alert.alert('Exito','guardado con exito')
        props.navigation.navigate('Notas')
      }
    } catch (error) {
        console.log(error);
    }
  }  


  return (
    <View style={styles.contenedorPadre}>
      <View style={styles.tarjeta}>
        <View style={styles.contenedor}>
          <TextInput
            placeholder='Ingresa el titulo'
            style={styles.textoInput}
            value={estado.titulo}
            onChangeText={(value)=>handleChangeText(value, 'titulo')}
          />

          <TextInput
            placeholder='ingresa el detalle'
            multiline={true}
            numberOfLines={4}
            style={styles.textoInput}
           value={estado.detalle}
           onChangeText={(value) => handleChangeText(value, 'detalle')}
          />

          {/* //contenedor de fecha */}
          <View style={styles.inputDate}>
            <TextInput placeholder="11/08/2024" style={styles.textoDate} value={fecha} />
            <TouchableOpacity style={styles.botonDate} onPress={() => showMode("date")}>
              <Text style={styles.subtitle}> Date </Text>
            </TouchableOpacity>
          </View>

          {/* //contenedor de hora */}
          <View style={styles.inputDate}>
            <TextInput 
              placeholder="Hora: 6 minutos: 30" 
              style={styles.textoDate} 
              value={hora} 
            />
            <TouchableOpacity style={styles.botonDate} onPress={() => showMode("time")}>
              <Text style={styles.subtitle}> Hora </Text>
            </TouchableOpacity>
          </View>

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={OpenDate}
              minimumDate={new Date(2024 - 1 - 1)}
            />
          )}

          <View>
            <TouchableOpacity style={styles.botonEnviar} onPress={saveNote} >
              <Text style={styles.textoBtnEnviar}>
                Gurdar nueva nota
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedorPadre: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tarjeta: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    width: "90%",
    padding: 20,
    shadowColor: "#C82A54",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  contenedor: {
    padding: 20,
  },
  textoInput: {
    borderColor: "#BBA9BB",
    borderWidth: 1,
    padding: 2,
    marginTop: 10,
    borderRadius: 8,
  },
  inputDate: {
    width: "100%",
    flexWrap: "wrap",
    flexDirection: "row"
  },
  botonDate: {
    backgroundColor: "#BBA9BB",
    borderRadius: 5,
    padding: 10,
    width: "30%",
    height: "90%",
    marginTop: 10,
    marginLeft: 10,
  },
  textoDate: {
    borderColor: "#BBA9BB",
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    borderRadius: 8,
  },
  subtitle: {
    color: "white",
    fontSize: 18,
  },
  botonEnviar: {
    backgroundColor: "#BBA9BB",
    borderColor: "#BBA9BB",
    borderWidth: 3,
    borderRadius: 20,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  textoBtnEnviar: {
    textAlign: "center",
    padding: 10,
    color: "white",
    fontSize: 16,
  },
})

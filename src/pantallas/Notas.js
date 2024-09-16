import { Text, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'

export default function Notas(props) {

  return (
    <ScrollView>
      <View>
        <TouchableOpacity style={styles.boton} onPress={()=>props.navigation.navigate('Editarnota')}>
          <Text style={styles.textoBoton}>Agregar una nueva nota</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
boton:{
  backgroundColor: "#FF689D",
  borderColor: "#FF689D",
  borderWidth:3,
  borderRadius: 20,
  marginLeft: 20,
  marginRight: 20,
  marginTop: 20,
},
textoBoton:{
  textAlign: "center",
  padding: 10,
  color: "white",
  fontSize:16,
},
})
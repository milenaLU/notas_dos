import { Text, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import db from '../../credenciales'
import { collection, getDocs } from 'firebase/firestore';
import { ListItem, Avatar } from '@rneui/themed';
import { ListItemChevron } from '@rneui/base/dist/ListItem/ListItem.Chevron';
import { ListItemContent } from '@rneui/base/dist/ListItem/ListItem.Content';
import { ListItemTitle } from '@rneui/base/dist/ListItem/ListItem.Title';
import { ListItemSubtitle } from '@rneui/base/dist/ListItem/ListItem.Subtitle';

export default function Notas(props) {

  const [lista, setLista] = useState([])

  // Lógica para llamar la lista de documentos
  useEffect(() => {
    const getLista = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'notas'))
        const docs = []
        querySnapshot.forEach((doc) => {
          const { titulo, detalle, fecha, hora } = doc.data()
          docs.push({
            id: doc.id,
            titulo,
            detalle,
            fecha,
            hora
          })
        })
        setLista(docs);
      } catch (error) {
        console.log(error);
      }
    }
    getLista()
  }, [lista])

  return (
    <View style={styles.contenedorPrincipal}>
      <ScrollView style={styles.listaContainer}>
        <View style={styles.contenedor}>
          {lista.map((not) => (
            <ListItem bottomDivider key={not.id} onPress={() => {
              props.navigation.navigate('Detallenotas', { notaId: not.id })
            }}>
              <ListItemChevron />
              <ListItemContent>
                <ListItemTitle style={styles.titulo}>{not.titulo}</ListItemTitle>
                <ListItemSubtitle>{not.fecha}</ListItemSubtitle>
              </ListItemContent>
            </ListItem>
          ))}
        </View>
      </ScrollView>

      {/* Botón flotante con el símbolo "+" */}
      <TouchableOpacity 
        style={styles.botonFlotante} 
        onPress={() => props.navigation.navigate('Editarnota')}
      >
        <Text style={styles.botonTexto}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedorPrincipal: {
    flex: 1,  // Ocupa toda la pantalla
  },
  listaContainer: {
    flex: 1,  // Deja que el scroll ocupe todo el espacio disponible
  },
  contenedor: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#0000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  botonFlotante: {
    position: 'absolute',
    width: 60,  // Tamaño del botón
    height: 60,
    borderRadius: 30,  // Hace que el botón sea redondo
    backgroundColor: '#FF689D',
    justifyContent: 'center',
    alignItems: 'center',
    right: 20,  // Espaciado desde el borde derecho
    bottom: 20,  // Espaciado desde el borde inferior
  },
  botonTexto: {
    fontSize: 30,  // Tamaño del símbolo "+"
    color: 'white',
    fontWeight: 'bold',
  },
  titulo: {
    fontWeight: 'bold',
  }
})

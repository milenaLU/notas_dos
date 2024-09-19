import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Alert } from 'react-native';
import db from '../../credenciales';
import { doc, deleteDoc, getDoc, setDoc } from 'firebase/firestore';
import EditorNota from './Modificarnota'; // Importa el nuevo componente

export default function Detallenotas(props) {
  const [nota, setNota] = useState({});
  const [editMode, setEditMode] = useState(false); // Controla el modo de edición

  const getOneNote = async (id) => {
    try {
      const docRef = doc(db, 'notas', id);
      const docSnap = await getDoc(docRef);
      setNota(docSnap.data());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOneNote(props.route.params.notaId);
  }, []);

  const deleteNote = async (id) => {
    await deleteDoc(doc(db, 'notas', id));
    Alert.alert('Exito', 'Nota eliminada con éxito');
    props.navigation.navigate('Notas');
  };

  const handleSave = async (editedNote) => {
    try {
      const docRef = doc(db, 'notas', props.route.params.notaId);
      await setDoc(docRef, editedNote);
      setNota(editedNote); // Actualiza la nota con los valores editados
      setEditMode(false);  // Salir del modo edición
      Alert.alert('Exito', 'Nota editada con éxito');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      {editMode ? (
        <EditorNota
          nota={nota}
          onSave={handleSave}
          onCancel={() => setEditMode(false)} // Cancela la edición
        />
      ) : (
        <View style={styles.contenedor}>
          <Text style={styles.texto}>Titulo: {nota.titulo} </Text>
          <Text style={styles.texto}>Detalle: {nota.detalle} </Text>
          <Text style={styles.texto}>Fecha: {nota.fecha} </Text>
          <Text style={styles.texto}>Hora: {nota.hora} </Text>

          <TouchableOpacity style={styles.botonEditar} onPress={() => setEditMode(true)}>
            <Text style={styles.textoEditar}>Editar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botonEliminar} onPress={() => deleteNote(props.route.params.notaId)}>
            <Text style={styles.textoEliminar}>Eliminar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    margin: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  texto: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  botonEditar: {
    backgroundColor: '#BBA9BB',
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
  },
  textoEditar: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  botonEliminar: {
    backgroundColor: '#BBA9BB',
    padding: 10,
    borderRadius: 20,
  },
  textoEliminar: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

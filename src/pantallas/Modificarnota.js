import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function EditorNota({ nota, onSave, onCancel }) {
  const [editedNote, setEditedNote] = useState(nota);

  return (
    <View style={styles.contenedor}>
      <TextInput
        style={styles.textoInput}
        value={editedNote.titulo}
        onChangeText={(text) => setEditedNote({ ...editedNote, titulo: text })}
      />
      <TextInput
        style={styles.textoInput}
        value={editedNote.detalle}
        onChangeText={(text) => setEditedNote({ ...editedNote, detalle: text })}
      />
      <TextInput
        style={styles.textoInput}
        value={editedNote.fecha}
        onChangeText={(text) => setEditedNote({ ...editedNote, fecha: text })}
      />
      <TextInput
        style={styles.textoInput}
        value={editedNote.hora}
        onChangeText={(text) => setEditedNote({ ...editedNote, hora: text })}
      />

      <TouchableOpacity style={styles.botonGuardar} onPress={() => onSave(editedNote)}>
        <Text style={styles.textoGuardar}>Guardar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botonCancelar} onPress={onCancel}>
        <Text style={styles.textoCancelar}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    margin: 20,
    padding: 10,
  },
  textoInput: {
    fontSize: 16,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5,
    marginBottom: 10,
  },
  botonGuardar: {
    backgroundColor: '#BBA9BB',
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
  },
  textoGuardar: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  botonCancelar: {
    backgroundColor: '#BBA9BB',
    padding: 10,
    borderRadius: 20,
  },
  textoCancelar: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

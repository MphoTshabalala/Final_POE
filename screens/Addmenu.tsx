import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert, StyleSheet } from 'react-native';

const Addmenu = () => {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [course, setCourse] = useState('');

  const addItem = () => {
    if (itemName && itemPrice && course) {
      Alert.alert('Item Added', `${itemName} added to ${course}`);
      setItemName('');
      setItemPrice('');
      setCourse('');
    } else {
      Alert.alert('Error', 'Please fill out all fields.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Item Name"
        value={itemName}
        onChangeText={setItemName}
      />
      <TextInput
        style={styles.input}
        placeholder="Item Price"
        value={itemPrice}
        onChangeText={setItemPrice}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Course (main, dessert, drinks)"
        value={course}
        onChangeText={setCourse}
      />
      <Button title="Add Item" onPress={addItem} />
    </View>
  );
};

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#f8f8f8', // Light background color for the container
    },
    input: {
      width: '100%',
      height: 50,
      marginBottom: 20,
      paddingHorizontal: 15,
      borderWidth: 1,
      borderColor: '#ccc', // Light gray border color
      borderRadius: 8,
      backgroundColor: '#fff', // White background for inputs
      fontSize: 16,
    },
    button: {
      marginTop: 10,
    },
  })
  

export default Addmenu;

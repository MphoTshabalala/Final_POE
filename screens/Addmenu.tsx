import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { MenuItem } from '../App';

interface AddMenuProps {
  navigation: any;
  addMenuItem: (item: MenuItem) => void;
}

const Addmenu: React.FC<AddMenuProps> = ({ navigation, addMenuItem }) => {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [course, setCourse] = useState('');
  const [description, setDescription] = useState('');

  const handleAddItem = () => {
    if (itemName && itemPrice && course && description) {
      const newItem = { 
        name: itemName, 
        price: parseFloat(itemPrice), 
        course, 
        description 
      };
      addMenuItem(newItem);
      Alert.alert('Item Added', `${itemName} added to ${course}`);
      setItemName('');
      setItemPrice('');
      setCourse('');
      setDescription('');
      navigation.navigate('Menu');
    } else {
      Alert.alert('Error', 'Please fill out all fields.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
      <Picker
        selectedValue={course}
        onValueChange={setCourse}
        style={styles.picker}
      >
        <Picker.Item label="Select Course" value="" />
        <Picker.Item label="Starter" value="starter" />
        <Picker.Item label="Mains" value="mains" />
        <Picker.Item label="Desert" value="desert" />
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Add Item" onPress={handleAddItem} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { borderWidth: 1, marginBottom: 10, padding: 10 },
  picker: { marginBottom: 20 },
});

export default Addmenu;

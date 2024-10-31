import React, { useState } from 'react';
import { View, Text, Button, TextInput, Picker, StyleSheet } from 'react-native';

const AddItemPage = ({ route }) => {
  const { setMenu } = route.params;
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [category, setCategory] = useState('mains');

  const handleAddItem = () => {
    if (itemName && itemPrice) {
      setMenu((prevMenu: { [x: string]: any; }) => ({
        ...prevMenu,
        [category]: [...prevMenu[category], { name: itemName, price: parseFloat(itemPrice) }]
      }));
      setItemName('');
      setItemPrice('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add New Item</Text>

      <TextInput
        style={styles.input}
        placeholder="Item Name"
        value={itemName}
        onChangeText={setItemName}
      />
      <TextInput
        style={styles.input}
        placeholder="Item Price"
        keyboardType="numeric"
        value={itemPrice}
        onChangeText={setItemPrice}
      />

      <Text>Category</Text>
      <Picker
        selectedValue={category}
        onValueChange={(itemValue: React.SetStateAction<string>) => setCategory(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Mains" value="mains" />
        <Picker.Item label="Desserts" value="desserts" />
        <Picker.Item label="Drinks" value="drinks" />
      </Picker>

      <Button title="Add Item" onPress={handleAddItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ddd', padding: 10, marginBottom: 10 },
  picker: { height: 50, width: '100%', marginVertical: 10 },
});

export default AddItemPage;

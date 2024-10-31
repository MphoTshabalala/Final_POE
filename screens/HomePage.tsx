import React, { useState } from 'react';
import { View, Text, Button, FlatList, TextInput, Alert, StyleSheet } from 'react-native';

interface MenuItem {
  id: number;
  name: string;
  price: number;
}

const HomeScreen = ({ navigation }) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    { id: 1, name: "Pizza", price: 120 },
    { id: 2, name: "Burger", price: 85 },
  ]);

  const [newItemName, setNewItemName] = useState('');
  const [newItemPrice, setNewItemPrice] = useState('');

  const totalItems = menuItems.length;
  const totalPrice = menuItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  const addMenuItem = () => {
    const price = parseFloat(newItemPrice);
    if (newItemName && !isNaN(price) && price > 0) {
      const newItem: MenuItem = {
        id: menuItems.length + 1,
        name: newItemName,
        price,
      };
      setMenuItems([...menuItems, newItem]);
      setNewItemName('');
      setNewItemPrice('');
    } else {
      Alert.alert('Error', 'Please enter valid item name and price.');
    }
  };

  const removeMenuItem = (id: number) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Restaurant App!</Text>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>R{item.price.toFixed(2)}</Text>
            <Button title="Remove" onPress={() => removeMenuItem(item.id)} />
          </View>
        )}
      />

      <Text style={styles.summary}>Total Items: {totalItems}</Text>
      <Text style={styles.summary}>Total Price: R{totalPrice}</Text>

      <TextInput
        style={styles.input}
        placeholder="New Item Name"
        value={newItemName}
        onChangeText={setNewItemName}
      />
      <TextInput
        style={styles.input}
        placeholder="New Item Price"
        value={newItemPrice}
        onChangeText={setNewItemPrice}
        keyboardType="numeric"
      />
      <Button color={'black'} title="Add Item" onPress={addMenuItem} />
      
      <Button color={'grey'} title="Go to Menu" onPress={() => navigation.navigate('Menu')} />
    </View>
  );
};

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa', // Light background color for overall container
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333', // Dark color for title text
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  itemName: {
    fontSize: 18,
    color: '#755', // Medium color for item name
  },
  itemPrice: {
    fontSize: 16,
    color: '#888', // Lighter color for price text
  },
  summary: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    color: '#444', // Dark color for summary text
  },
  input: {
    width: '100%',
    height: 50,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ccc', // Light gray border
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    marginVertical: 10, // Vertical spacing for buttons
  },
});


export default HomeScreen;

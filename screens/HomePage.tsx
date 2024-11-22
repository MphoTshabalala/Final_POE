import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  course: string;
  description: string;
}

const HomeScreen = ({ navigation }) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('Starters');

  const calculateAveragePrice = (course: string): string => {
    const items = menuItems.filter((item) => item.course === course);
    if (items.length === 0) return '0.00';
    const total = items.reduce((sum, item) => sum + item.price, 0);
    return (total / items.length).toFixed(2);
  };

  const handleAddItem = () => {
    const price = parseFloat(itemPrice);
    if (itemName && !isNaN(price) && price > 0 && description && course) {
      const newItem: MenuItem = {
        id: menuItems.length + 1,
        name: itemName,
        price,
        course,
        description,
      };
      setMenuItems((prevItems) => [...prevItems, newItem]);
      setItemName('');
      setItemPrice('');
      setDescription('');
      setCourse('Starters');
    } else {
      Alert.alert('Error', 'Please fill out all fields correctly.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>Welcome to the Restaurant App!</Text>
      <View style={styles.averageContainer}>
        <Text style={styles.averageText}>
          Average Price (Starters): R{calculateAveragePrice('Starters')}
        </Text>
        <Text style={styles.averageText}>
          Average Price (Mains): R{calculateAveragePrice('Mains')}
        </Text>
        <Text style={styles.averageText}>
          Average Price (Drinks): R{calculateAveragePrice('Desert')}
        </Text>
      </View>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>R{item.price.toFixed(2)}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
            <Text style={styles.itemCourse}>Category: {item.course}</Text>
            <Button
              title="Remove"
              onPress={() =>
                setMenuItems((prevItems) =>
                  prevItems.filter((i) => i.id !== item.id)
                )
              }
            />
          </View>
        )}
      />
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
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <Picker
        selectedValue={course}
        onValueChange={(value) => setCourse(value)}
        style={styles.picker}
      >
        <Picker.Item label="Starters" value="Starters" />
        <Picker.Item label="Mains" value="Mains" />
        <Picker.Item label="Desert" value="Desert" />
      </Picker>
      <Button color={'black'} title="Add Item" onPress={handleAddItem} />
      <Button
        color={'black'}
        title="Go to Menu"
        onPress={() => navigation.navigate('Menu', { menuItems })}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  averageContainer: {
    marginBottom: 20,
  },
  averageText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  itemName: {
    fontSize: 18,
  },
  itemPrice: {
    fontSize: 16,
  },
  itemDescription: {
    fontSize: 14,
    color: '#555',
  },
  itemCourse: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 10,
  },
  picker: {
    height: 40,
    marginBottom: 20,
  },
});

export default HomeScreen;


import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

const menuData = {
  main: [
    { name: "Steak", price: 150 },
    { name: "Salad", price: 90 },
  ],
  dessert: [
    { name: "Ice Cream", price: 50 },
    { name: "Cake", price: 60 },
  ],
  drinks: [
    { name: "Soda", price: 30 },
    { name: "Wine", price: 120 },
  ],
};

const Menu: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<keyof typeof menuData | null>(null);

  const renderItems = (course: keyof typeof menuData) => (
    menuData[course].map(item => (
      <View key={item.name} style={styles.itemContainer}>
        <Text style={styles.itemText}>{item.name} - R{item.price.toFixed(2)}</Text>
      </View>
    ))
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <Button title="Show Mains" onPress={() => setSelectedCourse('main')} />
      <Button title="Show Desserts" onPress={() => setSelectedCourse('dessert')} />
      <Button title="Show Drinks" onPress={() => setSelectedCourse('drinks')} />

      {selectedCourse && (
        <View style={styles.section}>
          <Text style={styles.heading}>{selectedCourse.toUpperCase()}</Text>
          {renderItems(selectedCourse)}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f2f5', // Light gray background for the menu screen
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333', // Darker color for title text
  },
  section: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#444', // Slightly dark color for section headings
  },
  itemContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee', // Light border between items
  },
  itemText: {
    fontSize: 18,
    color: '#555', // Medium color for item text
  },
  button: {
    marginVertical: 10,
  },
});

export default Menu;


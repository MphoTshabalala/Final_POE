import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const Menu = ({ route }) => {
  const { menuItems } = route.params;

  const renderItemsByCategory = (category: string) => (
    menuItems
      .filter((item: { course: string; }) => item.course === category)
      .map((item: { id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; price: number; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
        <View key={item.id} style={styles.itemContainer}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>R{item.price.toFixed(2)}</Text>
          <Text style={styles.itemDescription}>{item.description}</Text>
        </View>
      ))
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <Text style={styles.heading}>Starters</Text>
      {renderItemsByCategory('Starters')}
      <Text style={styles.heading}>Mains</Text>
      {renderItemsByCategory('Mains')}
      <Text style={styles.heading}>Desert</Text>
      {renderItemsByCategory('Desert')}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f0f2f5' },
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  heading: { fontSize: 22, fontWeight: 'bold', marginVertical: 10 },
  itemContainer: { padding: 10, borderBottomWidth: 1, borderColor: '#ddd' },
  itemName: { fontSize: 18 },
  itemPrice: { fontSize: 16 },
  itemDescription: { fontSize: 14, color: '#555' },
});

export default Menu;

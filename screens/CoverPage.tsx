import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const CoverPage = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DASH'S PLACE</Text>
      <Image
        source={{ uri: 'c:\\Users\\lab_services_student\\downloads\\cheff.jpg' }}
        style={styles.image}
      />
      <Button
        title="Enter"
        color="#333"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cyan',
    padding: 20,
  },
  title: {
    fontSize: 50,
    fontFamily: 'Lobster-Regular', // Use your custom font here
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 30,
  },
});

export default CoverPage;

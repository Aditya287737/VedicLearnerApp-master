import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Subtraction = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Subtraction</Text>
        {/* Logo */}
        <Image source={require('C:/Users/adity/Downloads/VedicLearnerApp/VedicLearnerApp-master/assets/images/Logo.png')} style={styles.logo} />
      </View>
      <ScrollView contentContainerStyle={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.lesson1]}
          onPress={() => navigation.navigate('Add_Lesson1')}
        >
          <Text style={styles.buttonText}>Lesson I</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.lesson2]}
          onPress={() => navigation.navigate('Add_Lesson2')}
        >
          <Text style={styles.buttonText}>Lesson II</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.lesson3]}
          onPress={() => navigation.navigate('Add_Lesson3')}
        >
          <Text style={styles.buttonText}>Lesson III</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.lesson4]}
          onPress={() => navigation.navigate('Add_Lesson4')}
        >
          <Text style={styles.buttonText}>Lesson IV</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.lesson5]}
          onPress={() => navigation.navigate('Add_Lesson5')}
        >
          <Text style={styles.buttonText}>Lesson V</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.home]}
          onPress={() =>
    navigation.navigate('Drawer', {
      screen: 'MainTabs',
      params: { screen: 'Lessons' },
    })
  }
        >
          <Text style={styles.buttonText}>Back to Modules</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F7FA',
  },
  header: {
    paddingTop: 50,
    paddingBottom: 0,
    backgroundColor: '#567396',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  buttonContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    marginLeft: 25
  },
  button: {
    width: '90%',
    paddingVertical: 17,
    borderRadius: 15,
    alignItems: 'center',
    marginVertical: 14,
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  lesson1: {
    borderColor: '#FFD700',
    backgroundColor: '#FFFACD',
  },
  lesson2: {
    borderColor: '#f0ca00',
    backgroundColor: '#ebe6be',
  },
  lesson3: {
    borderColor: '#e0bd00',
    backgroundColor: '#d9d5b0',
  },
  lesson4: {
    borderColor: '#cfae02',
    backgroundColor: '#c7c3a1',
  },
  lesson5: {
    borderColor: '#ba9d02',
    backgroundColor: '#b8b495',
  },
  home: {
    borderColor: '#575757',
    backgroundColor: '#d4d4d4',
  },
});

export default Subtraction;
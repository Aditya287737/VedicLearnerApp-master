import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const MulPractice = ({ navigation }) => {
  const handleOptionPress = (option) => {
    console.log(`Option ${option} selected`);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Multipliation Practice</Text>
      </View>

      {/* Question Box */}
      <View style={styles.questionBox}>
        <Text style={styles.questionText}>What is 3x20?</Text>
      </View>

      {/* Answer Options */}
      <ScrollView contentContainerStyle={styles.optionsContainer}>
        <TouchableOpacity
          style={[styles.optionButton, styles.option1]}
          onPress={() => handleOptionPress('Option 1')}
        >
          <Text style={styles.optionText}>60</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.optionButton, styles.option2]}
          onPress={() => handleOptionPress('Option 2')}
        >
          <Text style={styles.optionText}>27</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.optionButton, styles.option3]}
          onPress={() => handleOptionPress('Option 3')}
        >
          <Text style={styles.optionText}>27</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.optionButton, styles.option4]}
          onPress={() => handleOptionPress('Option 4')}
        >
          <Text style={styles.optionText}>27</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.home]}
          onPress={() =>
            navigation.navigate('Drawer', {
              screen: 'MainTabs',
              params: { screen: 'Practice' },
            })
          }
        >
          <Text style={styles.buttonText}>Back to Practice Page</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006666',
  },
  header: {
    marginTop: 40,
    paddingTop: 40,
    paddingBottom: 40,
    backgroundColor: '#567396',
    alignItems: 'center',
    marginBottom: 40,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  questionBox: {
    paddingTop: 25,
    paddingBottom: 25,
    backgroundColor: '#00291b',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  questionText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  optionsContainer: {
    flexGrow: 1,
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
  },
  optionButton: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  option1: {
    backgroundColor: '#ffe600',
  },
  option2: {
    backgroundColor: '#ffa600',
  },
  option3: {
    backgroundColor: '#ff5500',
  },
  option4: {
    backgroundColor: '#ff0000',
  },
  optionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  home: {
    backgroundColor: '#212121',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default MulPractice;
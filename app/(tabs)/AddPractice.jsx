import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

// Function to generate question and options
const generateAdditionQuestion = () => {
  // Generate two random numbers
  const num1 = Math.floor(Math.random() * 101); // Between 0 and 100
  const num2 = Math.floor(Math.random() * (101 - num1)); // Ensure sum <= 100
  const correctAnswer = num1 + num2;

  // Generate unique random incorrect options
  const options = new Set();
  while (options.size < 3) {
    const option = Math.floor(Math.random() * 101);
    if (option !== correctAnswer) {
      options.add(option);
    }
  }

  // Combine correct answer with options and shuffle
  const allOptions = [...options, correctAnswer].sort(() => Math.random() - 0.5);

  return { num1, num2, correctAnswer, allOptions };
};

const AddPractice = ({ navigation }) => {
  const [question, setQuestion] = useState(generateAdditionQuestion());

  const handleOptionPress = (option) => {
    const message = option === question.correctAnswer ? 'Correct!' : 'Try Again!';
    console.log(message);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Addition Practice</Text>
      </View>

      {/* Question Box */}
      <View style={styles.questionBox}>
        <Text style={styles.questionText}>
          What is {question.num1} + {question.num2}?
        </Text>
      </View>

      {/* Answer Options */}
      <ScrollView contentContainerStyle={styles.optionsContainer}>
        {question.allOptions.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.optionButton, styles[`option${index + 1}`]]}
            onPress={() => handleOptionPress(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={[styles.button, styles.home]}
          onPress={() => {
            navigation.navigate('Drawer', {
              screen: 'MainTabs',
              params: { screen: 'Practice' },
            });
          }}
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

export default AddPractice;
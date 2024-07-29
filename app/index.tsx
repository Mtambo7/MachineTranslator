import { FontAwesome, FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { Colors } from '~/constants/Colors';

const Home = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const onTranslate = () => {
    const translation = input;
    setOutput(translation);
  };
  return (
    <>
      <Stack.Screen options={{ title: 'Home', headerTitleAlign: 'center' }} />

      {/* Language Selector */}

      <View style={styles.languageSelector}>
        <Text style={styles.language}>English</Text>
        <FontAwesome5 name="exchange-alt" size={18} color={Colors.light.secondary} />
        <Text style={styles.language}>Swahili</Text>
      </View>
      <View style={styles.line} />

      {/* Input container */}

      <View style={styles.inputContainer}>
        <View style={styles.textInputContainer}>
          {/* Input */}

          <TextInput
            value={input}
            onChangeText={setInput}
            placeholder="Enter Your Text"
            multiline
            numberOfLines={4}
            maxLength={5000}
            style={styles.textInput}
          />

          {/* Send Button */}

          <View style={styles.sendIcon}>
            <FontAwesome
              onPress={onTranslate}
              name="arrow-circle-right"
              size={30}
              color={Colors.light.primary}
            />
          </View>
        </View>

        {/* Microphone  */}

        <View style={styles.microphoneContainer}>
          <FontAwesome name="microphone" size={18} color={Colors.light.secondary} />
          <Text style={styles.microphoneText}>{input.length}/5000</Text>
        </View>
        <View style={styles.line} />
      </View>

      {/* Output container */}
      {output && (
        <View style={styles.outputContainer}>
          <Text style={styles.outputText}>{output}</Text>
          <View style={styles.outputIcons}>
            <FontAwesome6 name="volume-high" size={18} color={Colors.light.primary} />
            <FontAwesome5 name="copy" size={18} color={Colors.light.primary} />
          </View>
        </View>
      )}
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  languageSelector: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5,
  },

  language: {
    fontWeight: 'bold',
    color: Colors.light.primary,
  },

  textInput: {
    fontSize: 14,
    flex: 1,
    backgroundColor: Colors.light.grey,
    padding: 10,
    borderRadius: 8,
    margin: 1,
    marginRight: 30,
    textAlignVertical: 'top',
  },
  textInputContainer: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  inputContainer: {
    padding: 5,
    margin: 5,
  },
  line: {
    alignSelf: 'center',
    padding: 5,
    borderBottomWidth: 0.3,
    width: '95%',
    borderBottomColor: Colors.light.primary,
  },
  microphoneContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },

  microphoneText: {
    color: Colors.light.secondary,
    right: 60,
  },
  sendIcon: {
    right: 15,
  },
  outputContainer: {
    gap: 5,
    padding: 5,
    backgroundColor: Colors.light.grey,
    margin: 5,
  },
  outputIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  outputText: {
    minHeight: 50,
  },
});

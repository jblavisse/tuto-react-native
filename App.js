import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  // Variable / Ce qui va permettre de modifier la variable / Valeur par défaut
  const [title, setTitle] = useState("Bonjour");
  const [name, setName] = useState("");

  function hello() {
    // Bonjour -> Bijour lé gins
    setTitle('Bijour lé gins');
  }

  function displayName() {
    console.log(name);
  }

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text style={styles.textRoxor}>Voilà une application de Roxor!</Text>
      <Button onPress={hello} title="Commencer à codey" color="blue" />


      <View style={styles.formulairrr}>
        <TextInput style={styles.input} value={name}
         onChangeText={(text) => {setName(text)}} />
        <Button title="Go!" color="red" onPress={displayName} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textRoxor: {
    color: '#ff3d6a',
    backgroundColor: '#003dff',
    padding: 20,
    marginBottom: 30
  },
  input: {
    borderWidth: 2,
    borderColor: 'red',
    margin: 5
  },
  formulairrr: {
    flexDirection: 'row'
  }
});

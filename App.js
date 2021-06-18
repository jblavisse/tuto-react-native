import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';

import Person from './Person';

export default function App() {
  // Variable / Ce qui va permettre de modifier la variable / Valeur par défaut
  const [title, setTitle] = useState("Bonjour");
  const [nameInput, setNameInput] = useState("");

  const [people, setPeople] = useState([
    {name: "JiBou"},
    {name: "JeanBite"},
    {name: "JeanBite"},
    {name: "JeanBite"},
    {name: "JeanBite"},
    {name: "JeanBite"},
    {name: "JeanBite"},
    {name: "JeanBite"},
    {name: "JeanBite"},
    {name: "JeanBite"},
    {name: "JeanBite"},
    {name: "JeanBite"},
    {name: "JeanBite"},
    {name: "JeanBite"},
    {name: "JeanBite"},
    {name: "JeanBite"},
    {name: "JeanBite"},
    {name: "JeanBite"},
    {name: "JeanBite"},
    {name: "JeanBite"},
    {name: "JeanBite"},
    {name: "JeanBite"},
    {name: "JeanBite"},
    {name: "JeanBite"},
    {name: "JeanBite"},
    {name: "JeanBite"},
    {name: "JeanBite"},
    {name: "JeanBite"},
    {name: "JeanBite"},
    {name: "JeanBite"},
    {name: "JeanBite"},
    {name: "JeanBite"},
    {name: "JeanBite"},
    {name: "JeanBite"},
    {name: "JeanBite"},
    {name: "JeanBite"},
  ])

  function hello() {
    // Bonjour -> Bijour lé gins
    setTitle('Bijour lé gins');
  }

  function addName() {
    console.log(nameInput);
    // Format {name: "JiBou"}
    const newPerson = {name: nameInput};
    // Ajouter dans la liste people
    const newPeople = [...people, newPerson];
    setPeople(newPeople);
    setNameInput("");
  }

  const peopleJSX = people.map(person => {
    return <Person name={person.name} />
  })

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>{title}</Text>
        <Text style={styles.textRoxor}>Voilà une application de Roxor!</Text>
        <Button onPress={hello} title="Commencer à codey" color="blue" />


          <View style={styles.formulairrr}>
            <TextInput style={styles.input} value={nameInput}
            onChangeText={(text) => {setNameInput(text)}} />
            <Button title="Go!" color="red" onPress={addName} />
          </View>

          {peopleJSX}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
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

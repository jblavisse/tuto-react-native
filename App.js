import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export default function App() {
  // Variable / Ce qui va permettre de modifier la variable / Valeur par défaut
  const [title, setTitle] = useState("Bonjour");
  const [nameInput, setNameInput] = useState("");

  const [people, setPeople] = useState([
    {name: "JiBou"},
    {name: "JeanBite"}
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
    return <Text>{person.name}</Text>
  })

  return (
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

      <AntDesign name="carryout" size={48} color="#f7c2ef" />
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

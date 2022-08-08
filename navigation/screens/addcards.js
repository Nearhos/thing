import * as React from 'react';
import { TextInput, View, Text, StyleSheet, Button } from 'react-native';
import { useState } from 'react';
import { doc, getDoc, setDoc, collection } from 'firebase/firestore';

import { db } from '../../Core/config'

export default function addcards({ navigation }) {
    const [ testInput, setTestInput ] = useState("");
    const [ deckText, setDeckText ] = useState("");
    const [ frontText, setFrontText ] = useState("");
    const [ backText, setBackText ] = useState("");

    const CreateCard = ( deck, front, back ) => {
        const myDoc = doc(db, deck, front)

        const docData = 
        {
        "front": front,
        "back": back,
        "wrongs": 0
        }

        setDoc(myDoc, docData)

        //Handling promises
        .then(() => {
        //success
        console.log("card created! Front:", front, "back:", back)
        alert("card created")
        })
        .catch((error) => {
        alert(error.message)
        })
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',  backgroundColor: '#302F2A', }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold', color: 'white', paddingBottom: 80,  }}> add a card</Text>
                <View style = {styles.flashcard}>
            <TextInput style = {styles.flashcardt} placeholder='deck...' value={deckText} onChangeText={(text) => {setDeckText(text)}} />
            <TextInput style = {styles.flashcardt} placeholder='front...' value={frontText} onChangeText={(text) => {setFrontText(text)}} />
            <TextInput style = {styles.flashcardt }placeholder='back...' value={backText} onChangeText={(text) => {setBackText(text)}} />
            <Button  title='create' onPress={() => {CreateCard(deckText, frontText, backText)}} disabled={backText==''}/>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
flashcard:{
    backgroundColor: '#3B63CC',
    padding: 100,
    paddingHorizontal: 150,
},
flashcardt:{
    padding: 10,
    color: 'white',
    fontSize: 50,
   
}});

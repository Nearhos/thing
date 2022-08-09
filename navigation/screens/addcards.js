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
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',  backgroundColor: '#302F2A',}}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold', color: 'white', }}> add a card</Text>
            <TextInput placeholder='deck...' value={deckText} onChangeText={(text) => {setDeckText(text)}} />
            <TextInput placeholder='front...' value={frontText} onChangeText={(text) => {setFrontText(text)}} />
            <TextInput placeholder='back...' value={backText} onChangeText={(text) => {setBackText(text)}} />
            <Button title='create' onPress={() => {CreateCard(deckText, frontText, backText)}} disabled={backText==''}/>
        </View>
    );
}


const styles = StyleSheet.create({

});
import * as React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useState } from 'react';
import { doc, getDoc, setDoc, collection, getDocs } from 'firebase/firestore';

import { db } from '../../Core/config'

export default function playpage({ navigation }) {
    const [ card, setCard ] = useState({});
    const [ cards, setCards ] = useState([]);
    const [ userInput, setUserInput ] = useState("");
    const [ correct, setCorrect ] = useState(null);
    var pointsVar = 0;
    const [ points, setPoints ] = useState(0);

    const RandomFunction =  (arr) => {
        const randItem = arr[Math.floor(Math.random()*arr.length)];
        console.log('Generated from random function:', randItem);
        return randItem;
    }

    const RandomCard = () => {
        //Generate the collection of cards into an array
        getDocs(collection(db, "spanish"))

        .then((querySnapshot) => {
            const cardArray = [];

            querySnapshot.forEach((doc) => {
                const n = doc.data().wrongs + 1

                console.log(doc.id, '=>', doc.data(), 'n:', n)

                for (let i=0; i<n; i++) {
                    cardArray.push(doc.data());
                }

            })

            console.log(cardArray);
            // idk why setCards only works the second time the button is pressed
            setCards(cardArray);
            console.log(cards);

            
            //Pick a random card from the array
            const randCard = RandomFunction(cardArray);
            setCard(randCard);
            console.log(card);


        })
        .catch((error) => {
            alert(error.message)
        })

    }

    const NextCard = () => {
        setCorrect(null);
        setUserInput("");
        setCard({});
        console.log(correct);
        console.log(userInput);
        console.log(card);
    }

    // idk why it only works the second time you press submit
    const ValidateInput = (input) => {
        if (input == card.back) {
            setCorrect(true);
            pointsVar += 10;
            setPoints(pointsVar);

        } else {
            setCorrect(false);
        }
        console.log(correct);
        console.log(points);

    

    }


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',  backgroundColor: '#302F2A',}}>
            <Text style={{color:"white"}} >Points: {points}</Text>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold', color: 'white'}}>Play</Text>
            <Button title="Random Card from Spanish deck" onPress={RandomCard}/>
            {
                card != "" && 
                <Text style={{color: 'white'}}>{card.front}</Text>
            }
            <TextInput 
            placeholder='Input translated word...' 
            value={userInput}
            onChangeText={(text) => {setUserInput(text)}}  />
            <Button title='submit' onPress={() => {ValidateInput(userInput)}}/>
            {
                correct == null 
                ?<Text style={{color: 'white'}}>not yet checked</Text>
                :<Text style={{color: 'white'}}>checked</Text>
            }
            {
                correct 
                ? <Text style={{color: 'white'}}>Correct</Text>
                : <Text style={{color: 'white'}}>Wrong</Text>
            }
            <Button title='next card' onPress={NextCard}/>
            
        </View>
    );
}
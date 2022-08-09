import * as React from 'react';
import { doc, getDoc, getDocs, setDoc, deleteDoc, collection, querySnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

import { db } from '../../Core/config';

export default function deletecards({ navigation }) {
    const [ cards, setCards ] = useState([]);

    const Delete = () => {
        const myDoc = doc(db, "BunchOfNames", 'erm')

        deleteDoc(myDoc)
    
        .then(() => {
            //success
            console.log("data deleted")
            alert("data deleted")
        })
        .catch((error) => {
            alert(error.message)
        })
    }

    const RenderCollection = () => {
        getDocs(collection(db, "spanish"))
      
        .then((querySnapshot) => {
            const cardsArray = [];

            querySnapshot.forEach((doc) => {
            console.log(doc.id, '=>', doc.data())

            cardsArray.push({
                ...doc.data(),
                key: doc.data().front
            });

            setCards(cardsArray);
            console.log(cards);
            })
        })
        .catch((error) => {
            alert(error.message)
        })

    }


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',  backgroundColor: '#302F2A', }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' , color: 'white',}}> delete a card</Text>
            <Button title='delete' onPress={Delete}/>
            <Button title='render' onPress={RenderCollection}/>
            {/* <FlatList data={cards} renderItem={()} /> */}
        </View>
    );
}

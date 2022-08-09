import * as React from 'react';
import { View, Text, Button } from 'react-native';

export default function deletedeck ({ navigation }) {


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',  backgroundColor: '#302F2A',}}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold', color: 'white', }}> Delete deck</Text>
        </View>
    );
}
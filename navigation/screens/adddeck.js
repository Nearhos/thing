import * as React from 'react';
import { View, Text } from 'react-native';

export default function adddeck({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',  backgroundColor: '#302F2A',}}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold', color: 'white', }}> Add deck</Text>
        </View>
    );
}


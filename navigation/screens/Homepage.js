import * as React from 'react';
import { View, Text } from 'react-native';

export default function Homepage({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',   backgroundColor: '#302F2A', }}>
            <Text
                onPress={() => alert('This is the Home screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' , color: 'white',}}>Flashgame</Text>
        </View>
    );
}

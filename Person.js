import { AntDesign } from '@expo/vector-icons'; 

import React from 'react';
import { View, Text } from 'react-native';

export default function Person({name}) {
    return (
        <Text>{name} 
            <AntDesign name="delete" size={24} color="black" />
        </Text>
    )
}

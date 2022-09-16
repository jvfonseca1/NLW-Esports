import React from 'react';
import { View, Image } from 'react-native';

import logoLmg from '../../../assets/logo-nlw-esports.png';

import { styles } from './styles';

export function Home(){
    return(
        <View style={styles.container}>
            <Image
                source={logoLmg}    
                style={styles.logo} 
            />
        </View>
    );
}
import React from 'react';
import { View, Image } from 'react-native';

import logoLmg from '../../../assets/logo-nlw-esports.png';
import { GameCard } from '../../GameCard';
import { Heading } from '../../Heading';
import { GAMES } from '../../../utils/games';

import { styles } from './styles';

export function Home(){
    return(
        <View style={styles.container}>
            <Image
                source={logoLmg}    
                style={styles.logo} 
            />
            
            <Heading 
                title="Encontre o seu duo!"
                subtitle="Conecte-se e comece a jogar"
            />

            <GameCard 
            data={GAMES[0]}
            />
        </View>

        
    );
}
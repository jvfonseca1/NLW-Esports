import React from 'react';
import { View, Image, FlatList } from 'react-native';

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

            <FlatList
                data={GAMES}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <GameCard 
                        data={item}
                    />
                )}
                horizontal
                contentContainerStyle={styles.contentList}
            />

        </View>
    );
}
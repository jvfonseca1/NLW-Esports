import React, { useEffect, useState } from 'react';
import { Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import logoLmg from '../../../assets/logo-nlw-esports.png';
import { GameCard, GameCardProps } from '../../GameCard';
import { Heading } from '../../Heading';

import { styles } from './styles';
import { Background } from '../../background';



export function Home(){
    // Conexão com a api
    const [games,setGames] = useState<GameCardProps[]>([]);
   
    useEffect(() => {
        fetch('http://192.168.1.135:8080/games')
            .then (response => response.json())
            .then (data => setGames(data));
    }, [])

    // Navegação entre telas (Home - Game)
    const navigation = useNavigation();

    function handleOpenGame({id, title, bannerURL}: GameCardProps){
        navigation.navigate('game', {id, title, bannerURL});
    }

    return(
        <Background>
            <SafeAreaView style={styles.container}>
                <Image
                    source={logoLmg}    
                    style={styles.logo} 
                />
                
                <Heading 
                    title="Encontre o seu duo!"
                    subtitle="Conecte-se e comece a jogar"
                />

                <FlatList
                    data={games}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <GameCard 
                            data={item}
                            onPress={() => handleOpenGame(item)}
                        />
                    )}
                    horizontal
                    contentContainerStyle={styles.contentList}
                />

            </SafeAreaView>
        </Background>
    );
}
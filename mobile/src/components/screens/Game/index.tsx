import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {useRoute, useNavigation} from '@react-navigation/native';
import { TouchableOpacity, View, Image, FlatList, ScrollView, Text } from 'react-native';


import { Background } from '../../background';
import LogoImg from '../../../assets/logo-nlw-esports.png';

import { THEME } from '../../../theme';
import { styles } from './styles';

import { GameParams } from '../../../@types/navigation';
import { Entypo } from '@expo/vector-icons';
import { Heading } from '../../Heading';
import { DuoCard, DuoCardProps } from '../../DuoCard';





export function Game(){

    // Resgate de parametros Game
    const route = useRoute();
    const game = route.params as GameParams;


    // Navegação entre telas (Go Back)
    const navigation = useNavigation();
    function handleGoBack(){
        navigation.goBack();
    }
    
   
    // Conexão com a api
    const [duos,setDuos] = useState<DuoCardProps[]>([]);
   
    useEffect(() => {
        fetch(`http://192.168.1.134:8080/games/${game.id}/ads`)
            .then (response => response.json())
            .then (data => setDuos(data))
    }, [])

    return (
        <Background>
            <ScrollView>
                <SafeAreaView style={styles.container}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={handleGoBack}>
                            <Entypo
                                name='chevron-thin-left'
                                color={THEME.COLORS.CAPTION_300}
                                size={20}
                            />
                        </TouchableOpacity>

                        <Image
                            source ={LogoImg}
                            style={styles.logo}
                        />

                        <View style={styles.right}/>

                    </View >

                    <Image
                        source={{uri: game.bannerURL}}
                        style= {styles.cover}
                        resizeMode="contain"
                    />

                    <Heading 
                            title={game.title} 
                            subtitle={'Conecte-se e comece a jogar!'}
                    />

                    <FlatList
                        data={duos}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => (
                            <DuoCard 
                                data={item}
                                onConnect={() => {}}
                            />
                        )}
                        horizontal
                        style={styles.containerList}
                        contentContainerStyle={styles.contentList}
                        showsHorizontalScrollIndicator={false}
                        ListEmptyComponent={() => (
                            <Text style={styles.emptyListText}>
                                Não há anúncios publicados ainda
                            </Text>
                        )}
                    />

                </SafeAreaView>
            </ScrollView>
        </Background>
        
    );
}
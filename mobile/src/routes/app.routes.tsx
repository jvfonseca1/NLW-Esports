import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from '../components/screens/Home/index';
import { Game } from '../components/screens/Game/index';

const { Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes(){
    return(
        <Navigator screenOptions={{headerShown: false,}}>
            <Screen
                name="home"
                component={Home}

            />

            <Screen
                name="game"
                component={Game}
            />
        </Navigator>
    )
}
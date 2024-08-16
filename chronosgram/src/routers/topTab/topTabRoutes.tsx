import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styles from './style';

import Main from '../../pages/home/main/main';
import Rotinas from '../../pages/home/rotinas/rotinas';
import Amigos from '../../pages/home/amigos/amigos';
import Explorar from '../../pages/home/explorar/explorar';

const Tab = createMaterialTopTabNavigator();


export default function TopTabRoutes(){
    return(
        <Tab.Navigator
            screenOptions={({}) => ({
                tabBarStyle: styles.containerStyle,
                tabBarIndicatorStyle: styles.indicator,
                tabBarActiveTintColor: 'white',
            })}>
            <Tab.Screen name="Home" component={Main} />
            <Tab.Screen name="FEED" component={Rotinas} />
            <Tab.Screen name="Explorar" component={Explorar} />
            <Tab.Screen name="Amigos" component={Amigos} />
        </Tab.Navigator>
    )
}
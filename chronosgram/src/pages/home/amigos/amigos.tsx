import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

import CardUser from './components/cardUser';

export default function Amigos() {

  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>

        <View style={{flexDirection: 'row'}}>

            <CardUser/>
            <CardUser/>

        </View>

        <View style={{flexDirection: 'row'}}>

            <CardUser/>
            <CardUser/>

        </View>


    </ScrollView>
  );
}
import { ScrollView, StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

const urlUserPicture = '../../../../../assets/images/rotinas/user.png'

const dataUsuario = {
    "id": 1,
    "picture": '../../../../../assets/images/rotinas/user.png',
    "nome": "João da Silva",
    "conteudo": "Marcou uma meta",
}

export default function Feed() {

  const navigation = useNavigation();

  return (
    <View style={{marginTop: 10, backgroundColor: '#603F74'}}>

        <View style={styles.header}>

            <Image style={styles.profileImage} source={require(urlUserPicture)}/>

            <Text style={styles.nomeUsuario}> {dataUsuario.nome} </Text>

        </View>

        <View>
            <Text style={styles.texto}> {dataUsuario.conteudo} </Text>
        </View>

    </View>
  );
}
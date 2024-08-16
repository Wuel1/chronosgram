import { ScrollView, StyleSheet, Text,Image, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

const urlUserPicture = "../../../../../assets/images/rotinas/user.png"
const urlSendPicture = '../../../../../assets/images/rotinas/send.png'
const urlMorePicture = '../../../../../assets/images/rotinas/more.png'


const dataUsuario = {
    "id": 1,
    "nome": "Thiago Brito",
    "faculdade": "UFRPE",
    "curso": "Eng. Computação",
}

export default function CardUser() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View>
            <Image style={styles.imagem} source={require(urlUserPicture)}/>
        </View>
        <View>
            <Text style={styles.texto}> {dataUsuario.nome}</Text>
            <Text style={styles.texto}> {dataUsuario.faculdade} </Text>
            <Text style={styles.texto}> {dataUsuario.curso} </Text>
        </View>
        <View style={styles.viewBotao}>
            <TouchableOpacity>
                <Image style={styles.botao} source={require(urlSendPicture)}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.botao} source={require(urlMorePicture)}/>
            </TouchableOpacity>
        </View>        
    </View>
  );
}
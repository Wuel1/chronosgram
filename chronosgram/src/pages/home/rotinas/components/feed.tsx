import { ScrollView, StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

const urlUserPicture = '../../../../../assets/images/rotinas/user.png'
const urlLike = '../../../../../assets/images/rotinas/like.png'
const urlComment = '../../../../../assets/images/rotinas/comment.png'
const urlMore = '../../../../../assets/images/rotinas/more.png'
const primaria = "#16041B"


const dataUsuario = {
    "id": 1,
    "picture": '../../../../../assets/images/rotinas/user.png',
    "nome": "João da Silva",
    "conteudo": "Marcou uma meta",
}

export default function Feed() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>

        <View style={styles.header}>

            <Image style={styles.profileImage} source={require(urlUserPicture)}/>

            <Text style={styles.nomeUsuario}> {dataUsuario.nome} </Text>

        </View>

        <View style={styles.content}>

            {/* aqui está apenas um exemplo genérico e simples, entretanto aqui deve ir alguma coisa mais 'complexa', não sei se uma foto, algum design, ou coisa parecida. */}

            <Text style={styles.texto}> {dataUsuario.conteudo} </Text>

        </View>

        <View style={styles.viewBotao}>
            <TouchableOpacity style={styles.botao}>
                <Image style={styles.botao} source={require(urlLike)}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}>
                <Image style={styles.botao} source={require(urlComment)}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}>
                <Image style={styles.botao} source={require(urlMore)}/>
            </TouchableOpacity>
        </View>

    </View>
  );
}
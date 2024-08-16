import { StyleSheet } from "react-native";

const primaria = "#16041B"
const fonte = "Josefins-Sans-Bold"
const card = "#73628A"
const secundaria = "#603F74"
const verde = "#52FF00"
const cinza = "#D9D9D9"

const styles = StyleSheet.create({
    container: {
        height: 220,
        width: 170,
        backgroundColor: secundaria,
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 20,
        margin: 10,
        padding: 10,
      },
    imagem:{
        width: 80,
        height: 80,
        borderRadius: 40,
        margin: 10,
    },
    texto:{
        fontFamily: fonte,
        fontSize: 12,
        flexDirection: 'column',
        color: 'white',
    },
    viewBotao:{
        flexDirection: 'row',
        margin: 10,
    },
    botao:{
        marginHorizontal: 10,
        marginVertical: 5,
        width: 25,
        height: 25,
    }
  });

export default styles
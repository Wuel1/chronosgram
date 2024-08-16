import { StyleSheet } from "react-native";

const fonte = "Josefins-Sans-Bold"
const primaria = "#16041B"
const card = "#73628A"
const secundaria = "#603F74"
const verde = "#52FF00"
const cinza = "#D9D9D9"

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginBottom: 8,
      },
    profileImage:{
        height: 30,
        width: 30,
        borderRadius: 15,
    },
    nomeUsuario:{
        fontFamily: fonte,
        fontSize: 16,
        paddingLeft: 10,
        fontWeight: '600',
        color: 'white'
    },
    texto:{
        fontFamily: fonte,
        flexDirection: 'column',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    }     
  });

export default styles
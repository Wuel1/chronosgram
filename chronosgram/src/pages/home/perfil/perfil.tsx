import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal, TextInput, Button, StyleSheet, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Biblioteca de ícones
import { useUserData, updateUser } from './logic';
import styles from './style';

const userId = '5a0e161c-095c-490f-9a60-f7f1635118fe';

const Perfil = () => {
  const { userData, fetchUserData } = useUserData(userId);
  const [modalVisible, setModalVisible] = useState(false);
  const [newName, setNewName] = useState('');
  const [newTurnoLivre, setNewTurnoLivre] = useState('');
  const [newTipoUsuario, setNewTipoUsuario] = useState('');

  useEffect(() => {
    if (userData) {
      setNewName(userData.nome);
      setNewTurnoLivre(userData.turno_livre);
      setNewTipoUsuario(userData.tipo);
    }
  }, [userData]);

  const handleUpdate = async () => {
    try {
      await updateUser(userId, { nome: newName, turno_livre: newTurnoLivre, tipo: newTipoUsuario });
      setModalVisible(false);
      await fetchUserData(); // Atualiza os dados após salvar
    } catch (error) {
      console.error('Erro ao atualizar os dados do usuário:', error);
    }
  };

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
      <View style={styles.profileBox}>
        <Icon name="person" size={80} color="#6A0D91" style={styles.profileIcon} />
        <View style={styles.textContainer}>
          <Text style={styles.fullName}>{userData?.nome}</Text>
          <Text style={styles.userInfo}>Idade: 24</Text>
          <Text style={styles.userInfo}>Gênero: Masculino</Text>
          <View style={styles.horizontalContainer}>
            <Text style={styles.username}>@{userData?.username}</Text>
            <TouchableOpacity style={styles.editButton} onPress={() => setModalVisible(true)}>
              <Icon name="edit" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* ScrollView horizontal para as outras informações */}
      <ScrollView style={styles.horizontalScrollView} contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.cardContainer}>
          <View style={styles.smallProfileBox}>
            <Icon name="school" size={40} color="#6A0D91" style={styles.smallIcon} />
            <View style={styles.smallTextContainer}>
              <Text style={styles.smallUniversity}>Universidade Federal Rural de Pernambuco</Text>
              <Text style={styles.smallCityName}>Unidade: Belo Jardim</Text>
            </View>
          </View>
          <View style={styles.smallProfileBox}>
            <Icon name="computer" size={40} color="#6A0D91" style={styles.smallIcon} />
            <View style={styles.smallTextContainer}>
              <Text style={styles.smallCourse}>Engenharia da Computação</Text>
              <Text style={styles.smallCourseType}>Horário: Integral</Text>
            </View>
          </View>
          <View style={styles.smallProfileBox}>
            <Icon name="person-pin" size={40} color="#6A0D91" style={styles.smallIcon} />
            <View style={styles.smallTextContainer}>
              <Text style={styles.smallUserType}>Tipo de usuário: {userData?.tipo}</Text>
            </View>
          </View>
          <View style={styles.smallProfileBox}>
            <Icon name="schedule" size={40} color="#6A0D91" style={styles.smallIcon} />
            <View style={styles.smallTextContainer}>
              <Text style={styles.smallTurnoLivre}>Turno livre: {userData?.turno_livre}</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Modal para editar nome, turno livre e tipo de usuário */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Editar Dados</Text>
            <TextInput
              style={styles.input}
              value={newName}
              onChangeText={setNewName}
              placeholder="Nome"
              placeholderTextColor="#888"
            />
            <TextInput
              style={styles.input}
              value={newTurnoLivre}
              onChangeText={setNewTurnoLivre}
              placeholder="Turno Livre"
              placeholderTextColor="#888"
            />
            <TextInput
              style={styles.input}
              value={newTipoUsuario}
              onChangeText={setNewTipoUsuario}
              placeholder="Tipo de Usuário"
              placeholderTextColor="#888"
            />
            <View style={styles.buttonContainer}>
              <Button title="Salvar" onPress={handleUpdate} color="#4CAF50" />
              <Button title="Cancelar" onPress={() => setModalVisible(false)} color="#F44336" />
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default Perfil;

import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList, Platform, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StatusBar } from 'expo-status-bar';
import DateTimePicker from '@react-native-community/datetimepicker';

type Meta = {
  id: string;
  name: string;
  date: string;
  priority: number;
  completed: boolean;
  completedDate?: Date; // Adiciona a data de conclusão
};

export default function Metas() {
  const navigation = useNavigation();
  const [metas, setMetas] = useState<Meta[]>([]);
  const [metaName, setMetaName] = useState('');
  const [metaDate, setMetaDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const addMeta = () => {
    if (metaName && metaDate) {
      const formattedDate = metaDate.toLocaleDateString();
      const priority = Math.floor((metaDate.getTime() - new Date().getTime()) / (1000 * 3600 * 24));
      const newMeta: Meta = { id: Math.random().toString(), name: metaName, date: formattedDate, priority, completed: false };
      const updatedMetas = [...metas, newMeta];
      updatedMetas.sort((a, b) => a.priority - b.priority);
      setMetas(updatedMetas);
      setMetaName('');
      setMetaDate(new Date());
    }
  };

  const onChangeDate = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || metaDate;
    setShowDatePicker(Platform.OS === 'ios');
    setMetaDate(currentDate);
  };

  const handleComplete = (id: string) => {
    const updatedMetas = metas.map(meta =>
      meta.id === id ? { ...meta, completed: true, completedDate: new Date() } : meta
    );
    setMetas(updatedMetas);
  };

  const isOverdue = (date: string) => {
    return new Date(date).getTime() < new Date().getTime();
  };

  const filterMetas = (metas: Meta[]) => {
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
    
    return metas
      .filter(meta => !(meta.completed && meta.completedDate && meta.completedDate < oneMonthAgo))
      .sort((a, b) => a.priority - b.priority);
  };

  const filteredMetas = filterMetas(metas);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Nova Meta</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome da Meta"
        value={metaName}
        onChangeText={setMetaName}
        placeholderTextColor="#888"
      />
      <TouchableOpacity style={styles.dateInput} onPress={() => setShowDatePicker(true)}>
        <Text style={styles.dateText}>{metaDate.toLocaleDateString()}</Text>
        <Icon name="calendar-today" size={24} color="#888" />
      </TouchableOpacity>
      {showDatePicker && (
        <View style={styles.datePickerContainer}>
          <DateTimePicker
            value={metaDate}
            mode="date"
            display="default"
            onChange={onChangeDate}
          />
        </View>
      )}
      <TouchableOpacity style={styles.addButton} onPress={addMeta}>
        <Icon name="add" size={24} color="#fff" />
        <Text style={styles.addButtonText}>Adicionar Meta</Text>
      </TouchableOpacity>

      <FlatList
        data={filteredMetas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.metaItem, item.completed && styles.completedMeta, isOverdue(item.date) && !item.completed && styles.overdueMeta]}>
            <View style={[styles.priorityIndicator, { backgroundColor: getPriorityColor(item.priority) }]} />
            <View style={styles.metaTextContainer}>
              <Text style={styles.metaName}>{item.name}</Text>
              <Text style={styles.metaDate}>
                Data Final: {item.date}
                {isOverdue(item.date) && !item.completed && <Text style={styles.overdueText}> (Atrasado)</Text>}
              </Text>
            </View>
            {!item.completed && (
              <TouchableOpacity style={styles.completeButton} onPress={() => handleComplete(item.id)}>
                <Icon name="check-circle" size={20} color="#fff" />
                <Text style={styles.completeButtonText}>Concluir</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      />

      <StatusBar style="light" />
    </View>
  );
}

const getPriorityColor = (priority: number) => {
  if (priority <= 1) return '#FF6F6F'; // Alta prioridade
  if (priority <= 3) return '#FFD54F'; // Média prioridade
  return '#66BB6A'; // Baixa prioridade
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16041B',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    marginBottom: 15,
  },
  dateInput: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  dateText: {
    fontSize: 16,
    color: '#888',
  },
  datePickerContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 15,
    zIndex: 1000,
  },
  datePicker: {
    width: '100%',
    color: '#333',
  },
  addButton: {
    flexDirection: 'row',
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
  },
  metaItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  completedMeta: {
    backgroundColor: '#d0f0c0',
  },
  overdueMeta: {
    borderColor: '#FF6F6F',
    borderWidth: 2,
  },
  priorityIndicator: {
    width: 10,
    height: '100%',
    borderRadius: 5,
    marginRight: 15,
  },
  metaTextContainer: {
    flex: 1,
  },
  metaName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  metaDate: {
    fontSize: 16,
    color: '#666',
  },
  overdueText: {
    color: '#FF6F6F',
  },
  completeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  completeButtonText: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 5,
    textAlign: 'center',
  },
});

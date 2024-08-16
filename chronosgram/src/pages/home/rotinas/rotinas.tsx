import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

import Feed from './components/feed';

export default function Rotinas() {

  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Feed/>
      <Feed/>
      <Feed/>
    </ScrollView>
  );
}
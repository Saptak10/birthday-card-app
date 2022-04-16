import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import {styles} from "./styles";

// You can import from local files
import CardRini from './components/CardRini/CardRini';
import CardSaptak from './components/CardSaptak/CardSaptak';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Happy Birthday Card
      </Text>
      <Card style={styles.cardStyle}>
        <CardRini />
      </Card>
      <Card style={styles.cardStyle}>
        <CardSaptak />
      </Card>
    </View>
  );
}



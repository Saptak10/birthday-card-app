import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import {styles} from "./styles";

export default function CardSaptak() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Happy Birthday to you Saptak
      </Text>
      <Image style={styles.logo} source={require('../../assets/dpsaptak.jpg')} />
    </View>
  );
}
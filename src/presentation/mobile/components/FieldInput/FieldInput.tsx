import React from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './FieldInputStyle';
interface Props {
  title: string;
}
const FieldInput: React.FC<Props> = props => {
  const {title} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

export default FieldInput;

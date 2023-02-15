import React from 'react';
import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import {color, spacing} from '../constants/theme';

interface CustomInputProps extends TextInputProps {}
const CustomInput: React.FC<CustomInputProps> = props => {
  return (
    <View style={styles.container}>
      <TextInput {...props} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    marginHorizontal: spacing.xxl,
    borderRadius: spacing.xl,
    marginTop: spacing.l,
    paddingHorizontal: spacing.m,
    paddingVertical: spacing.s,
  },
});
export default CustomInput;

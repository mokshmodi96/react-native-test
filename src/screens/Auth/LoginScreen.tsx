import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {color, spacing} from '../../constants/theme';
import {LoginScreenProps} from '../../types/navigation.types';
import {CommonActions} from '@react-navigation/native';
import CustomInput from '../../components/CustomInput';

const {height} = Dimensions.get('screen');
const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.imageStyle}
        />
      </View>
      <View style={styles.section}>
        <CustomInput
          placeholder={'Email'}
          keyboardType={'email-address'}
          autoCapitalize={'none'}
          placeholderTextColor={'#000'}
        />
        <CustomInput
          placeholder={'Password'}
          keyboardType={'default'}
          autoCapitalize={'none'}
          placeholderTextColor={'#000'}
          passwordRules={
            'required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8;'
          }
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [
                  {
                    name: 'Main',
                  },
                ],
              }),
            );
          }}>
          <Text style={styles.buttonTextStyle}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primaryColor,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  imageStyle: {
    height: height * 0.33,
    width: height * 0.33,
  },
  section: {
    flex: 1,
    justifyContent: 'center',
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: color.secondaryColor,
    alignItems: 'center',
    paddingVertical: spacing.m,
    marginHorizontal: spacing.xxl,
    borderRadius: spacing.xl,
  },
  buttonTextStyle: {
    color: color.white,
    fontSize: spacing.l - 2,
  },
});
export default LoginScreen;

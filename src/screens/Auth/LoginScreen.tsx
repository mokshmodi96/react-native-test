import React, {useState} from 'react';
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
import {setSecureValue} from '../../helpers/secureStorage';
import {secureStoreKeys} from '../../constants/secureStoreKeys';
import {isEmailValid, isPasswordValid} from '../../helpers/validation';
import Toast from 'react-native-simple-toast';

const {height} = Dimensions.get('screen');
const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async () => {
    if (isEmailValid(email)) {
      if (isPasswordValid(password)) {
        if (email === 'admin@gmail.com' && password === 'Admin@123') {
          await setSecureValue(secureStoreKeys.isLoggedIn, 'true');
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
        } else {
          Toast.show('Wrong Username or Password', 1000);
        }
      } else {
        Toast.show(
          'Enter Password with 8 Characters, 1 Letter and 1 Number',
          1000,
        );
      }
    } else {
      Toast.show('Enter Valid Email!', 1000);
    }
  };
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
          value={email}
          onChangeText={value => setEmail(value)}
        />
        <CustomInput
          placeholder={'Password'}
          keyboardType={'default'}
          autoCapitalize={'none'}
          placeholderTextColor={'#000'}
          secureTextEntry
          value={password}
          onChangeText={value => setPassword(value)}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => onSubmit()}>
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

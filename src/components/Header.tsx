import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {EdgeInsets, useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import ArrowBack from './svg/ArrowBack';
import {color, spacing} from '../constants/theme';

interface HeaderProps {
  backButton?: boolean;
  title?: string;
  rightAction?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({backButton, title, rightAction}) => {
  const insets = useSafeAreaInsets();
  const styles = useStyles(insets);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.left}>
          {backButton && (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backButton}>
              <ArrowBack />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.center}>
          {!!title && <Text style={styles.title}>{title}</Text>}
        </View>
        <View style={styles.right}>{!!rightAction && <>{rightAction}</>}</View>
      </View>
    </View>
  );
};

const useStyles = (insets: EdgeInsets) =>
  StyleSheet.create({
    container: {
      backgroundColor: color.primaryColor,
      paddingTop: insets.top + spacing.s + 4,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: spacing.m,
      paddingBottom: spacing.m,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    left: {flex: 1},
    center: {flex: 2, alignItems: 'center', justifyContent: 'center'},
    right: {
      flex: 1,
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
    backButton: {},
    title: {
      fontWeight: 'bold',
      fontSize: spacing.l,
      color: color.white,
    },
  });

export default Header;

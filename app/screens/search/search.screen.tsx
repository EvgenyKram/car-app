import React from 'react';
import {View} from 'react-native';
import HeaderComponent from '../../components/header/component';
import {createStyles} from './search.styles';

const SearchScreen = () => {
  const styles = createStyles();

  return (
    <View style={styles.container}>
      <HeaderComponent title="Search" hasBack />
    </View>
  );
};

export default SearchScreen;

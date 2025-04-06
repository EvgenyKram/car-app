import {View, Text, Image} from 'react-native';
import React from 'react';
import {createstyles} from './signin.styles';
import assets from '../../assets';
import InputComponent from '../../components/input/component';
import CheckBoxComponent from '../../components/checkbox/component';

const SignInScreen = () => {
  const styles = createstyles();
  const {logo_black} = assets;

  return (
    <View style={styles.container}>
      <View style={styles.flexRow}>
        <Image source={logo_black} style={styles.carLogo} />
        <Text style={styles.titleStyle}>Qent</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>Welcome Back</Text>
        <Text style={styles.textStyle}>Ready to hit the road.</Text>
      </View>
      <InputComponent
        onChangeText={e => console.log(e)}
        placeholder={'Email/Phone Number'}
      />

      <InputComponent
        onChangeText={e => console.log(e)}
        placeholder={'Password'}
      />
      <CheckBoxComponent
        onPress={e => console.log('item', e)}
        isChecked={false}
      />
    </View>
  );
};

export default SignInScreen;

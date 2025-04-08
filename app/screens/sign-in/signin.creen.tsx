import {View, Text, Image} from 'react-native';
import React from 'react';
import {createstyles} from './signin.styles';
import assets from '../../assets';
import InputComponent from '../../components/input/component';
import CheckBoxComponent from '../../components/checkbox/component';
import Button from '../../components/button/component';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {scale} from '../../theme/scale';
import {ScrollView} from 'react-native-gesture-handler';
import { navigate } from '../../navigators/navigation-utilities';

const SignInScreen = () => {
  const styles = createstyles();
  const {logo_black} = assets;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.flexRow}>
        <Image source={logo_black} style={styles.carLogo} />
        <Text style={styles.titleStyle}>Qent</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>Welcome Back</Text>
        <Text style={styles.textStyle}>Ready to hit the road.</Text>
      </View>
      <View style={styles.inputContainer}>
        <InputComponent
          onChangeText={e => console.log(e)}
          placeholder={'Email/Phone Number'}
        />

        <InputComponent
          secureTextEntry={true}
          onChangeText={e => console.log(e)}
          placeholder={'Password'}
        />
      </View>
      <View style={[styles.colG2]}>
        <View style={styles.flexRow}>
          <CheckBoxComponent
            onPress={e => console.log('item', e)}
            isChecked={false}
          />
          <Text style={styles.textRemember}>Remember Me</Text>
        </View>
        <Text style={styles.textRemember}>Forgot Password</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button text="Login" textStyles={styles.buttonText} />
        <Button
          onPress={() => navigate('SignUpScreen')}
          text="Sign Up"
          textStyles={styles.outlineButtonSignUpText}
          buttonStyles={styles.outlineButton}
        />
      </View>
      <View style={styles.borderContainer}>
        <View style={styles.orBorder} />
        <Text style={styles.orText}>Or</Text>
        <View style={styles.orBorder} />
      </View>
      <View style={[styles.buttonContainer, styles.mt14]}>
        <Button
          text="Apple Pay"
          textStyles={styles.outlineButtonText}
          buttonStyles={styles.iconButtonStyle}
          component={<MaterialIcons name="apple" size={scale(26)} />}
        />
        <Button
          text="Google Pay"
          buttonStyles={styles.iconButtonStyle}
          textStyles={styles.outlineButtonText}
          component={<AntDesign name="google" size={scale(20)} />}
        />
      </View>
      <View style={styles.haveAccountContainer}>
        <Text style={styles.dontHaveText}>
          Don't have an account ? {'\t'}
          <Text>Sign Up</Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default SignInScreen;

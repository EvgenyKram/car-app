import { View, Text } from 'react-native'
import React from 'react'
import { createstyles } from './signup.styles'
import { ScrollView } from 'react-native-gesture-handler';
import { Image } from 'react-native';
import assets from '../../assets';

const SignUpScreen = () => {
    const styles = createstyles();
    const {logo_black} = assets;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.flexRow}>
              <Image source={logo_black} style={styles.carLogo} />
              <Text style={styles.titleStyle}>Qent</Text>
            </View>

            <View style={styles.textContainer}>
                    <Text style={[styles.textStyle, styles.textCenter]}>Sign Up </Text>
                    
                  </View>
    </ScrollView>
  )
}

export default SignUpScreen
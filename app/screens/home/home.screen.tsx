import React from 'react';
import {FlatList, Image, Pressable, Text, View} from 'react-native';
import assets from '../../assets';
import {createStyles} from './home.styles';
import Octicons from 'react-native-vector-icons/Octicons';
import {scale} from '../../theme/scale';
import {colors} from '../../theme/colors';
import InputComponent from '../../components/input/component';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CarComponent from '../../components/car/component';

const HomeScreen = () => {
  const styles = createStyles();
  const {logo_black, person, tesla} = assets;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.flexRow}>
          <Image source={logo_black} style={styles.carLogo} />
          <Text style={styles.titleStyle}>Qent</Text>
        </View>
        <View style={styles.flexRow}>
          <Pressable style={styles.borderRound}>
            <Octicons name="bell" size={scale(20)} color={colors.bell} />
          </Pressable>
          <Pressable>
            <Image source={person} style={styles.person} />
          </Pressable>
        </View>
      </View>
      <View style={styles.main}>
        <View style={[styles.flexRow, styles.p18]}>
          <InputComponent
            onChangeText={e => console.log(e)}
            leftAction={
              <MaterialIcons
                color={colors.gray}
                name="search"
                size={scale(22)}
              />
            }
            containerStyle={styles.inputContainer}
            placeholder="Search your dream car....."
          />
          <Pressable style={[styles.borderRound, styles.wh]}>
            <MaterialCommunityIcons
              name="filter-outline"
              size={scale(26)}
              color={colors.gray}
            />
          </Pressable>
        </View>
        <View style={[styles.showCase, styles.p18]}>
          <Text style={styles.text}>Brands</Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={[1, 2, 3, 4, 5]}
            renderItem={({item}) => (
              <Pressable style={styles.brandContainer}>
                <View style={styles.brand}>
                  <Image
                    resizeMode="contain"
                    source={tesla}
                    style={styles.brandImage}
                  />
                </View>
                <Text style={styles.brandText}>Tesla</Text>
              </Pressable>
            )}
          />
        </View>
        <View style={[styles.showCaseCars, styles.p18]}>
          <View style={styles.viewContainer}>
            <Text style={styles.text}>Best Cars</Text>
            <Text style={styles.viewAll}>View All</Text>
          </View>
          <View style={styles.flexRow}>
            <CarComponent />
            <CarComponent />
          </View>
          <View style={styles.flexRow}>
            <CarComponent />
            <CarComponent />
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

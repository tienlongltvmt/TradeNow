import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';

import IconProvider from '../../components/IconProvider';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ViewComponent from '../../components/ViewComponent';
export default function MoreActivity(props) {
  return (
    <View style={styles.container}>
      <View style={styles.viewHeader}>
        <View style={styles.iconheader}>
          <IconProvider name={'settings-outline'} size={24} color={'white'} />
        </View>
      </View>
      <Text style={styles.txtTitle}> More</Text>
      <ScrollView style={styles.viewBody}>
        {/* View Menu Book  */}
        <View style={styles.viewChild}>
          <View style={styles.viewIconMenu}>
            <ViewComponent
              colors={['#FFAE4E', '#FF7676', '#FF7676']}
              style={styles.iconMenu}>
              <Icon name={'book'} size={28} color={'#EFE6C4'} />
            </ViewComponent>
          </View>
          <View style={styles.viewIcon}>
            <Text style={styles.txtMenu}>Sách</Text>
            <View style={styles.viewIconNext}>
              <IconProvider name={'chevron-right'} size={20} />
            </View>
          </View>
        </View>
        {/*  */}
        {/* View Menu  */}
        <View style={styles.viewChild}>
          <View style={styles.viewIconMenu}>
            <ViewComponent
              colors={['#4EFFF8', '#76BAFF', '#76BAFF']}
              style={styles.iconMenu}>
              <Icon name={'tshirt'} size={28} color={'#FFFFFF'} />
            </ViewComponent>
          </View>
          <View style={styles.viewIcon}>
            <Text style={styles.txtMenu}>Thời trang</Text>
            <View style={styles.viewIconNext}>
              <IconProvider name={'chevron-right'} size={20} />
            </View>
          </View>
        </View>
        {/*  */}
        {/* View Menu Giải trí */}
        <View style={styles.viewChild}>
          <View style={styles.viewIconMenu}>
            <ViewComponent
              colors={['#9D9E9F', '#505862', '#505862']}
              style={styles.iconMenu}>
              <Icon name={'gamepad'} size={28} color={'#FFFFFF'} />
            </ViewComponent>
          </View>
          <View style={styles.viewIcon}>
            <Text style={styles.txtMenu}>Giải trí</Text>
            <View style={styles.viewIconNext}>
              <IconProvider name={'chevron-right'} size={20} />
            </View>
          </View>
        </View>
        {/*  */}
        {/* View Menu Gia dụng  */}
        <View style={styles.viewChild}>
          <View style={styles.viewIconMenu}>
            <ViewComponent
              colors={['#B4FF4E', '#2FC145', '#2FC145']}
              style={styles.iconMenu}>
              <Icon name={'plug'} size={28} color={'#FFFFFF'} />
            </ViewComponent>
          </View>
          <View style={styles.viewIcon}>
            <Text style={styles.txtMenu}>Gia dụng</Text>
            <View style={styles.viewIconNext}>
              <IconProvider name={'chevron-right'} size={20} />
            </View>
          </View>
        </View>
        {/*  */}
        {/* View Menu Xe cộ */}
        <View style={styles.viewChild}>
          <View style={styles.viewIconMenu}>
            <ViewComponent
              colors={['#9D9E9F', '#505862', '#505862']}
              style={styles.iconMenu}>
              <Icon name={'motorcycle'} size={28} color={'#EFE6C4'} />
            </ViewComponent>
          </View>
          <View style={styles.viewIcon}>
            <Text style={styles.txtMenu}>Xe cộ</Text>
            <View style={styles.viewIconNext}>
              <IconProvider name={'chevron-right'} size={20} />
            </View>
          </View>
        </View>
        {/*  */}
        {/* View Menu Nội thất */}
        <View style={styles.viewChild}>
          <View style={styles.viewIconMenu}>
            <ViewComponent
              colors={['#FFF84E', '#E6B15C', '#E6B15C']}
              style={styles.iconMenu}>
              <Icon name={'couch'} size={28} color={'#EFE6C4'} />
            </ViewComponent>
          </View>
          <View style={styles.viewIcon}>
            <Text style={styles.txtMenu}>Nội thất</Text>
            <View style={styles.viewIconNext}>
              <IconProvider name={'chevron-right'} size={20} />
            </View>
          </View>
        </View>
        {/*  */}
        {/* View Menu Điện Tử  */}
        <View style={styles.viewChild}>
          <View style={styles.viewIconMenu}>
            <ViewComponent
              colors={['#D5A3FF', '#77A5F8', '#77A5F8']}
              style={styles.iconMenu}>
              <Icon name={'tv'} size={28} color={'#FFFFFF'} />
            </ViewComponent>
          </View>
          <View style={styles.viewIcon}>
            <Text style={styles.txtMenu}>Điện tử</Text>
            <View style={styles.viewIconNext}>
              <IconProvider name={'chevron-right'} size={20} />
            </View>
          </View>
        </View>
        {/*  */}
        {/* View Menu other */}
        <View style={styles.viewChild}>
          <View style={styles.viewIconMenu}>
            <ViewComponent
              colors={['#9D9E9F', '#505862', '#505862']}
              style={styles.iconMenu}>
              <Icon name={'stream'} size={28} color={'#EFE6C4'} />
            </ViewComponent>
          </View>
          <View style={styles.viewIcon}>
            <Text style={styles.txtMenu}>Khác</Text>
            <View style={styles.viewIconNext}>
              <IconProvider name={'chevron-right'} size={20} />
            </View>
          </View>
        </View>
        {/*  */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECECEC',
  },
  viewHeader: {
    height: 50,
    width: '100%',
  },
  iconheader: {
    backgroundColor: '#FFAF52',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    alignSelf: 'flex-end',
    marginRight: 20,
    marginTop: 10,
  },
  txtTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  viewIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    width: '70%',
    alignItems: 'center',
    borderRadius: 12,
  },
  viewChild: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 60,
    marginHorizontal: 30,
    marginTop: 20,
  },
  viewIconMenu: {
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconMenu: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtMenu: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  viewIconNext: {
    backgroundColor: 'gray',
    marginRight: 10,
    borderRadius: 20,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

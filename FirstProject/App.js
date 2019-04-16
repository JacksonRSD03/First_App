import React, { Component } from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';

import Home  from './src/Home';
import Pesquisa from './src/Pesquisa';
import Foto from './src/Foto';
import Notification  from './src/Notification';
import Profile from './src/Profile'


const Navegador = createBottomTabNavigator({
  Home:{
    screen:Home
  },
  Pesquisa:{
    screen:Pesquisa
  },
  Foto:{
    screen:Foto
  },
  Notication:{
    screen:Notification
  },
  Profile:{
    screen:Profile
  }
}, {
   tabBarPosition:'bottom',
   tabBarOptions:{
     showIcon:true
   }
});
const container = createAppContainer(Navegador);
export default container;

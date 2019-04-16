import React, { Component } from 'react';
import {View, Image, StyleSheet} from 'react-native';
import { createStackNavigator }from 'react-navigation';

import Feed from './Feed';
import Public from './Public';

const Navegador= createStackNavigator({
    Feed:{
        screen:Feed
    },
    Public:{
        screen:Public

    }

});

export default Navegador;
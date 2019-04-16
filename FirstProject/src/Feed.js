import React, { Component } from 'react';
import {View, Image, StyleSheet,Text} from 'react-native';
import { Appbar } from 'react-native-paper';
import { FlatList } from 'react-native-gesture-handler';

export default class Feed extends Component{
   

    static navigationOptions = {
    
       
       tabBarIcon:({focused,tintColor})=>{
           if(focused)
           {
               return(
            <Image source={require('../images/home_select.png')} style={styles.icon}/>
               );

           }
           else
           {
           return(
               
             <Image source={require('../images/home.png')} style={styles.icon}/>
            );
           }
       }
    };

    render(){
        return(
          <View style={styles.container}>
           <Appbar style={styles.bottom}>
           <Appbar.Action icon="archive" onPress={() => console.log('Pressed archive')} />
           <Appbar.Action icon="mail" onPress={() => console.log('Pressed mail')} />
           <Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
          <Appbar.Action icon="delete" onPress={() => console.log('Pressed delete')} />
        </Appbar>
          </View>
        );
    }
}



const styles= StyleSheet.create({
    icon:{
        width:40,
        height:40
    },
    container:{
        flex: 1,
        marginTop: 20,
        backgroundColor: '#BBB'
    },
     bottom: {
    position: 'relative',
    left: 0,
    right: 0,
    bottom: 0,
  }
});
import React, { Component } from 'react';
import {View, Image, StyleSheet} from 'react-native';

export default class Sobre extends Component{

    static navigationOptions={
       tabBarLabel:'Sobre',
       tabBarIcon:({focused, tintColor})=>{
           if(focused)
           {
            
           return(
            <Image source={require('../assets/images/Notify_Select.png')} style={styles.icon}/>
          );
           }
           else
           {

        
           return(
             <Image source={require('../assets/images/Notify.png')} style={styles.icon}/>
           );
           }
       }
    };

    render(){
        return(
          <View>

          </View>
        );
    }
}
const styles = StyleSheet.create({
    icon:{
        width:40,
        height:40
    }
});
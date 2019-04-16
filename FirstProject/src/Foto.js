import React, { Component } from 'react';
import {View, Image, StyleSheet} from 'react-native';

export default class Foto extends Component{

    static navigationOptions={
       tabBarIcon:({focused, tintColor})=>{
           if(focused)
           {
            return(
                <Image source={require('../assets/images/Foto.png')} style={styles.icon}/>
              );
           }
           else
           {

        
           return(
             <Image source={require('../assets/images/Foto.png')} style={styles.icon}/>
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
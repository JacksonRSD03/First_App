import React, { Component } from 'react';
import {View, Image, StyleSheet} from 'react-native';

export default class Pesquisa extends Component{

    static navigationOptions={
       
       tabBarIcon:({focused, tintColor})=>{
           if(focused)
           {
            return(
                <Image source={require('../assets/images/Pesquisa_Select.png')} style={styles.icon}/>
              );
              
           }
           else
           {

           return(
             <Image source={require('../assets/images/Pesquisa.png')} style={styles.icon}/>
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
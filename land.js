import React, { Component } from 'react';
import {  View, Text,TextInput, Dimensions } from 'react-native'
import {} from './printName'
import {person, BMI,phanSo, soPhuc,chia} from './person'
const hei= Dimensions.get('window').height;

let info = {ten: 'pa', tuoi : 19, can : 17, cao: 1.52 }
export default class land extends Component {
  constructor(props){
    super();
    this.state = { name : 'pa' }
  }
  
  
  render() {
    let person1 = new person('pa',19)
    person1.setName('pa')
    let BMI1 = new BMI(170,60)
    let phanSo1= new phanSo(4,5)
    let soPhuc1= new soPhuc(3,2);
    let soPhuc2 = new soPhuc(5,4);
   
    return (
      <View >
       <TextInput style = {{
         height: 40,
          backgroundColor:'gray',
          fontSize : 16,
          padding:15,
          
        }}
         onChangeText={(text)=> this.setState({name:text}) }
          placeholder = {'Name'}
          maxLength={10}
          placeholderTextColor= {'#fff'}
          
          
        />
         <Text>{this.state.name}</Text>
         <Text>{phanSo1.getTong()} </Text>
         <Text>{phanSo1.getphanSo()}</Text>
         <Text>{soPhuc1.getsoPhuc()}</Text>
         <Text>{soPhuc2.getsoPhuc()}</Text>
        
      
      </View>    
      
    );
  }
}



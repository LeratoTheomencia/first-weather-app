import React, { useState, useEffect} from 'react';
import {View, StyleSheet, Text, Dimensions,  ImageBackground, TextInput, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import DateTime from './components/DateTime';
import *as Location from 'expo-location';




const Dev_Height = Dimensions.get('window').height
const Dev_Width = Dimensions.get('window').width

const API_KEY = '7ef57b6eb977528466f27e8f1750be97';
const img = require('./assets/snack-icon.png')

import Icon from 'react-native-vector-icons/AntDesign';

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      city:"Kimberley",
      data:[],
      icon:"",
      city_display:"",
      desc:"",
      main:"",
      humidity:"",
      pressure:"",
      visibality:"",
    }
    this.fetch_weather()
  }

  fetch_weather=()=>{
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+this.state.city+"&appid=7ef57b6eb977528466f27e8f1750be97")
    .then((responce)=>responce.json())
    .then((json=>{
      this.setState({data :json})
      this.setState({temp :(json.main.temp-273.15).toFixed(2)+"C"})
      this.setState({desc : json.weather[0].description})
      this.setState({city_display :json.name})
      this.setState({icon :json.weather[0].icon})
      this.setState({main :json.weather[0].main})
      this.setState({humidity :json.main.humidity+"%"})
      this.setState({pressure :json.main.pressure+"hpa"})
      this.setState({visibality :(json.visibality/1000).toFixed(2)+"km"})
  })).catch((error)=>console.error(error))

  }

  render(){
    return(
      <SafeAreaView style={styles.container}>
        <ImageBackground source={{uri:"https://th.bing.com/th/id/R.9bcd042630b9e4031ad756da4edeebdd?rik=hPCNks8LIfiJag&pid=ImgRaw&r=01"}} 
          style={styles.Image_Background_Style}
        >
      

        <View style={styles.Search_Box_View}>
          <TextInput 
          placeholder="Search" 
          placeholderTextColor="#fff" 
          style={styles.Search_Box} 
          onChangeText={(text)=>this.setState({city:text})} />

          <TouchableOpacity style={styles.button_touch} onPress={this.fetch_weather}>
            <Icon name="search1" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        
        <View>
      <DateTime /> 
     
    </View> 
        
        <View style={styles.Weather_Box_Main}>
          <View style={styles.Weather_Holder_View}>
          <Image source={{uri:'http://openweathermap.org/img/wn/icon.png'}} />
    
          <View>
            <Text style={styles.temperature_text}>{this.state.temp}</Text>
            <Text style={styles.city_text}>{this.state.city_display}</Text>

          </View>
          
          </View>
        </View>
        
        <View style={styles.Info_Box_View}>
          <View style={styles.Info_Holder_View}>
            <Text style={styles.Main_Weather_Text}>{this.state.main}</Text>
            <Text style={styles.description_text}>{this.state.desc}</Text>
            <Text style={styles.humidity_text}>{this.state.humidity}</Text>
            <Text style={styles.other_text}>{this.state.pressure}</Text>
            <Text style={styles.other_text}>{this.state.visibility}</Text>
          </View>
        </View>
        

    

        </ImageBackground>
      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
 container:{
   height:Dev_Height,
   width:Dev_Width,
 },
 Image_Background_Style:{
   height:"100%",
   width:"100%"
 },
 Search_Box_View:{
   height:"20%",
   width:"100%",
   justifyContent:"center",
   alignItems:"center",
   flexDirection: "row",
 },
 Search_Box:{
   height:"35%",
   width:"80%",
   borderColor:"#fff",
   borderWidth:1,
   borderRadius:15,
   color:"#fff",
   paddingHorizontal:15,
 },
 button_touch:{
   marginLeft: "5%",
   height: "35%",
   width: "8%",
   justifyContent: "center",
   alignItems:"center",
 },
 Weather_Box_Main:{
   height:"30%",
   width:"100%",
   justifyContent:"center",
   alignItems:"center",
   flexDirection:"row",
 },
 Weather_Holder_View:{
   height:"80%",
   width:"90%",
   backgroundColor:"rgba(255, 255, 255, 0.3)",
   borderRadius:15,
   alignItems:"center",
   flexDirection:"row",
 },
 temperature_text: {
   fontSize: 25,
   color:"#fff",
   marginLeft:"8%",
 },
 city_text:{
   fontSize: 20,
   color: "#fff",
   marginLeft: "5%",
   marginTop: "3%",
 },
 Info_Holder_View: {
    height: "80%",
    width: "90%",
    backgroundColor: "",
    borderRadius: 15,
 },
 Info_Box_View: {
   height: "45%",
   width: "100%",
   justifyContent: "center",
   alignItems: "center",   
 },
 Main_Weather_Text:{
   fontSize: 28,
   color: "#fff",
   marginLeft: "8%",
   marginTop: "8%",
 },
 description_text: {
   fontSize: 20,
   color: "#fff",
   marginLeft: "8%",
   marginTop: "5%",
 },
 humidity_text: {
   fontSize: 18,
   color: "#fff",
   marginLeft: "8%",
   marginTop: "8%",
 },
 other_text: {
   fontSize: 18,
   color: "#fff",
   marginLeft: "8%",
   marginTop: "2%",
 },
});

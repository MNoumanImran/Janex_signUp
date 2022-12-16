import * as React from 'react';
import { Text, View, StyleSheet, TextInput ,Image} from 'react-native';
import Constants from 'expo-constants';
// You can import from local files
import { AppLoading, Font } from 'expo'
import {
  useFonts,
   Montserrat_400Regular,
  Montserrat_600SemiBold,
} from '@expo-google-fonts/montserrat';
import colors from '../assets/colors/colors';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';

// or any pure javascript modules available in npm
export default class Home extends React.Component {


  constructor(props) {
    super(props);
    this.state={ };
  }

  componentDidMount() {
    
  }

   _pickDocument = async () => {

    let result = await DocumentPicker.getDocumentAsync({});
    
    alert(result.uri);
    
    console.log(result);
    
    }

  TextView(title,hint,topMargin){
    return(
      <View style={{ 
        height:64,
        left:38 ,
        marginTop:topMargin,
      }}>
      <Text
      onClick={()=>{
        
      }}
        style={{
          position: 'absolute',
          height:20,
          top: 0,
          left: 34,
          zIndex: 100,
          fontSize:16,
          paddingHorizontal: 5,
          alignItem:'center',
          fontFamily: 'Montserrat_400Regular',
          backgroundColor:colors.background,
          color:colors.text2
        }}>
        {title}
      </Text>
      <View
        style={{
          width:314,
         height:64,
        marginTop:10,
          borderWidth: 1,
          borderColor: colors.white,
          flexDirection: 'row',
          borderRadius: 10,
          border: '1px solid #FFFFFF'
        }}>
       
        <TextInput 
        style={{
          left:34,
         fontWeight:'400',
       fontSize:16}}
        placeholder={hint}
        placeholderTextColor={colors.text2}
        color={colors.text2}
         />
      </View>
    </View>
    )
  }

  render(){
  return (
    <View style={styles.container}>
   
   <Image
          style={{
            width:144,
          height:28,
        left:38,
      top:22}}
          source={require('../assets/imgs/image3.png')}        />
             <Text
         style={{
          height: 33,
          left: 38,
          top: 40,          
          fontSize:27,
          
          fontFamily: 'Montserrat_400Regular',
          color:colors.white,

         }}>
         Create an account.
       </Text>

       <Text
         style={{
          height: 33,
          left: 38,
          top: 47,          
          fontSize:11,
          fontFamily: 'Montserrat_400Regular',
          color:colors.text2,

         }}>
         Please fill in the details below to create an account
       </Text>

       <View>
        {this.TextView("First Name","Ex. Mohammad",108)}
        {this.TextView("Last name","Ex. Nouman",30)}
        {this.TextView("Email","Ex. nauman@gmail.com",39)}
        {this.TextView("Password","Enter your password",30)}
        {this.TextView("Upload files","Upload your files",30)}

        </View>

    </View>

   
  )}


}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor:colors.background
  },
 
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image:{
    position: 'absolute',
width: 144,
height: 28,
left: 38,
top: 22,
  }
});
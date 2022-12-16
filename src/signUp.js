import * as React from 'react';
import { Text, View, StyleSheet, TextInput ,Image,Button,
  TouchableOpacity,Alert, Modal,Pressable} from 'react-native';

import Constants from 'expo-constants';
// You can import from local files
import colors from '../assets/colors/colors';
import * as DocumentPicker from 'expo-document-picker';

// or any pure javascript modules available in npm
export default class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state={ 
      modalVisible: false,
      fileArray : [],

    };
  }

  componentDidMount() { }

  //Picking Document
   _pickDocument = async () => {

    let result = await DocumentPicker.getDocumentAsync({
        type: "*/*",
        multiple: true,
        copyToCacheDirectory: true
    });
    // Adding files 
    this.setState({
      fileArray: [...this.state.fileArray, result]
    });
  }
    // set Model State
    setModalVisible = (visible) => {
      this.setState({ modalVisible: visible });
    }

    // Render Model
    ListOfFiles=()=>{
      const { modalVisible } = this.state;
      return(
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert("Modal has been closed.");
          this.setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          
          <View style={styles.modalView}>
        
            <View >
            <Text style={styles.modalText}>Selected Documents!</Text>
            </View>
            {this.fileList()}
          
            <View style={{flexDirection: 'row',}}>
            <Button
              title="Select Documents"
              color={colors.background}
              onPress={this._pickDocument}
            />
            </View>
            
          </View>
        </View>
      </Modal>
      )
    }

    //Removing Item
    removeItem = (name) => {
      const newList = this.state.fileArray.filter((item) => item.name !== name);
      this.setState({fileArray:newList})
    }

    //Rendering Items
    fileList() {
      return this.state.fileArray.map((data,index) => {
        return (
          <View style={{flexDirection: 'row',borderColor:colors.background,borderRadius:2,borderWidth:1,margin:10}}>
            <View style={styles.fileListItem}>
            <Text                 
                style={styles.textInput}
                >{index+1}. {data.name}</Text>
                </View>
                <View style={{flex:0.2,margin:10}}>
                <Button
                    onPress={()=>this.removeItem(data.name)}
                    title="X"
                    color={colors.background}
                    accessibilityLabel="Learn more about this purple button"
                  />          
              </View>
            </View>
        )
      })
  
  }

  render(){
  return (
  <View style={styles.container}>
   {this.ListOfFiles()}
      <Image
          style={styles.image}
          source={require('../assets/imgs/image3.png')}        />
      <Text
         style={styles.headerText}>
         Create an account.
      </Text>
      <Text
         style={styles.headerText2}>
         Please fill in the details below to create an account
      </Text>
    <View>

      {/* First Name */}
      <View style={{  height:64,left:38 , marginTop:108, }}>
          <Text
            style={styles.title}>
            {"First Name"}
          </Text>
              <View
                style={styles.box}>
                <TextInput 
                style={styles.textInput}
                placeholder={"Ex. Mohammad"}
                placeholderTextColor={colors.text2}
                color={colors.text2}
                />
              </View>
      </View>
    
     {/* "Last name" */}
      <View style={{  height:64,left:38 , marginTop:30, }}>
          <Text
            style={styles.title}>
            {"Last name"}
          </Text>
              <View
                style={styles.box}>
                <TextInput 
                style={styles.textInput}
                placeholder={"Ex. Nouman"}
                placeholderTextColor={colors.text2}
                color={colors.text2}
                />
              </View>
      </View>
    
     {/* Email */}
      <View style={{  height:64,left:38 , marginTop:30, }}>
          <Text
            style={styles.title}>
            {"Email"}
          </Text>
              <View
                style={styles.box}>
                <TextInput 
                style={styles.textInput}
                placeholder={"Ex. nauman@gmail.com"}
                placeholderTextColor={colors.text2}
                color={colors.text2}
                />
              </View>
        </View>
    
     {/* Password */}
        <View style={{  height:64,left:38 , marginTop:30, }}>
          <Text
            style={styles.title}>
            {"Password"}
          </Text>
              <View
                style={styles.box}>
                <TextInput 
                style={styles.textInput}
                placeholder={"Enter your password"}
                placeholderTextColor={colors.text2}
                color={colors.text2}
                />
              </View>
        </View>
    
     {/* First Name */}
     <TouchableOpacity
              style={styles.button}
              onPress={() => this.setModalVisible(true)}
              > 
        <View style={{  height:64,left:38 , marginTop:30, }}>
          <Text
            style={styles.title}>
            {"Upload files"}
          </Text>
         
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.setModalVisible(true)}
              > 
              <View
                style={styles.box}>
            
              <TextInput 
                style={styles.textInput}
                placeholder={"Upload your files / click here"}
                placeholderTextColor={colors.text2}
                color={colors.text2}
                editable={false}
                /> 
              </View>
            </TouchableOpacity>  
        </View>
      </TouchableOpacity>
      
      { 
            this.state.fileArray.map((item)=>{
            <Text style={{color:colors.white}}>item</Text>
          })
  }
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
    width:144,
    height:28,
    left:38,
    top:22
  },
  headerText:{
    height: 33,
    left: 38,
    top: 40,          
    fontSize:27,
    fontFamily: 'Montserrat_400Regular',
    color:colors.white,
   },
   
   headerText2:{
      height: 33,
      left: 38,
      top: 47,          
      fontSize:11,
      fontFamily: 'Montserrat_400Regular',
      color:colors.text2,
     },
  title:{
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
  },
  box:{
    width:314,
    height:64,
   marginTop:10,
     borderWidth: 1,
     borderColor: colors.white,
     flexDirection: 'row',
     borderRadius: 10,
     border: '1px solid #FFFFFF'
  },
  textInput:{
    left:34,
    fontWeight:'400',
  fontSize:16
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    height:100,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },

  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: colors.background,
    color:colors.white,
    padding:5

  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  fileListItem:{
    flex:0.8,margin:10,borderColor:'red',margin:15
  }
});
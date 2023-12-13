import React, {useState} from 'react';
import { ImageBackground, StyleSheet, TextInput, Text, View,  Pressable, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//           




export default function Niche ({route, navigation}) {

    const [text, setText] = useState('');
    const [all, setAll] = useState([]);

    const { username } = route.params;

    const [error, setError] = useState('')
    
    function textHandler(text){
        setText(text)
    }

    function setHandler(){
        setAll(currentSet => [...currentSet, text]);
        setText('');
    }

    return (
        <View style={styles.container}>
           <Text style={styles.upperText}>Hi, {username}</Text>
              <View style={styles.lowLayer}>
                <View style={styles.lowGroup}>
                <TextInput
                    style={styles.input}
                    placeholder="Type your niche here!"
                    onChangeText={textHandler}
                    value={text}
                />
                            <Text style={{ color: "red" , textAlign: "center", }}>{error}</Text>

                <Pressable style={styles.button}
                onPress={() => {
                    if(text === ""){
                        setError("Please enter text")
                    }
                    else { 
                        setError("")
                       setHandler()
                } 
                }}> 
                   <Text style={styles.text}>Submit</Text>
                </Pressable>
                <Text  style={styles.underText}>All Niches</Text>
                <View style={styles.boxIn}>
                    <ScrollView>
                    {all.map((item, index) => (
                        <Text key={index} style={styles.inputText}>{item}</Text>
                    ))}</ScrollView>
                </View>
                </View>
            </View>
        </View>)}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "orange"
    },
    boxIn: {
        backgroundColor: "lightgrey",
        height: "57%",
        alignSelf: "center",
        borderRadius: 20,
        width: "90%",
      
    },
    inputText: {
        textAlign: "center",
        fontSize: 20,
        marginTop: 15
    },
    input: {
        borderWidth:  2, 
        borderColor: "#f7f7f7",
        borderRadius: 20,
        width: 380,
        height: 55,
        paddingHorizontal: 10, 
        alignSelf: 'center',
        backgroundColor: 'white'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '2%',
        marginBottom: '10.6%',
        marginLeft:20,
        width: '90%',
        padding: 18,
        borderRadius: 30,
        elevation: 1,
        backgroundColor: 'black',
      },
      text: {
        fontSize: 20,
        fontWeight: '700',
        letterSpacing: 0.25,
        color: 'white',
      },
      label: {
        fontSize: 15,
        marginLeft: 35,
        marginTop: 17,
        marginBottom: 6,
        fontWeight: '500',
        letterSpacing: 0.25,
      },
      upperText: {
        fontSize: 45,
        textAlign: "center",

        marginTop: 90,
        marginBottom: 50,
       fontWeight: '800',
        letterSpacing: 0.25,
      },
      underText: {
        marginTop: '0%',
        marginBottom: '3%',
        textAlign: 'center',
        opacity: '1',
        fontWeight: "500",
        fontSize: 25,
      },
      mutedText: {
        marginBottom: '7%',
        textAlign:'center',
        opacity: '.5',
        lineHeight: 25,
        fontSize: 20,
        fontWeight: '400',
      },
      homeLogo: {
        marginTop: '12%',
        marginBottom: '3%',
        width: 220,
        alignSelf: 'center',
        height: 120,
      },
     
      lowLayer: {
        height: "100%", 
        backgroundColor: "white",
        borderRadius: 40
      },
    lowGroup: {
        marginTop: 65
    }
})  
import React, {useState} from 'react';
import { ImageBackground, StyleSheet, TextInput, Text, View,  Pressable, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//           



export default function Login ({navigation}) {
    const [username, setUsername] = useState('')
    const [error, setError] = useState('')

    return (
        <View style={styles.container}>
           <Text style={styles.upperText}>Login</Text>
              <View style={styles.lowLayer}><View style={styles.lowGroup}>
            <Text style={styles.label}>Username</Text>
                <TextInput 
                    style={styles.input}
                    maxLength={10}
                    onChangeText={newName => setUsername(newName)}
                    defaultValue={username}
                    placeholder="Username" />
                <Text style={{ color: "red" , marginLeft: 35, }}>{error}</Text>
            <Text style={styles.label}>Password</Text>
                <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    placeholder="Password"
                    />
            <Pressable style={styles.button} 
            onPress={() => {
                if(username === ""){
                    setError("Please enter username")
                }
                else { 
                    navigation.navigate('Niche', {
                    username: username,
                 
                });
            }
               
              }}
                    colors={['#fcb64e', '#ffa31c', '#c98116']} >
                        <Text style={styles.text}>Continue</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Register')}>

                    <Text style={styles.underText}>Dont have an account? Sign up </Text>
                </Pressable>
                </View></View>

        </View>)}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "orange"
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
        marginTop: '35%',
        marginLeft:20,
        width: '90%',
        padding: 18,
        borderRadius: 30,
        elevation: 1,
        backgroundColor: 'orange',
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
        marginTop: '4%',
        textAlign: 'center',
        opacity: '1',
        fontWeight: "500",
        fontSize: 15,
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
import { ImageBackground, StyleSheet, Text, View,  Pressable, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// <Text style={styles.upperText}>Welcome {'\n'} to <Text style={styles.colText}>niche</Text></Text>


export default function Home ({navigation}) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/home.png')} resizeMode="cover" style={styles.image}>
               <Image style={styles.homeLogo} source={require('../assets/home-logo.png')}/>
                <Text style={styles.mutedText}> is simply dummy text of the printing and type{'\n'}setting industry. Lorem Ipsum</Text>
                <Pressable style={styles.button}onPress={() => navigation.navigate('Register')}>
                   
                        <Text style={styles.text}>Join Now</Text>
                    
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.underText}>Already a member? Log in </Text>
                </Pressable>
            </ImageBackground>
        </View>
    )}


    
    const styles = StyleSheet.create({
        container: {
          flex: 1,
        },
        image: {
          flex: 1,
          justifyContent: 'center',
        },
        upperText: {
          color: 'white',
          fontSize: 75,
          marginTop: '80%',
          lineHeight: 80 * 0.75,
          paddingTop: 80 - (80* 0.75),
          fontWeight: '600',
          textAlign: 'start',
          
        },
        colText: {
            color: 'orange',
            fontWeight: '900',
            fontSize: 65,
          },
          mutedText: {
            color: 'white', 
          textAlign:'center',
            opacity: '.7',
          lineHeight: 27,
          fontSize: 15,fontWeight: '500',
          },
          button: {
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '84%',
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

          underText: {
            color: 'white', 
                marginTop: '6%',
           textAlign: 'center',
            opacity: '1',
            fontWeight: "500",
            fontSize: 15,
          },
          homeLogo: {
            marginTop: '5%',
            width: 300,
            alignSelf: 'center',
            height: 190,
          }
      });
import React, { useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, ViewComponent } from "react-native";


function LoginAdm(): JSX.Element {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function login(){
        const dados = {
            email:email,
            password: password,
        }

        console.log(dados);
    }
    
    
    return (

        <View style={styles.container}>
            <Image
            style={styles.logo}
            resizeMode="contain" 
            source={require('../assets/images/CAPIVARA.png')}/>

            <View style={styles.card} >
                <Text style={styles.title} > Login Administrador </Text>

                <TextInput 
                style={styles.input}
                placeholder="E-mail" 
                placeholderTextColor={"#141414"}
                onChangeText={(textEmail) => setEmail(textEmail)}
                />

                
                <TextInput 
                style={styles.input}
                placeholder="Senha" 
                placeholderTextColor={"#141414"}
                onChangeText={(textPassword) => setPassword(textPassword)}
                secureTextEntry
                />

                <TouchableOpacity style={styles.buttom}
                onPress={()=>{login()}}>
                    
                    <Text style={styles.buttonText}> Entrar </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.forgotPassword}> Esqueceu a senha?</Text>
                </TouchableOpacity>

                
                <TouchableOpacity>
                    <Text style={styles.forgotPassword}> Não possui conta? Cadastre-se!</Text>
                </TouchableOpacity>

            </View>
        </View>
 

    );

}

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2B59C3'
    },
    card: {
        backgroundColor: "#EEEEFF",
        width: 300,
        borderRadius: 10,
        padding: 20,
        elevation: 4,
        shadowColor: 'rgba(0,0,0,0.3)',
        shadowOffset: {width:0, height: 2},
        shadowOpacity: 0,
        shadowRadius: 2
    },

    logo: {
        width:120,
        height:120,
        marginBottom: 20,
        marginTop: -150,
    },

    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#141414',
        marginBottom:20,
        textAlign: 'center',
        fontFamily: 'Cochin'
        
    },
    
    input: {
        backgroundColor: '#FCF7F8',
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 23,
        borderWidth: 1,
        borderColor: '#141414'

    },

    buttom: {
        backgroundColor:'#8093F1',
        borderRadius: 23,
        height: 40
    },

    buttonText: {
        color: '#0C120C',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 40
    },
    forgotPassword: {
        color: '#F76900',
        textAlign: 'center',
        marginTop: 10
    }


});

export default LoginAdm;
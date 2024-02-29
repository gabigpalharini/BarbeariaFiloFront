import React, { useState } from "react";
import{Image, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View} from "react-native";
function CadastroCliente(): JSX.Element {

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    function login(){
        const dados ={
            email :email,
            password: password,

        }

        console.log(dados);
    }
    return(
        <View style={styles.container}>
            <Image style={styles.logo}
             resizeMode="contain"
            source={require('../assets/images/cliente.png')}/>
        
        <View style={styles.card}>
            <Text style={styles.title}>Cadastro Cliente</Text>

            <TextInput
            style={styles.input}
             placeholder="Nome"
            placeholderTextColor={"#000000"} 
            onChangeText={(textEmail)=> setEmail(textEmail)}
            />
            <TextInput
            style={styles.input}
             placeholder="Celular"
            placeholderTextColor={"#000000"} 
            onChangeText={(textEmail)=> setEmail(textEmail)}
            />
            <TextInput
            style={styles.input}
             placeholder="E-mail"
            placeholderTextColor={"#000000"} 
            onChangeText={(textEmail)=> setEmail(textEmail)}
            />
            <TextInput
            style={styles.input}
             placeholder="CPF"
            placeholderTextColor={"#000000"} 
            onChangeText={(textEmail)=> setEmail(textEmail)}
            />
            <TextInput
            style={styles.input}
             placeholder="Data de Nascimento"
            placeholderTextColor={"#000000"} 
            onChangeText={(textEmail)=> setEmail(textEmail)}
            />
            <TextInput
            style={styles.input}
             placeholder="Cidade"
            placeholderTextColor={"#000000"} 
            onChangeText={(textEmail)=> setEmail(textEmail)}
            />
            <TextInput
            style={styles.input}
             placeholder="Estado"
            placeholderTextColor={"#000000"} 
            onChangeText={(textEmail)=> setEmail(textEmail)}
            />
            <TextInput
            style={styles.input}
             placeholder="País"
            placeholderTextColor={"#000000"} 
            onChangeText={(textEmail)=> setEmail(textEmail)}
            />
            <TextInput
            style={styles.input}
             placeholder="Rua"
            placeholderTextColor={"#000000"} 
            onChangeText={(textEmail)=> setEmail(textEmail)}
            />
            <TextInput
            style={styles.input}
             placeholder="Numero"
            placeholderTextColor={"#000000"} 
            onChangeText={(textEmail)=> setEmail(textEmail)}
            />
            <TextInput
            style={styles.input}
             placeholder="Bairro"
            placeholderTextColor={"#000000"} 
            onChangeText={(textEmail)=> setEmail(textEmail)}
            />
            <TextInput
            style={styles.input}
             placeholder="CEP"
            placeholderTextColor={"#000000"} 
            onChangeText={(textEmail)=> setEmail(textEmail)}
            />
            <TextInput
            style={styles.input}
             placeholder="Complemento"
            placeholderTextColor={"#000000"} 
            onChangeText={(textEmail)=> setEmail(textEmail)}
            />
       
            <TextInput 
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor={"#000000"}
            onChangeText={(textPassword)=> setPassword(textPassword)}
            secureTextEntry
            />

            <TouchableOpacity style={styles.button}
                onPress={()=>{login()}}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
            </TouchableOpacity>


            <TouchableOpacity>
                <Text style={styles.forgotPassword}> Não possui conta? Cadastre-se!</Text>
                </TouchableOpacity>

        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#f7a399'
    },
    logo:{
        width:80,
        height:80,
        marginBottom:20,
        marginTop: -150
    },

    card: {
        backgroundColor: '#fbc3bc',
        width: 320,
        borderRadius: 20,
        padding: 20,
        elevation: 3,
        shadowColor: 'rgba(0,0,0,0,3)',
        shadowOffset: {width:0, height:2},
        shadowOpacity:0.8,
        shadowRadius: 2,
    },
    title:{
        fontSize: 25,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 20,
        textAlign: 'center',
    },
    input:{
        backgroundColor: '#ffe3e0',
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 19,
        borderRadius:8,
        borderWidth: 2,
        borderColor: '#fbc3bc'
    },
    button:{
        backgroundColor: '#f38375',
        height:40,
        borderRadius:8,
        borderColor: '#000000'

        
    },
    buttonText:{
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 40,
    },
    forgotPassword:{
        color: '#ffffff',
        textAlign: 'center',
        marginTop:10,
    }
})

export default CadastroCliente;
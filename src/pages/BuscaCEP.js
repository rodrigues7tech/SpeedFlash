import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput } from "react-native";

import Endereco from '../components/Endereco';



export default function BuscaCEP() {
  
    const [cep, setCep] = useState('');
    const [resultadoBusca, setResultadoBusca] = useState(null);

    const buscarCep = () => {
        let url = 'https://api.postmon.com.br/v1/cep/';
        fetch(url + cep)
        .then(response => response.json())
        .then(resp => {setResultadoBusca(resp)});
    }

    const exibirResultadoBusca = () =>{
        if(resultadoBusca != null){
            return(
                <Endereco 
                    logradouro={resultadoBusca.logradouro}
                    bairro={resultadoBusca.bairro}
                    cidade={resultadoBusca.cidade}
                />
            )
        }else{
            return <></>
        }
    }

    return (
      <View style={{flex: 1, backgroundColor: 'rgba(72,114,29,.9)',}}>
          <View style={styles.container}>
          <Image source={require('../img/logo.png')} style={styles.cover} />
          <View style={styles.inputContent}>
              <TextInput style={styles.input} placeholder="Digite seu CEP" onChangeText={texto => setCep(texto)} value={cep} />
              <TouchableOpacity style={styles.btnBusca} onPress={buscarCep}>
                  <Text style={styles.txtBtn}>Buscar</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.resultadoBusca}>
              {
                  exibirResultadoBusca()
              }
          </View>
      </View>
      </View>
    );
  }


  const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'rgba(72,114,29,.9)', //#6eaf2c
        alignItems: 'center',
        justifyContent: 'center',
    },
    cover:{
        width: 100,
        height: 100,
        marginTop: 20,
        marginBottom: 30,
        borderRadius: 10,
        // animation: 'animate__backInRight',
    },
    inputContent:{
        flexDirection: 'row',
        width: '70%',
        height: 40,
        justifyContent: 'center',
    },
    input:{
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
        backgroundColor: "#f1f1f1",
        padding: 10,
        borderWidth: 0,
    },
    btnBusca: {
        backgroundColor: '#6eaf2c',
        width: '30%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
    },
    txtBtn:{
        color: '#f1f1f1',
        fontFamily: 'Arial',
        fontSize: 17,
    },
    resultadoBusca:{
        marginTop: 30,
        fontFamily: 'Arial',
        fontSize: 20,
        color: '#f1f1f1',
        width: '70%',
    }
    });
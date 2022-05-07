import React from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";


export default function Home({navigation}) {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            
            <Text style={styles.txtBrand}>Muambeiro</Text>
            
            <Image source={require('../img/logo.png')} style={styles.cover} />
            
            <Text style={styles.txtTitle}>Rastreamento Correios, China Post, Aliexpress, Shopee, Gearbest nunca foi tão fácil e inteligente!</Text>
            
            
            <TouchableOpacity style={styles.btnBusca} onPress={() => navigation.navigate('BuscaCEP')}>
                <Text style={styles.txtBtn}>Busca por CEP</Text>
            </TouchableOpacity>
            
            
            <TouchableOpacity style={styles.btnBusca}>
                <Text style={styles.txtBtn}>Busca por Rastreio</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: 'rgba(72,114,29,.9)', //#6eaf2c
    alignItems: 'center',
    justifyContent: 'center',
},
cover:{
    width: 150,
    height: 150,
    marginTop: 10,
    marginBottom: 70,
    borderRadius: 10,
    // animation: 'animate__backInRight',
},
btnBusca: {
    backgroundColor: '#6eaf2c',
    marginTop: 15,
    borderRadius: 5,
    width: '70%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
},
txtTitle:{
    color: '#f1f1f1',
    fontSize: 25,
    fontFamily: 'Arial',
    marginBottom: 20,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
},
txtBtn:{
    color: '#f1f1f1',
    fontFamily: 'Arial',
    fontSize: 17,
},
txtBrand:{
    fontFamily: 'Arial',
    color: '#f1f1f1',
    fontSize: 50,
    width: '90%',
    textAlign: 'center',
}
});
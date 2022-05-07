import React from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";


export default function Endereco(props) {
    return (
        <View style={styles.container}>
            <View style={styles.containerResultado}>
                <View style={styles.content}>
                    <Text style={styles.label}>Logradouro: </Text>
                    <Text style={styles.text}>{props.logradouro}</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.label}>Bairro: </Text>
                    <Text style={styles.text}>{props.bairro}</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.label}>Cidade: </Text>
                    <Text style={styles.text}>{props.cidade}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
},
containerResultado:{
    
},
content:{
    flexDirection: 'row',
    padding: 5,
},
label:{

},
text:{
    color: 'rgba(72,114,29,.9)',
}
});
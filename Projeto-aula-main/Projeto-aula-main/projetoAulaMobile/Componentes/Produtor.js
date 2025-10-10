import React, {useState} from "react";
import {View, TouchableOpacity, Text, image, StyleSheet} from "react-native"

import Estrelas from "../../../Componentes/Estrelas";

export default function Produtor({nome, iamgem, distancia, estrelas}) {
   const [selecionado, setSelecionado] = useState(false);
    
   return <TouchableOpacity
    style={estilos.cartao}
    onPress={() => setSelecionado(!selecionado)}
>
    <image style={estilos.imagem} source={imagem} accessibility={nome} /> 
    <View style={estilos.informacoes}>
        <View>
            <Text style={estilos.nome}>{nome}</Text>
            <Estrelas
                quantidade={estrelas}
                editavel={selecionado}
                grande={selecionado}
                />
        </View>
        <Text style={estilos.distancia}>{distancia}</Text>
        </View>
        
import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";


import logo from "../../../assets/logo.png";
import { carregaTopo } from "../../../services/carregaDados";

class Topo extends React.Component {
    state = {
        topo: {
            boasVindas: "",
            legenda: "",
        },
    };
    atualizaTopo() {
        const retorno = carregaTopo();
        this.setState({topo: retorno});
    }
    componentDidMount() {
        this.atualizaTopo()
    }
    render() {
        return (<View style= {estilos.topo}>
            <Image  source= {logo} style= {estilos.image} />
            <Text style = {estilos.boasVindas}>{this.state.topo.boasVindas}</Text>
            <Text style= {estilos.legenda}>{this.state.topo.legenda}</Text>
        </View>
            );
    }
}

/*export default function topo() {
    return (
        <View style= {estilos.topo}>
            <Image  source= {logo} style= {estilos.image} />
            <Text style = {estilos.boasVindas}>Olá, Rogério!</Text>
            <Text style= {estilos.legenda}>Encontre os melhores produtores.</Text>
        </View>
    );
}
*/
const estilos = StyleSheet.create({
    topo: { 
        backgroundColor: "#ff0000ff",
        padding: 16,
    },
    image: {
        width: 70,
        height: 28,
    },
    boasVindas: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeigth: 'bold',
    },
    legenda: {
        fontSize: 16,
        lineHeight: 16,
    },
})

export default Topo;
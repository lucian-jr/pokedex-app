import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { pokemonList } from './constants';

class Pokemon extends Component {

    render() {
        return (
            <View style={styles.pokeContainer}>
                {Object.entries(pokemonList).map(([key, pokemon], index) => (
                    <View key={key} style={styles.card}>
                        <Text style={styles.pokeName}># {index + 1} - {pokemon.name}</Text>
                        <Image
                            source={{ uri: `https://img.pokemondb.net/sprites/black-white/normal/${pokemon.name.toLowerCase()}.png` }}
                            style={{ width: 80, height: 80 }}
                        />
                    </View>
                ))}
            </View>
        )

    }
}

const styles = StyleSheet.create({
    pokeContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 15
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: '#f1f1f1',
        marginBottom: 15,
        borderRadius: 5,
        padding: 10,
        // Sombra para iOS
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        // Sombra para Android
        elevation: 5,
    },
    pokeName : {
        fontSize: 16,
        fontWeight: '800'
    }
});

export default Pokemon;
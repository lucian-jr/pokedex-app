import React, { Component } from "react";
import { StyleSheet, View, Text, Image, FlatList } from "react-native";
import { pokemonList } from './constants';

class Pokemon extends Component {
    render() {
        return (
            <View style={styles.pokeContainer}>
                <FlatList
                    data={pokemonList.filter(({name}) => name.toLowerCase().includes(this.props.searchData.toLowerCase()))}
                    renderItem={({ item }) =>
                        <React.Fragment>
                            <View style={styles.card}>
                                <Text style={styles.pokeName}>{item.name}</Text>
                                <Image
                                    source={{ uri: `https://img.pokemondb.net/sprites/black-white/normal/${item.name.toLowerCase()}.png` }}
                                    style={{ width: 80, height: 80 }}
                                />
                            </View>
                        </React.Fragment>
                        
                    } 
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    pokeContainer: {
        flex: 1,
        width: '100%'
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f1f1f1',
        marginHorizontal: 5,
        marginBottom: 20,
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
    pokeName: {
        fontSize: 16,
        fontWeight: '800'
    }
});

export default Pokemon;
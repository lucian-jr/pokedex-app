import { View } from 'react-native';
import {Pokemon } from '../../components/cards/Pokemon';

export default function Home() {
    return (
        <View>
            <Text style={styles.title}>Pokédex</Text>

            <View style={styles.pokeContainer}>
                <Pokemon/>
            </View>
        </View>
    );
}
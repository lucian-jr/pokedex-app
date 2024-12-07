import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Pokemon from './src/components/cards/Pokemon';

export default function App() {
  return (
    <ScrollView
      style={styles.scrollContainer}
      showsVerticalScrollIndicator={true}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Pokédex</Text>

        <View style={styles.pokeContainer}>
          <Pokemon />
        </View>
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'init',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 60
  }
});

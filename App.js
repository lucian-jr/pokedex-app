import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input } from './src/components';
import Pokemon from './src/components/cards/Pokemon';

export default function App() {

  const [searchValue, setSearchValue] = useState('');

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Pokédex</Text>

        <Input
          placeholder="Buscar..."
          value={searchValue}
          onChangeText={setSearchValue}
        />

        <Pokemon searchData={searchValue} />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'init',
    padding: 20
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 30
  }
});

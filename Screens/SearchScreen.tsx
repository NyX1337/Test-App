import { Text, View, StyleSheet, TextInput, FlatList } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable'

const listItems = [
  'Bitcoin',
  'Ethereum',
  'Cardano',
  'Tether',
  'Solana',
  'DogeCoin',
  'Terra',
  'UniSwap',
  'LiteCoin',
  'Avalanche',
  'Algorand',
  'FileCoin',
  'Polygon',
  'Polkadot',
  'XRP',
  'ChainLink',
  'Cosmos',
  'Aave',
  'Monero',
  'eCash',
  'EOS',
  'Quant',
  'IOTA',
  'The Graph',
  'Fantom',
  'Neo',
  'Klaytn',
  'Waves',
  'Maker',
  'BitTorrent',
  'Amp',
  'Dash',
]
export default function SearchScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: 80,
          backgroundColor: 'red',
          justifyContent: 'center',
          paddingHorizontal: 10,
          marginTop: 50,
        }}
      >
        <Animatable.View
          animation='lightSpeedIn'
          duration={500}
          style={styles.searchBar}
        >
          <Ionicons name='search' color={'black'} size={26} />
          <TextInput
            placeholder='Search'
            style={{ fontSize: 14, marginLeft: 12, flex: 1 }}
          />
        </Animatable.View>
      </View>
      <FlatList
        data={listItems}
        renderItem={({ item }) => (
          <Text style={{ padding: 20, fontSize: 20 }}>{item}</Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    height: 50,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
  },
})

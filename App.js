
import React from 'react';
import {
  View,
  ScrollView,
  StatusBar,
  StyleSheet
} from 'react-native';

import Header from './components/Header';
import SongList from './components/SongList';
import ArtistList from './components/ArtistList';
import AddSong from './components/AddSong';
import TabBar from './components/TabBar';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#171717"
      />

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Header />
        <SongList />
        <ArtistList />
        <AddSong />
      </ScrollView>

      <TabBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },

  content: {
    flex: 1,
  },
});

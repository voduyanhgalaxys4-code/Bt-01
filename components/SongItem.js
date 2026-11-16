
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SongItem({ name, artist }) {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Text style={styles.musicIcon}>♫</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1}>
          {name}
        </Text>

        <Text style={styles.artist} numberOfLines={1}>
          {artist}
        </Text>
      </View>

      <View style={styles.playButton}>
        <Text style={styles.playIcon}>▶</Text>
      </View>

      <Text style={styles.more}>•••</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#242424',
    padding: 12,
    marginBottom: 11,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#333333',
  },

  icon: {
    width: 46,
    height: 46,
    borderRadius: 12,
    backgroundColor: '#FFD700',
    justifyContent: 'center',
    alignItems: 'center',
  },

  musicIcon: {
    color: '#171717',
    fontSize: 27,
    fontWeight: 'bold',
  },

  info: {
    flex: 1,
    marginLeft: 12,
    marginRight: 8,
  },

  name: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },

  artist: {
    color: '#AAAAAA',
    fontSize: 12,
    marginTop: 5,
  },

  playButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#383838',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  playIcon: {
    color: '#FFD700',
    fontSize: 12,
  },

  more: {
    color: '#FFD700',
    fontSize: 17,
  },
});

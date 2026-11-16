
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const artists = [
  { id: 1, initial: 'S', name: 'Sơn Tùng M-TP', songs: 'V-Pop Artist' },
  { id: 2, initial: 'Đ', name: 'Đen Vâu', songs: 'Rap Artist' },
  { id: 3, initial: 'J', name: 'Jack', songs: 'V-Pop Artist' },
  { id: 4, initial: 'V', name: 'Vũ', songs: 'Indie Artist' },
];

export default function ArtistList() {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <View>
          <Text style={styles.smallTitle}>DISCOVER ARTISTS</Text>
          <Text style={styles.title}>Ca sĩ yêu thích</Text>
        </View>

        <Text style={styles.seeAll}>Xem tất cả  ›</Text>
      </View>

      {artists.map((artist) => (
        <View style={styles.artist} key={artist.id}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {artist.initial}
            </Text>
          </View>

          <View style={styles.info}>
            <Text style={styles.name}>{artist.name}</Text>
            <Text style={styles.category}>{artist.songs}</Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#171717',
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 10,
  },

  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },

  smallTitle: {
    color: '#B89B32',
    fontSize: 9,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 5,
  },

  title: {
    color: '#FFD700',
    fontSize: 21,
    fontWeight: 'bold',
  },

  seeAll: {
    color: '#FFD700',
    fontSize: 12,
    fontWeight: '600',
  },

  artist: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#242424',
    padding: 12,
    marginBottom: 10,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#333333',
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: '#FFD700',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    color: '#171717',
    fontSize: 20,
    fontWeight: 'bold',
  },

  info: {
    flex: 1,
    marginLeft: 12,
  },

  name: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },

  category: {
    color: '#999999',
    fontSize: 11,
    marginTop: 4,
  },

  arrow: {
    color: '#FFD700',
    fontSize: 25,
    marginRight: 5,
  },
});

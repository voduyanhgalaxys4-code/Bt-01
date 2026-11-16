
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SongItem from './SongItem';

const songs = [
  { id: 1, name: 'Lạc Trôi', artist: 'Sơn Tùng M-TP' },
  { id: 2, name: 'Chúng Ta Của Hiện Tại', artist: 'Sơn Tùng M-TP' },
  { id: 3, name: 'Mang Tiền Về Cho Mẹ', artist: 'Đen Vâu' },
  { id: 4, name: 'Bước Qua Nhau', artist: 'Vũ' },
];

export default function SongList() {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <View>
          <Text style={styles.smallTitle}>YOUR PLAYLIST</Text>
          <Text style={styles.title}>Bài hát nổi bật</Text>
        </View>

        <Text style={styles.seeAll}>Xem tất cả  ›</Text>
      </View>

      <View style={styles.songContainer}>
        {songs.map((song) => (
          <SongItem
            key={song.id}
            name={song.name}
            artist={song.artist}
          />
        ))}
      </View>
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

  songContainer: {
    borderTopWidth: 1,
    borderTopColor: '#333333',
    paddingTop: 8,
  },
});

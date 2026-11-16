
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function AddSong({ onAddSong }) {
  const [songName, setSongName] = useState('');
  const [artistName, setArtistName] = useState('');

  const handleAdd = () => {
    if (songName.trim() === '' || artistName.trim() === '') {
      return;
    }

    if (onAddSong) {
      onAddSong(songName.trim(), artistName.trim());
    }

    setSongName('');
    setArtistName('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.smallTitle}>CREATE YOUR PLAYLIST</Text>
      <Text style={styles.title}>Thêm bài hát mới</Text>

      <Text style={styles.description}>
        Bổ sung những giai điệu yêu thích của bạn
      </Text>

      <Text style={styles.label}>♫  Tên bài hát</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập tên bài hát..."
        placeholderTextColor="#888888"
        value={songName}
        onChangeText={setSongName}
      />

      <Text style={styles.label}>♬  Tên ca sĩ</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập tên ca sĩ..."
        placeholderTextColor="#888888"
        value={artistName}
        onChangeText={setArtistName}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleAdd}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>＋  THÊM BÀI HÁT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#171717',
    padding: 20,
    paddingTop: 24,
  },

  smallTitle: {
    color: '#B89B32',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 7,
  },

  title: {
    color: '#FFD700',
    fontSize: 22,
    fontWeight: 'bold',
  },

  description: {
    color: '#999999',
    fontSize: 12,
    marginTop: 6,
    marginBottom: 22,
  },

  label: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 9,
  },

  input: {
    backgroundColor: '#242424',
    color: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
    marginBottom: 19,
    borderWidth: 1,
    borderColor: '#444444',
    fontSize: 14,
  },

  button: {
    backgroundColor: '#FFD700',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 5,
  },

  buttonText: {
    color: '#171717',
    fontWeight: 'bold',
    fontSize: 14,
    letterSpacing: 0.5,
  },
});

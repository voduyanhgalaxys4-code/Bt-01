
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.badge}>♫ PREMIUM MUSIC</Text>

        <Text style={styles.logo}>GOLD MUSIC</Text>

        <Text style={styles.subtitle}>
          Âm nhạc dành riêng cho bạn
        </Text>
      </View>

      <View style={styles.profile}>
        <Text style={styles.profileText}>♪</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#171717',
    paddingHorizontal: 20,
    paddingTop: 45,
    paddingBottom: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#554500',
  },

  left: {
    flex: 1,
  },

  badge: {
    color: '#FFD700',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 7,
  },

  logo: {
    color: '#FFD700',
    fontSize: 27,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  subtitle: {
    color: '#AAAAAA',
    fontSize: 13,
    marginTop: 6,
  },

  profile: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFD700',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFF0A0',
  },

  profileText: {
    color: '#171717',
    fontSize: 27,
    fontWeight: 'bold',
  },
});

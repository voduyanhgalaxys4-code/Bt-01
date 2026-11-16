
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable
} from 'react-native';

const tabs = [
  { id: 0, icon: '⌂', label: 'TRANG CHỦ' },
  { id: 1, icon: '♫', label: 'BÀI HÁT' },
  { id: 2, icon: '♬', label: 'CA SĨ' },
  { id: 3, icon: '＋', label: 'THÊM' },
];

export default function TabBar() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const active = activeTab === tab.id;

        return (
          <Pressable
            key={tab.id}
            style={styles.tab}
            onPress={() => setActiveTab(tab.id)}
          >
            <View style={[
              styles.iconBox,
              active && styles.activeIconBox
            ]}>
              <Text style={[
                styles.icon,
                active && styles.activeIcon
              ]}>
                {tab.icon}
              </Text>
            </View>

            <Text style={[
              styles.label,
              active && styles.activeLabel
            ]}>
              {tab.label}
            </Text>

            {active && <View style={styles.indicator} />}
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#181818',
    paddingTop: 12,
    paddingBottom: 15,
    paddingHorizontal: 8,
    borderTopWidth: 1,
    borderTopColor: '#333333',
    elevation: 15,
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBox: {
    width: 42,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  activeIconBox: {
    backgroundColor: '#FFD700',
  },
  icon: {
    fontSize: 23,
    color: '#888888',
    fontWeight: 'bold',
  },
  activeIcon: {
    color: '#151515',
  },
  label: {
    fontSize: 9,
    color: '#888888',
    fontWeight: '600',
    letterSpacing: 0.4,
  },
  activeLabel: {
    color: '#FFD700',
    fontWeight: 'bold',
  },
  indicator: {
    width: 16,
    height: 3,
    borderRadius: 5,
    backgroundColor: '#FFD700',
    marginTop: 5,
  },
});

import { StyleSheet, Text, View } from 'react-native'

import Header from '../components/Header'
import MemoListItem from '../components/MemoListItem'

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>

      <Header />

      <View>
        <MemoListItem
          title="買い物リスト１"
          date="2024/02/12 8:00"
        />
        <MemoListItem
          title="買い物リスト２"
          date="2024/02/12 8:00"
        />
        <MemoListItem
          title="買い物リスト３"
          date="2024/02/12 8:00"
        />
      </View>

      <View style={styles.circleButton}>
        <Text style={styles.circleButtonLabel}>＋</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  circleButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#467FD3',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    // iOSのみの設定
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 8 },
    // Androidのみの設定
    elevation: 8
  },
  circleButtonLabel: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 48
  }
})

export default Index

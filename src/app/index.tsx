import { StyleSheet, Text, View } from 'react-native'

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <View style={styles.headerInner}>
          <Text style={styles.headerTitle}>React Native Sample</Text>
          <Text style={styles.headerRight}>ログアウト</Text>
        </View>
      </View>

      <View>

        <View>
          <View>
            <Text>買い物リスト１</Text>
            <Text>2024/02/12 8:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        <View>
          <View>
            <Text>買い物リスト２</Text>
            <Text>2024/02/12 8:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        <View>
          <View>
            <Text>買い物リスト３</Text>
            <Text>2024/02/12 8:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

      </View>

      <View>
        <Text>＋</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  header: {
    backgroundColor: '#467FD3',
    height: 104,
    justifyContent: 'flex-end'
  },
  headerInner: {
    alignItems: 'center'
  },
  headerRight: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    color: 'rgba(255,255,255,0.7)'
  },
  headerTitle: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    fontWeight: 'bold',
    color: '#ffffff'
  }
})

export default Index

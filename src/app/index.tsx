import { StyleSheet, Text, View } from 'react-native'

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text>React Native Sample</Text>
          <Text>ログアウト</Text>
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
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Index

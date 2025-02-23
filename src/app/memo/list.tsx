import { StyleSheet, View } from 'react-native'

import CircleButton from '../../components/CircleButton'
import Header from '../../components/Header'
import MemoListItem from '../../components/MemoListItem'

const List = (): JSX.Element => {
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

      <CircleButton>＋</CircleButton>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
})

export default List

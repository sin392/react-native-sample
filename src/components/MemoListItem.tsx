import { StyleSheet, Text, View } from 'react-native'

type MemoListItemProps = {
  title: string
  date: string
}

const MemoListItem = (props: MemoListItemProps): JSX.Element => {
  const { title, date } = props

  return (
    <View style={styles.memoListItem}>
      <View>
        <Text style={styles.memoListItemTitle}>{title}</Text>
        <Text style={styles.memoListItemDate}>{date}</Text>
      </View>
      <View>
        <Text>X</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)'
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484'
  }
})

export default MemoListItem

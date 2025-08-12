import { createHomeStyles } from '@/assets/styles/home.styles'
import useTheme from '@/hooks/useTheme'
import { SafeAreaView, Text, TouchableOpacity } from 'react-native'

export default function Index() {
  const { toggleDarkMode, colors } = useTheme()

  const homeStyles = createHomeStyles(colors)

  return (
    <SafeAreaView style={homeStyles.container}>
      <Text>hi</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Add a new todo</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

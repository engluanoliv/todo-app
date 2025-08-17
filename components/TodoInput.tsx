import { createHomeStyles } from '@/assets/styles/home.styles'
import { api } from '@/convex/_generated/api'
import useTheme from '@/hooks/useTheme'
import { Ionicons } from '@expo/vector-icons'
import { useMutation } from 'convex/react'
import { LinearGradient } from 'expo-linear-gradient'
import type React from 'react'
import { useState } from 'react'
import { Alert, TextInput, TouchableOpacity, View } from 'react-native'

interface TodoInputProps {
  onAddTodo?: (todo: string) => void
}

const TodoInput: React.FC<TodoInputProps> = ({}) => {
  const { colors } = useTheme()
  const homeStyles = createHomeStyles(colors)
  const [newTodo, setNewTodo] = useState('')
  const addTodo = useMutation(api.todos.addTodo)

  const handleAddTodo = async () => {
    if (newTodo.trim()) {
      try {
        await addTodo({ text: newTodo.trim() })
        setNewTodo('')
      } catch (error) {
        console.log(error)
        Alert.alert('Error', 'Failed to add todo')
      }
    }
  }

  return (
    <View style={homeStyles.inputSection}>
      <View style={homeStyles.inputWrapper}>
        <TextInput
          style={homeStyles.input}
          placeholder='What needs to be done?'
          value={newTodo}
          onChangeText={setNewTodo}
          onSubmitEditing={handleAddTodo}
          placeholderTextColor={colors.textMuted}
        />

        <TouchableOpacity
          onPress={handleAddTodo}
          activeOpacity={0.8}
          disabled={!newTodo.trim()}
        >
          <LinearGradient
            colors={
              newTodo.trim() ? colors.gradients.primary : colors.gradients.muted
            }
            style={[
              homeStyles.addButton,
              !newTodo.trim() && homeStyles.addButtonDisabled,
            ]}
          >
            <Ionicons name='add' color='#FFF' size={24} />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default TodoInput

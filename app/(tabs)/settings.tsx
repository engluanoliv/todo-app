import { createSettingsStyles } from '@/assets/styles/settings.styles'
import DangerZone from '@/components/dangerZone'
import Preferences from '@/components/preferences'
import ProgressStats from '@/components/progressStats'
import useTheme from '@/hooks/useTheme'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'

export default function SettingScreen() {
  const { colors } = useTheme()

  const settingsStyles = createSettingsStyles(colors)

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={settingsStyles.container}
    >
      <SafeAreaView style={settingsStyles.safeArea}>
        <View style={settingsStyles.header}>
          <View style={settingsStyles.titleContainer}>
            <LinearGradient
              colors={colors.gradients.primary}
              style={settingsStyles.iconContainer}
            >
              <Ionicons name='settings' size={28} color='#FFF' />
            </LinearGradient>
            <Text style={settingsStyles.title}>Settings</Text>
          </View>
        </View>
        <ScrollView
          style={settingsStyles.scrollView}
          contentContainerStyle={settingsStyles.content}
          showsVerticalScrollIndicator={false}
        >
          <ProgressStats />

          <Preferences />

          <DangerZone />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  )
}

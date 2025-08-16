import { createSettingsStyles } from '@/assets/styles/settings.styles'
import useTheme from '@/hooks/useTheme'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import { Switch, Text, View } from 'react-native'

const Preferences = () => {
  const [isAutoSync, setIsAutoSync] = useState(true)
  const [isNotificaitonEnabled, setIsNotificationEnabled] = useState(true)

  const { colors, isDarkMode, toggleDarkMode } = useTheme()
  const settingsStyles = createSettingsStyles(colors)

  return (
    <LinearGradient
      colors={colors.gradients.surface}
      style={settingsStyles.section}
    >
      <Text style={settingsStyles.sectionTitle}>Preferences</Text>

      {/* DARK MODE */}
      <View style={settingsStyles.settingItem}>
        <View style={settingsStyles.settingLeft}>
          <LinearGradient
            colors={colors.gradients.primary}
            style={settingsStyles.iconContainer}
          >
            <Ionicons name='moon' size={18} color='#FFF' />
          </LinearGradient>
          <Text style={settingsStyles.settingText}>Dark Mode</Text>
        </View>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          thumbColor='#FFF'
          trackColor={{ false: colors.border, true: colors.primary }}
          //   ios_backgroundColor={'red'}
        />
      </View>

      {/*  NOTIFICATIONS */}
      <View style={settingsStyles.settingItem}>
        <View style={settingsStyles.settingLeft}>
          <LinearGradient
            colors={colors.gradients.warning}
            style={settingsStyles.iconContainer}
          >
            <Ionicons name='notifications' size={18} color='#FFF' />
          </LinearGradient>
          <Text style={settingsStyles.settingText}>Notifications</Text>
        </View>
        <Switch
          value={isNotificaitonEnabled}
          onValueChange={() => setIsNotificationEnabled(!isNotificaitonEnabled)}
          thumbColor='#FFF'
          trackColor={{ false: colors.border, true: colors.warning }}
          //   ios_backgroundColor={'red'}
        />
      </View>

      {/*  AUTO SYNC */}
      <View style={settingsStyles.settingItem}>
        <View style={settingsStyles.settingLeft}>
          <LinearGradient
            colors={colors.gradients.success}
            style={settingsStyles.iconContainer}
          >
            <Ionicons name='notifications' size={18} color='#FFF' />
          </LinearGradient>
          <Text style={settingsStyles.settingText}>Auto Sync</Text>
        </View>
        <Switch
          value={isAutoSync}
          onValueChange={() => setIsAutoSync(!isAutoSync)}
          thumbColor='#FFF'
          trackColor={{ false: colors.border, true: colors.success }}
          //   ios_backgroundColor={'red'}
        />
      </View>
    </LinearGradient>
  )
}

export default Preferences

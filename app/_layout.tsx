import { ThemeProvider } from '@/hooks/useTheme'
import { ConvexProvider, ConvexReactClient } from 'convex/react'
import { Stack } from 'expo-router'

export default function RootLayout() {
  const convexUrl = process.env.EXPO_PUBLIC_CONVEX_URL
  if (!convexUrl) {
    throw new Error('EXPO_PUBLIC_CONVEX_URL environment variable is not set')
  }
  const convex = new ConvexReactClient(convexUrl, {
    unsavedChangesWarning: false,
  })

  return (
    <ConvexProvider client={convex}>
      <ThemeProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name='(tabs)' />
        </Stack>
      </ThemeProvider>
    </ConvexProvider>
  )
}

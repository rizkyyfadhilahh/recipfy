import { Redirect, Stack } from 'expo-router'
import { useAuth } from '@clerk/clerk-expo'
const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default function AuthRoutesLayout() {
  const { isSignedIn } = useAuth()

  if (isSignedIn) return <Redirect href={'/'} />;
  

  return <Stack screenOptions={{headerShown:false}}/>;
}
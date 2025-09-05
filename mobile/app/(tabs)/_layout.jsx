import { Stack } from "expo-router";
import { View, Text } from "react-native";

const TabsLayout = () => {
    const {isSignedIn} = useAuth();
    if (!isSignedIn) {
        return <Redirect href={'/(auth)/sign-in'} />
    } 

  return <Stack />
};

export default TabsLayout;
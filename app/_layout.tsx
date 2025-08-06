import { Stack, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AddPet from "@/components/AddPet";
import { useState } from "react";

export default function RootLayout() {
  const [isVisible, setModalVisible] = useState<boolean>(false);
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f9e3be",
        },
        headerShadowVisible: false,
        headerRight: () => (
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <MaterialIcons name="add" size={30} color="black" />
            <AddPet setModalVisible={setModalVisible} isVisible={isVisible} />
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Pet Adoption",
          headerStyle: {
            backgroundColor: "#f9e3be",
          },
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="[petId]"
        options={{
          headerTitle: "Pet Details",
          headerStyle: {
            backgroundColor: "#f9e3be",
          },
          headerShadowVisible: false,
        }}
      />
    </Stack>
  );
}

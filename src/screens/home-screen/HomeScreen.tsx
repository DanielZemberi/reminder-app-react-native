import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { auth } from "../../../firebase";
import { signOut } from "firebase/auth";
const HomeScreen = () => {
  const handleLogout = React.useCallback(async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  return (
    <View>
      <Text>HomeScreen</Text>
      <TouchableOpacity onPress={handleLogout}>
        <Text>logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

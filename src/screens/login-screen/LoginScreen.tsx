import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { auth } from "../../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import axios from "axios";

const LoginScreen = () => {
  const [email, setEmail] = React.useState("danielftwww@gmail.com");
  const [password, setPassword] = React.useState("Dfsffs");
  const [user, setUser] = React.useState<string>(null);
  const [token, setToken] = React.useState<string>(null);

  const handeSignUp = React.useCallback(async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log("error", error);
    }
  }, [email, password]);

  const handleSignIn = React.useCallback(async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log("error", error);
    }
  }, [email, password]);

  const handleLogout = React.useCallback(async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log("error", error);
    }
  }, [email, password]);

  React.useEffect(() => {
    auth.onAuthStateChanged((userCredentials) => {
      if (!userCredentials) {
        setUser(null);
        setToken(null);
        return;
      }
      setUser(userCredentials.email);
      userCredentials.getIdToken().then((token) => setToken(token));
    });
  }, []);

  // React.useEffect(() => {
  //   console.log("fetching data");
  //   fetchData();
  // }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://10.0.2.2:8080/api/test", {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log(err.response);
      }
      console.log("UNKNOWN ERROR", err);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View>{user ? <Text>{user}</Text> : null}</View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSignIn} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handeSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
        {user ? (
          <TouchableOpacity
            onPress={handleLogout}
            style={[styles.button, styles.buttonOutline]}
          >
            <Text style={styles.buttonOutlineText}>Logout</Text>
          </TouchableOpacity>
        ) : null}

        <TouchableOpacity
          onPress={fetchData}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>FETCH</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#0782f9",
    width: "100%",
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
  },
  buttonOutline: {
    backgroundColor: "white",
    borderColor: "#0782f9",
    borderWidth: 1,
    marginTop: 10,
  },
  buttonOutlineText: { color: "#0782f9", fontWeight: "700", fontSize: 16 },
  buttonText: { color: "white", fontWeight: "700", fontSize: 16 },
});

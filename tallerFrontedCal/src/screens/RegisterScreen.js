import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import api from '../api';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await api.post('/users', {
        email: email,
        password: password,
      });
      Alert.alert('Registro exitoso', 'Usuario creado con éxito');
      navigation.navigate('UserList'); // Redirecciona a la lista de usuarios después del registro
    } catch (error) {
      Alert.alert('Error', 'No se pudo registrar el usuario. Verifica los datos.');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Correo electrónico:</Text>
      <TextInput
        style={{ borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        value={email}
        onChangeText={setEmail}
        placeholder="Ingresa tu correo"
        keyboardType="email-address"
      />
      <Text>Contraseña:</Text>
      <TextInput
        style={{ borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        value={password}
        onChangeText={setPassword}
        placeholder="Ingresa tu contraseña"
        secureTextEntry
      />
      <Button title="Registrarse" onPress={handleRegister} />
    </View>
  );
};

export default RegisterScreen;

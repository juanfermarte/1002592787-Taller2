import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import api from '../api';

const UserListScreen = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get('/users');
        setUsers(response.data);
      } catch (error) {
        console.log('Error al obtener los usuarios', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text>Usuarios Registrados:</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1 }}>
            <Text>ID: {item.id}</Text>
            <Text>Email: {item.email}</Text>
            <Text>Creado en: {item.created_at}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default UserListScreen;

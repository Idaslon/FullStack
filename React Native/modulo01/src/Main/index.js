// import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../services/api';

import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  User,
  Avatar,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText,
} from './styles';

const initialState = {
  users: [
    // {
    //   name: 'Idasllon',
    //   login: 'DestroyeerU',
    //   bio: 'SEM bio',
    //   avatar: 'https://avatars2.githubusercontent.com/u/51955733?s=460&v=4',
    // },
  ],
  newUser: '',
};

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  onHandleAddUser = async () => {
    const { users, newUser } = this.state;

    const response = await api.get(`/users/${newUser}`);

    const data = {
      name: response.data.name,
      login: response.data.login,
      bio: response.data.bio,
      avatar: response.data.avatar_url,
    };

    this.setState({
      users: [...users, data],
      newUser: '',
    });

    Keyboard.dismiss();
  };

  render() {
    const { users, newUser } = this.state;

    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Adicionar Usuário"
            value={newUser}
            onChangeText={(text) => this.setState({ newUser: text })}
            returnKeyType="send"
            onSubmitEditing={this.onHandleAddUser}
          />
          <SubmitButton onPress={this.onHandleAddUser}>
            <Icon name="add" size={20} color="#eee" />
          </SubmitButton>
        </Form>

        <List
          data={users}
          keyExtractor={(user) => user.login}
          renderItem={({ item }) => (
            <User>
              <Avatar source={{ uri: item.avatar }} />
              <Name>{item.name}</Name>
              <Bio>{item.bio}</Bio>

              <ProfileButton>
                <ProfileButtonText>VER PERFIL</ProfileButtonText>
              </ProfileButton>
            </User>
          )}
        />
      </Container>
    );
  }
}

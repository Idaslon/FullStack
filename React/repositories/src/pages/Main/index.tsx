import React, { Component } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';

import {
  Container, Form, SubmitButton, List,
} from './styles';
import api from '../../services/api';

interface Props {
}

interface ResponseData {
  name: string
}

interface State {
  newRepo: string
  repositories: ResponseData[]
  loading: boolean
}

const initialState: State = {
  newRepo: '',
  repositories: [],
  loading: false,
};


export default class Main extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    const savedRepositories = localStorage.getItem('repositories');

    if (savedRepositories) {
      this.setState({ repositories: JSON.parse(savedRepositories) });
    }
  }

  componentDidUpdate(_: Props, prevState: State) {
    const { repositories } = this.state;

    if (prevState.repositories !== repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }

  onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ newRepo: e.target.value });
  }

  onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    this.setState({ loading: true });

    const { newRepo, repositories } = this.state;

    const response = await api.get(`repos/${newRepo}`);

    const data: ResponseData = {
      name: response.data.full_name,
    };

    this.setState({
      repositories: [...repositories, data],
      newRepo: '',
      loading: false,
    });
  }

  render() {
    const { newRepo, repositories, loading } = this.state;

    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>

        <Form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Adicionar repositório"
            value={newRepo}
            onChange={this.onInputChange}
          />

          <SubmitButton loading={loading}>
            {loading ? (
              <FaSpinner color="#FFF" size={14} />
            ) : (
              <FaPlus color="#FFF" size={14} />
            )}
          </SubmitButton>
        </Form>

        <List>
          {repositories.map((repository) => (
            <li key={repository.name}>
              <span>{repository.name}</span>
              <a href="google.com">Detatlhes</a>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}

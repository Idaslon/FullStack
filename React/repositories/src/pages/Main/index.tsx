import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';


import api from '@services/api';
import Container from '@components/Container';

import {
  Form, SubmitButton, List, InputWarning,
} from './styles';

interface Props {
}

interface ResponseData {
  name: string
}

interface State {
  newRepo: string
  repositories: ResponseData[]
  loading: boolean
  inputError: boolean
}

const initialState: State = {
  newRepo: '',
  repositories: [],
  loading: false,
  inputError: false,
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

  async getRepository() {
    try {
      const { newRepo } = this.state;
      return await api.get(`repos/${newRepo}`);
    } catch (err) {
      return undefined;
    }
  }

  onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { newRepo, repositories } = this.state;

    const repositoryExits = repositories.filter((repository) => repository.name === newRepo);

    if (repositoryExits) {
      this.setState({
        newRepo: '',
        loading: false,
        inputError: true,
      });
      return;
    }


    this.setState({ loading: true });

    const response = await this.getRepository();

    if (response) {
      const { repositories } = this.state;

      const data: ResponseData = {
        name: response.data.full_name,
      };

      this.setState({
        repositories: [...repositories, data],
        newRepo: '',
        loading: false,
        inputError: false,
      });
    } else {
      this.setState({
        newRepo: '',
        loading: false,
        inputError: true,
      });
    }
  }

  render() {
    const {
      newRepo, repositories, loading, inputError,
    } = this.state;

    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>

        <Form onSubmit={this.onSubmit}>

          <InputWarning
            type="text"
            placeholder="Adicionar repositório"
            value={newRepo}
            onChange={this.onInputChange}
            activated={inputError}
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
              <Link to={`/repository/${encodeURIComponent(repository.name)}`}>Detatlhes</Link>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}

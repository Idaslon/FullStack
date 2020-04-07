import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import api from '@services/api';
import Container from '@components/Container';
import { Loading, Owner } from './styles';

interface RouterProps {
  repository: string
}

type RepositoryProps = RouteComponentProps<RouterProps>

interface RepositoryOwner {
  avatar_url: string
  login: string
}

interface Issue {}

interface RepositoryState {
  owner: RepositoryOwner
  issues: Issue[]
  name: string
  description: string
  loading: boolean
}


const initialState: RepositoryState = {
  owner: {
    avatar_url: '',
    login: '',
  },
  issues: [],
  name: '',
  description: '',
  loading: true,
};

export default class Repository extends Component<RepositoryProps, RepositoryState> {
  constructor(props: RepositoryProps) {
    super(props);
    this.state = initialState;
  }

  async componentDidMount() {
    const { match } = this.props;
    const repositoryName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get<RepositoryState>(`/repos/${repositoryName}`),
      api.get<RouterProps>(`/repos/${repositoryName}/issues`, {
        params: {
          state: 'open',
          // eslint-disable-next-line @typescript-eslint/camelcase
          per_page: 5,
        },
      }),
    ]);

    const { avatar_url, login } = repository.data.owner;

    this.setState({
      owner: {
        avatar_url,
        login,
      },
      description: repository.data.description,
      name: repository.data.name,
      loading: false,
    });
  }

  render() {
    const {
      loading, owner, name, description,
    } = this.state;

    if (loading) {
      return <Loading>Carrgegando</Loading>;
    }

    return (

      <Container>
        <Owner>
          <a href="/">Voltar aos repositórios</a>
          <img src={owner.avatar_url} alt={owner.login} />
          <h1>{name}</h1>
          <p>{description}</p>
        </Owner>
      </Container>
    );
  }
}

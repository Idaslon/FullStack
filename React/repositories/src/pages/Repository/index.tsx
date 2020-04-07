import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import api from '@services/api';
import Container from '@components/Container';
import { Loading, Owner, IssueList } from './styles';

interface RouterProps {
  repository: string
}

type RepositoryProps = RouteComponentProps<RouterProps>

interface User {
  avatar_url: string
  login: string
}

interface Label {
  id: number
  name: string
}

interface Issue {
  id: number
  user: User
  labels: Label[]
  html_url: string
  title: string
}

interface RepositoryState {
  owner: User
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
    const state = localStorage.getItem('this');
    if (state) {
      this.setState(JSON.parse(state));
    }

    // const { match } = this.props;
    // const repositoryName = decodeURIComponent(match.params.repository);

    // const [repository, issues] = await Promise.all([
    //   api.get<RepositoryState>(`/repos/${repositoryName}`),
    //   api.get<Issue[]>(`/repos/${repositoryName}/issues`, {
    //     params: {
    //       state: 'open',
    //       // eslint-disable-next-line @typescript-eslint/camelcase
    //       per_page: 5,
    //     },
    //   }),
    // ]);

    // const { avatar_url, login } = repository.data.owner;

    // this.setState({
    //   owner: {
    //     avatar_url,
    //     login,
    //   },
    //   issues: issues.data,
    //   description: repository.data.description,
    //   name: repository.data.name,
    //   loading: false,
    // });
  }

  render() {
    const {
      loading, owner, name, description, issues,
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
        <IssueList>
          {issues.map((issue) => (
            <li key={issue.id}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />

              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map((label) => (
                    <span key={label.id}>
                      {label.name}
                    </span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssueList>
      </Container>
    );
  }
}

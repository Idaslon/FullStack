import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
// import { Container } from './styles';

interface RouterProps {
  repository: string
}

type RepositoryProps = RouteComponentProps<RouterProps>

export default function Repository({ match }: RepositoryProps) {
  return (
    <>
      <h1>
        Repository:
        {' '}
        {decodeURIComponent(match.params.repository)}
      </h1>
    </>
  );
}

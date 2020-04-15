import React, { useEffect } from 'react';
import { useSafeSelector } from '@store/hooks';
import { useDispatch } from 'react-redux';
import { loadRequest } from '@store/ducks/repositories/actions';

const RepositoryList: React.FC = () => {
  const repositories = useSafeSelector((state) => state.repositories.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRequest());
  }, [dispatch]);

  return (
    <ul>
      {repositories.map((repository) => (
        <li key={repository.id}>{repository.name}</li>
      ))}
    </ul>
  );
};

export default RepositoryList;

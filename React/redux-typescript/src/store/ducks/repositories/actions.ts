import { action } from 'typesafe-actions';
import { Repository, RepositoriesTypes } from './types';

export const loadRequest = () => action(RepositoriesTypes.LOAD_REQUEST);

export const loadSuccess = (data: Repository[]) => action(
  RepositoriesTypes.LOAD_SUCCESS, { data },
);

export const loadFailure = () => action(RepositoriesTypes.LOAD_FAILURE);

// export const loadRequest = () => ({
//   type: RepositoriesTypes.LOAD_REQUEST,
// });

// export const loadSuccess = (data: Repository[]) => ({
//   type: RepositoriesTypes.LOAD_SUCCESS,
//   payload: {
//     data,
//   },
// });

// export const loadFailure = () => ({
//   type: RepositoriesTypes.LOAD_FAILURE,
// });

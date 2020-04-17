// import { action } from 'typesafe-actions';
// import { Repository, RepositoriesTypes } from './types';

import {
  LOAD_REQUEST, Repository, LOAD_SUCCESS, LOAD_FAILURE,
} from './types';

// export const loadRequest = () => action(RepositoriesTypes.LOAD_REQUEST);

// export const loadSuccess = (data: Repository[]) => action(
//   RepositoriesTypes.LOAD_SUCCESS, { data },
// );

// export const loadFailure = () => action(RepositoriesTypes.LOAD_FAILURE);

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

export const loadRequest = () => ({
  type: LOAD_REQUEST,
});

export const loadSuccess = (repositories: Repository[]) => ({
  type: LOAD_SUCCESS,
  payload: repositories,
});

export const loadFailure = () => ({
  type: LOAD_FAILURE,
});

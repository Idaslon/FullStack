export interface Repository {
  id: number
  name: string
}

export interface RepositoriesState {
  readonly data: Repository[]
  readonly loading: boolean
  readonly error: boolean
}

export const LOAD_REQUEST = '@repositories/LOAD_REQUEST';
export const LOAD_SUCCESS = '@repositories/LOAD_SUCCESS';
export const LOAD_FAILURE = '@repositories/LOAD_FAILURE';

interface LoadRequestAction {
  type: typeof LOAD_REQUEST,
  payload: undefined
}

interface LoadSuccessAction {
  type: typeof LOAD_SUCCESS,
  payload: Repository[]
}

interface LoadFailureAction {
  type: typeof LOAD_FAILURE,
  payload: undefined
}

export type RepositoriesActionTypes =
  LoadRequestAction
| LoadSuccessAction
| LoadFailureAction;

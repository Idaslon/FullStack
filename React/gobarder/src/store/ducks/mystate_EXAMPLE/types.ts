export interface MyState {
  name: string;
}

export interface State {
  readonly data: MyState[];
}

export enum StateTypes {
  ADD_REQUEST = '@mystate/ADD_REQUEST',
  ADD_SUCCESS = '@mystate/ADD_SUCCESS',
}

interface AddRequestAction {
  type: typeof StateTypes.ADD_REQUEST;
  payload: MyState;
}

interface AddSucessAction {
  type: typeof StateTypes.ADD_SUCCESS;
  payload: MyState;
}

export type ActionsTypes = AddRequestAction | AddSucessAction;

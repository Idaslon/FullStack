import { useSelector, TypedUseSelectorHook } from 'react-redux';

import { ApplicationState } from '.';

export const useSafeSelector: TypedUseSelectorHook<ApplicationState> = useSelector;

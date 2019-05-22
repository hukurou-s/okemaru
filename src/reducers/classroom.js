import { initialState } from './initialState';
import { createReducer } from 'redux-act';
import * as actions from '../actions';
import immer from 'immer';

const classroom = createReducer(
    {
        [actions.updateClassroom]: (state, payload) => {
            const table = payload;
            const newState = immer(state, draft => {
                const index = state.findIndex(({name}) => name === table.name);
                draft[index] = table;
            });
            return newState;
        },
    },
    initialState.tables
);

export default classroom;

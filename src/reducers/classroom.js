import { initialState } from './initialState';
import { createReducer } from 'redux-act';
import * as actions from '../actions';
import immer from 'immer';

const classroom = createReducer(
    {
        [actions.updateClassroom]: (state, payload) => {
            const {tabelName, status} = payload;
            const newState = immer(state, draft => {
                const index = state.tables.findIndex(({name}) => name === this.tableName);
                draft[index] = {name: this.tableName, status: status};
            });
            return newState;
        },
    },
    initialState.tables
);

export default classroom;

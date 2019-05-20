import { initialState } from './initialState';
import { createReducer } from 'redux-act';
import * as actions from '../actions';

const classroom = createReducer(
    {
        [actions.updateClassroom]: (state, payload) => {
            const {tabelName, status} = payload;
            const newState = immer(state, draft => {
                const index = hash.findIndex(({tableName}) => name === tableName);
                draft[index] = {name: tableName, status: status};
            });
            return newState;
        },
    },
    initialState
);

export default classroom;

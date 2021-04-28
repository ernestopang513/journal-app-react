
import React from 'react';
import {mount} from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import {MemoryRouter} from 'react-router-dom';
import { activeNote } from '../../../actions/notes';
import {NoteScreen} from '../../../components/notes/NoteScreen';

jest.mock('../../../actions/notes', () => ({
    activeNote: jest.fn()
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {},
    ui:{
        loading: false,
        msgError: null
    },
    notes:{
        active: {
            id: 1234,
            title: 'Hola',
            body: 'Mundo',
            date: 0
        },
        notes: []
    }
};
let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store = {store}>
        
            <NoteScreen/>
        
    </Provider>
)

describe('Pruebas en <NoteScreen/> ', () => {

    test('should mostrar el componente correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
    });

    test('should disparar el active note', () => {
        
        wrapper.find('input[name="title"]').simulate('change', {
            target: {
                name: 'title',
                value: 'Hola de nuevo'
            }
        });

        expect(activeNote).toHaveBeenLastCalledWith(
            1234,
            {
                body: 'mundo',
                title: 'Hola de nuevo',
                id: 1234,
                date: 0
            }
        )

    });
    
    

})






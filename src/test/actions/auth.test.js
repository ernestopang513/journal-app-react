import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import { login, logout, startLoginEmailPassword, startLogout } from "../../actions/auth"
import { types } from "../../types/types";
import '@testing-library/jest-dom';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};

let store = mockStore(initState);

describe('Pruebas con las acciones de Auth', () => {

    beforeEach(() => {
        store = mockStore(initState);
    })
    

    test('should login y logout deben d crear la acción respectiva', () => {
        

        const loginAction = login('123', 'Ernesto');

        expect(loginAction).toEqual({
            type: types.login,
            payload: {
                uid: '123',
                displayName: 'Ernesto'
            }
        });

        const logoutAction = logout();

        expect(logoutAction).toEqual({
            type: types.logout
        })
    });

    test('should realizar el logout', async() => {
        await store.dispatch(startLogout())

        const actions = store.getActions();

        expect( actions[0]).toEqual({
            type: types.logout
        });

        expect(actions[1]).toEqual({
            type: types.notesLogoutCleanning
        });
    });

    test('should iniciar el startLoginEmailPasword', async() => {
        
        await store.dispatch( startLoginEmailPassword('test@testing.com','123456'));

        const actions = store.getActions();
        // console.log(actions);

        expect(actions[1]).toEqual({
            type: types.login,
            payload: {
                uid: 'O7iKmLXBiMU7bjIdw8nPBkxBRty1',
                displayName: null
            }
        })

    })
    
    
    
})

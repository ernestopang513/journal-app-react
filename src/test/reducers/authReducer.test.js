import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

describe('Pruebas en el authReducer', () => {

    test('should realizar el login', () => {
        

        const initState = {};

        const action = {
            type: types.login,
            payload: {
                uid: 'abec',
                displayName: 'Ernesto'
            }
        }
        const state = authReducer(initState, action);


        expect(state).toEqual({
            uid: 'abec',
            name: 'Ernesto'
        })
    });
    test('should realizar el logout', () => {
        

        
        const initState = {
            uid: '123',
            name: 'Ernesto'
        };

        const action = {
            type: types.logout,
        }
        const state = authReducer(initState, action);


        expect(state).toEqual({});
    });
    test('No debe hacer cambios', () => {
        

        
        const initState = {
            uid: '123',
            name: 'Ernesto'
        };

        const action = {
            type: 'alskdjfañsldfj',
        }
        const state = authReducer(initState, action);


        expect(state).toEqual(initState);
    });
    
})
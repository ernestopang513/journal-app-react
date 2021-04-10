import { removeError, setError, uiFinishLoading, uiStartLoading } from "../../actions/ui"
import { types } from "../../types/types";


describe('Pruebas en ui-action', () => {

    test('should las acciones deben funcionar', () => {
        
        const action = setError('Help');
        expect(action).toEqual({
            type: types.uiSetError,
            payload: 'Help'
        })
        
        const removeErrorAction = removeError();
        const startLoadingAction = uiStartLoading();
        const finishLoadinAction = uiFinishLoading();
        
        expect(removeErrorAction).toEqual({
            type: types.uiRemoveError
        })
        expect(startLoadingAction).toEqual({
            type: types.uiStartLoading
        })
        expect(finishLoadinAction).toEqual({
            type: types.uiFinishLoading
        })
    })
    
})

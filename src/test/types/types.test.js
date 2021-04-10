import { types } from '../../types/types';


describe('Pruebas con nuestros tipos', () => {
    test('should have this types', () => {
        expect(types).toEqual({
                login: '[Auth] Login',
                logout: '[Auth] Logout',
            
                uiSetError: '[UI] Set Error',
                uiRemoveError: '[UI] Remove Error',
            
                uiStartLoading: '[UI] Start loading',
                uiFinishLoading: '[UI] Finish loading',
            
                notesAddNew: '[Notes] New note',
                notesActive: '[Notes] Set active note',
                notesLoad: '[Notes] Load notes',
                notesUpdated: '[Notes] Update note',
                notesFileUrl: '[Notes] Update Delete note',
                notesDelete: '[Notes] Deleted note',
                notesLogoutCleanning: '[Notes] Logout Cleaning',
        })
        
    })
    
})
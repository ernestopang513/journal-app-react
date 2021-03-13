import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className = 'notes__main-content'>

            <NotesAppBar />

            <div className = 'notes__content'>

                <input 
                    type = 'text'
                    placeholder = 'Some awasome title'
                    className = 'notes__title-input'
                    autoComplete = 'off'
                />

                <textarea
                    placeholder = 'What happened today'
                    className = 'notes__textarea'
                ></textarea>

                <div className = 'notes__image'>

                    <img 
                        src = 'https://www.backlight.mu/wp-content/uploads/2017/06/KD-2016-DPS-Landscape-Tips-3.jpg'
                        alt = 'imagen'
                    
                    />
                </div>


            </div>
            
        </div>
    )
}

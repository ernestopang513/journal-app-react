import React from 'react'
import { NoteScreen } from '../notes/NoteScreen'
// import { NotingSelected } from './NotingSelected'
import { Sidebar } from './Sidebar'

export const JournalScreen = () => {
    return (
        <div  className = 'journal__main-content'>

            <Sidebar />

            <main>

                {/* <NotingSelected/> */}
                <NoteScreen />


            </main>

        </div>
    )
}

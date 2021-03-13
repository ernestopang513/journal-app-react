import React from 'react'

export const JournalEntry = () => {
    return (
        <div className = 'Journal__entry pointer'>
            <div 
                className = 'journal__entry-picture'
                style = {{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://www.viveusa.mx/sites/default/files/field/image/ciudades_mas_caras.jpg)'
                }}
            >
             </div>
             <div className = 'journal__entry-body'>

                 <p className = 'journal__entry-title' >
                     Un nuevo día
                 </p>
                 <p className = 'journal__entry-content' >
                     Texto de prueba para la aplicación de journal-app cread con react.
                 </p>

             </div>

             <div className = 'journal__entry-date-box'>
                <span>Monday</span>
                <h4>28</h4>
             </div>
        </div>
    )
}

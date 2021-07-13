import React from 'react'
import ShowTeams from './ShowTeams'
import ShowPrizes from './ShowPrizes'
export default function RightSideOfForm() {
    return (
        <div className="right-side-of-form">
            <ShowTeams/>
            <ShowPrizes/>
        </div>
    )
}

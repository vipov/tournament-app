import React from 'react'
import Button from './StyledComponents'
import CreateTournamentForm from './CreateTournamentForm'
import { useHistory } from 'react-router-dom';
export default function MainComponent() {
    const history = useHistory();
    return (
    <div className="app">
        <h1 className="main-header">Create Tournament</h1>
        <CreateTournamentForm/>
        <div className="bottom-part">
            <Button 
            className="bottom-button"
            onClick={()=> (history.push("/tournamentLadder"))}
            >
                <div className="button-text">Create Tournament</div>
            </Button>
        </div>
    </div>  
    )
}

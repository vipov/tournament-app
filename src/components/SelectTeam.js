import React from 'react'
import WindowWithAddedTeams from './WindowWithAddedTeams'
import Button from './StyledComponents'
import { useHistory } from 'react-router-dom';

export default function SelectTeam() {
    const history = useHistory();

    const openCreateTeamWindow = () => {
        console.log('createPrize')
        history.push("./createPrize");
    }


    return (
        <div className="select-team">
            <div className="line">
                <>Select team </>
                <Button onClick={openCreateTeamWindow}><div className="button-text">Create prizes</div></Button>
            </div>
        <WindowWithAddedTeams/>
        </div>

    )
}

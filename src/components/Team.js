import React from 'react'
import Button from './StyledComponents'
import { useDispatch} from "react-redux";
import { addTeam, removeTeam, fixIdmess, extendBracklets } from '../features/tournamentSlice';
import {makeTeamUnavailable, makeTeamAvailable} from '../features/teamsSlice'
import { fillBrecklets } from '../features/tournamentSlice'
export default function Team({name, buttonInscription, team, id}) {
    const dispatch = useDispatch();

    const RemoveTeamAndFixTeamsIds = () => {
        console.log('removing this sht:', id)
        dispatch(removeTeam(id))
        dispatch(fixIdmess())
        dispatch(fillBrecklets())
        dispatch(makeTeamAvailable(name))
        // .then(dispatch(fixIdmess()))
    };

    const addClickedTeam = () => {
        dispatch(addTeam(team))
        dispatch(fillBrecklets())
        dispatch(extendBracklets())
        dispatch(makeTeamUnavailable(team))
    }
    return (
        <div className="team line">
            {buttonInscription==="Add team" ?    
            <> {name}
            {/* {console.log("the team is", team)} */}
                {!team.addedToTournament ? 
                <Button onClick={addClickedTeam}>
                    <div className="button-text">Add team</div>
                </Button> 
                : <p> Already added</p> } 
            </>
            : 
            <> {name} id is: {id}
                <Button onClick={RemoveTeamAndFixTeamsIds}>
                <div className="button-text">Remove team</div>
                </Button>
            </>
            }
        </div>
    )
}

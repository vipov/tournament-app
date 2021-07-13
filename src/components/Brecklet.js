import React, {forwardRef} from 'react'
import {moveTeamForward} from '../features/tournamentSlice';
import { useDispatch} from "react-redux";

    const Brecklet = forwardRef(({team1, team2, index}, ref) => {
    const dispatch = useDispatch();

    return (
            <div className="breclet" ref={ref}>
                <div className="team-field" onClick={() => { dispatch(moveTeamForward({team1, index}))}}>{team1.name}</div>
                <div className="team-field" onClick={() => { dispatch(moveTeamForward({team2, index}))}}>{team2.name}</div>
            </div>
    )
})

export default Brecklet;
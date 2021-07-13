import React from 'react'
import Button from './StyledComponents'
import Team from './Team'
import teams from '../data/teams'
import { useSelector } from "react-redux";
// import { selectTeams } from '../features/tournamentSlice';
import { selectTeams, setPrizesTotalFromFees } from '../features/tournamentSlice';
import { useDispatch } from "react-redux";

export default function WindowWithTeams() {
    let selectedTeams = useSelector(selectTeams);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(setPrizesTotalFromFees());
}, [selectedTeams, dispatch]);

    return (
        
        <>
        <div className="teams">
            {selectedTeams.map(item => {
                return <Team key={item.id} {...item} buttonInscription="Remove team"/>
            })}
        </div>
        </>
    )
}


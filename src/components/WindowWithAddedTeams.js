import React from 'react'
import Team from './Team'
import { selectTeams } from '../features/teamsSlice'
import { useSelector } from "react-redux";

export default function WindowWithAddedTeams() {
    let selectedTeams = useSelector(selectTeams);
    return (
        <>
            <div className="teams">
                {selectedTeams.map(item => {
                return <Team 
                            key={item.id} {...item}  
                            team={item} 
                            buttonInscription="Add team"
                        />
                })
                }
            </div>
        </>
    )
}


import React from 'react'
// import {selectTeams} from '../features/tournamentSlice';
import {selectRewardsTotal} from '../features/tournamentSlice';
import {useSelector} from "react-redux";
import Brecklet from './Brecklet';
// import brecklets from '../data/brecklets'
import {selectBrecklets, resetBrecklets, selectFee, selectName, selectWinner, selectPrizes} from '../features/tournamentSlice';
import { useDispatch} from "react-redux"; //
import arrow from '../features/arrow3.png';
import FlipMove from "react-flip-move";
import Results from './Results';
import { useHistory } from 'react-router-dom';


export default function TournamentLadder() {
    let brecklets = useSelector(selectBrecklets)
    let entryFee = useSelector(selectFee)
    let tournamentName = useSelector(selectName)
    let winner = useSelector(selectWinner)
    let prizes = useSelector(selectPrizes)
    console.log("prizes?", prizes)
    let tournamentPull = useSelector(selectRewardsTotal) 
    const history = useHistory();
    const backToForm = () => {
        history.push("/");
    }

    if(prizes.length===0) {
        return(
        <div className="communicate">
            <h1>no prizes selected</h1>
            <div className="line-center">
                <button onClick={backToForm} > back to form</button>
            </div>
        </div>
        )
    }
    else if (brecklets.length===0) {
        return(
            <div className="communicate">
                <h1>no teams selected</h1>
                <div className="line-center">
                    <button onClick={backToForm} > back to form</button>
                </div>
            </div>
            )
    }
    else
    return (
        <div className="tournament-ladder">
            <h1>Tournament {tournamentName}</h1>
            {console.log('tournament pull:',tournamentPull )}
            <Results 
            tournamentName={tournamentName} 
            entryFee={entryFee} 
            tournamentWinner={winner}
            tournamentPrizes={prizes}
            tournamentPull={tournamentPull}
            />
            <FlipMove className="brecklets">
                {brecklets.map((brecklet,i) =>{
                    return <Brecklet {...brecklet} key={i} index={i}/>
                })}
            </FlipMove>
            {/* <button  onClick={() => {dispatch(resetBrecklets())}}>reset</button> */}
            <div className="line-center">
                <button  onClick={() => {history.push("/")}}>Back to form</button>
            </div>
            
        </div>
    )
}

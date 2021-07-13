import React from 'react'
import NameAndFee from './NameAndFee'
import SelectTeam from './SelectTeam'
import Button from './StyledComponents'
import {useSelector} from "react-redux";
import {selectIsCreateTeamWindowOpen, selectIsCreatePrizeWindowOpen, openCreateTeamWindow} from '../features/tournamentSlice'
import CreateTeam from './CreateTeam';
import CreatePrize from './CreatePrize'
import { useDispatch } from "react-redux";


export default function LeftSideOfForm() {
    const dispatch = useDispatch();
    const createTeamIsOpen = useSelector(selectIsCreateTeamWindowOpen);
    const createPrizeIsOpen = useSelector(selectIsCreatePrizeWindowOpen);

    return (
        <div className="left-side-of-form">
            <NameAndFee/>
            <SelectTeam/>
            <div className="create-prize-button">
                <Button 
                onClick={() => dispatch(openCreateTeamWindow())}
                >
                <div className="button-text">Create team</div>
                </Button>
            </div>
            {createTeamIsOpen && <CreateTeam />} 
            {createPrizeIsOpen && <CreatePrize />} 
        </div>
    )
}

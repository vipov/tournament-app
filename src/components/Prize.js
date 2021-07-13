import React from 'react'
import Button from './StyledComponents'
import {openCreatePrizeWindow} from '../features/tournamentSlice';
import { useDispatch } from "react-redux";

export default function Prize({name}) {
    const dispatch = useDispatch();
    return (
        <div className="line">
            <> {name} </>
            <div className="button-and-close-icon">
            <Button onClick={() => dispatch(openCreatePrizeWindow())}> 
                <div className="button-text">Edit prize</div>
            </Button>
            </div>
        </div>
    )
}

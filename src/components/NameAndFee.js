import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from "react-redux";
import {setEntryFee, setName, selectName} from '../features/tournamentSlice';
import {useSelector} from "react-redux";


export default function NameAndFee() {
    const dispatch = useDispatch();
    const submitNameAndFee = (data, event) => {
        console.log('data:', data)
        event.preventDefault();
        dispatch(setEntryFee(data.entryFee));
        dispatch(setName(data.teamName));
        event.target.reset();
        }

    const {register, formState: { errors }, handleSubmit} = useForm({criteriaMode: "all"});
    return (
        <div className="name-and-fee">
            <div className="line">
                <>Tournament name</>
                <form onSubmit={handleSubmit(submitNameAndFee)}>
                    <input 
                    placeholder='Team name'
                    {...register("teamName", {required: "This input is required."})}
                    />
                    <input
                    placeholder='Entry fee' 
                    {...register("entryFee", {required: "This input is required."})}
                    />
                    <input type="submit"
                    className="hidden-submit"
                    value="Submit"
                    />
                </form>

            </div>
        </div>
    )
}

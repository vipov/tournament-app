import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form"; 
import {FaWindowClose} from "react-icons/fa";
import { useDispatch} from "react-redux";
import {closeCreateTeamWindow} from '../features/tournamentSlice'
import {addTeam} from '../features/teamsSlice'
// import "../style.css";
// https://codesandbox.io/s/react-hook-form-v7-errormessage-multiple-error-messages-forked-vi398?file=/src/index.js
export default function CreateTeam() {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    criteriaMode: "all"
  });
  const onSubmit = (data) => 
  {
    console.log(data);
    dispatch(addTeam(data))
    dispatch(closeCreateTeamWindow())
  }
  
  
  

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="create-team">
      <div className="line">
        <input
          placeholder="Team name"
            {...register("teamName", {
              required: "This input is required.",
              pattern: {
                // value: /\d+/,
                value: /^[A-Za-z]+$/i,
                message: "Letters only ffs"
              },
              minLength: {
                value: 3,
                message: "This input must exceed 3 characters"
              }
            }
            )}
          /> 
          <ErrorMessage
            errors={errors}
            name="teamName"
            render={({ messages }) => {
              console.log("messages", messages);
              return messages
                ? Object.entries(messages).map(([type, message]) => (
                    <p key={type}>{message}</p>
                  ))
                : null;
            }}
          />
      {/* <div className="line-align-right"> </div> */}
        <FaWindowClose 
        className="nav-icon"
        onClick={()=> dispatch(closeCreateTeamWindow())}
        />
      </div>

      <h1>Player 1</h1>
      <div className="line">
        <input
        placeholder="Player 1 name"
          {...register("player1Name", {
            required: "This input is required.",
            pattern: {
              // value: /\d+/,
              value: /^[A-Za-z]+$/i,
              message: "Letters only ffs"
            },
            minLength: {
              value: 3,
              message: "This input must exceed 3 characters"
            }
          }
          )}
        />
        <ErrorMessage
          errors={errors}
          name="player1Name"
          render={({ messages }) => {
            console.log("messages", messages);
            return messages
              ? Object.entries(messages).map(([type, message]) => (
                  <p key={type}>{message}</p>
                ))
              : null;
          }}
        />
        <input
        placeholder="Player 1 age"
          {...register("player1Age", {
            required: "This input is required.",
            pattern: {
              value:  /\d+/,
              message: "This input is number only."
            },
            maxLength: {
              value: 2,
              message: "2 digits max"
            }
          })}
        />

        <ErrorMessage
          errors={errors}
          name="player1Age"
          render={({ messages }) => {
            console.log("messages", messages);
            return messages
              ? Object.entries(messages).map(([type, message]) => (
                  <p key={type}>{message}</p>
                ))
              : null;
          }}
        />
          <input
          placeholder="Player 1 email"
          {...register("player1Email", {
            required: "This input is required.",
            pattern: {
              value:  /^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
              message: "mail."
            },
            maxLength: {
              value: 55,
              message: "55 digits max"
            }
          })}
        />

        <ErrorMessage
          errors={errors}
          name="player1Email"
          render={({ messages }) => {
            console.log("messages", messages);
            return messages
              ? Object.entries(messages).map(([type, message]) => (
                  <p key={type}>{message}</p>
                ))
              : null;
          }}
        />
      </div>
      <input 
      type="submit"
      placeholder="Player 3 email" 
      value="Submit"
      />
    </form>
  );
}



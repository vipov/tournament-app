// moveTeamForward: (state, action) => {
//     console.log('moving')
//     let breckletId = action.payload.index;
//     let teamToMoveForward;
//     let team1 = action.payload.team1;
//     let team2 = action.payload.team2;
//     console.log('action.payload', action.payload)
  
//     if(team1 === undefined) {
//       console.log( `team2: ${team2.name}, ${breckletId}`)
//       teamToMoveForward = team2
//       return {...state, brecklets:[
//         ...state.brecklets.slice(0,breckletId-1), // before the one we are updating
//         {...state[breckletId-1], team1: {...state.brecklets[breckletId-1].team1}, team2: team2},
//         ...state.brecklets.slice(breckletId), // after the one we are updating
//       ]}
//     }
//     else {
//       console.log(`team1: ${team1.name}, index: ${breckletId}`)
//       teamToMoveForward = team1
//       return {...state, brecklets:[
//         ...state.brecklets.slice(0,breckletId-1), // before the one we are updating
//         {...state.brecklets[breckletId-1], team1: team1, team2: {...state.brecklets[breckletId-1].team2 }},
//         ...state.brecklets.slice(breckletId) // after the one we are updating
//       ]}
//     }
// },
// moveTeamForwardOther: (state, action) => {
//   console.log('moving')
//   let breckletId = action.payload.index;
//   let teamToMoveForward;
//   let team1 = action.payload.team1;
//   let team2 = action.payload.team2;
//   console.log('breckletId', breckletId)
//   // brecklet 1 and 2
//   if(breckletId===1 || breckletId===2){
//     if(team1 === undefined) { //we clicked team2 in a brecklet
//       console.log( `team2: ${team2.name}, ${breckletId}`)
//       teamToMoveForward = team2
//       return {...state, brecklets:[
//         {...state[0],  team1: {...state.brecklets[0].team1}, team2: team2},
//         ...state.brecklets.slice(1)
//       ]}
//     }
//     else { //we clicked team1
//       console.log(`team1: ${team1.name}, index: ${breckletId}`)
//       teamToMoveForward = team1
//       return {...state, brecklets:[
//         {...state[0], team1: team1, team2: {...state.brecklets[0].team2}},
//         ...state.brecklets.slice(1)
//       ]}
//     }
//   }
//   // brecklet 3 and 4
//   if(breckletId===3 || breckletId===4){
//     if(team1 === undefined) {
//       console.log( `team2: ${team2.name}, ${breckletId}`)
//       teamToMoveForward = team2
//       return {...state, brecklets:[
//         ...state.brecklets.slice(0,1), // before the one we are updating
//         {...state[1], team1: {...state.brecklets[1].team1}, team2: team2},
//         ...state.brecklets.slice(2), // after the one we are updating
//       ]}
//     }
//     else {
//       console.log(`team1: ${team1.name}, index: ${breckletId}`)
//       teamToMoveForward = team1
//       return {...state, brecklets:[
//         ...state.brecklets.slice(0,1), // before the one we are updating
//         {...state[1], team1: team1, team2:  {...state.brecklets[1].team2}},
//         ...state.brecklets.slice(2), // after the one we are updating
//       ]}
//     }
//   }
//   // brecklet 5 and 6
//   if(breckletId===5 || breckletId===6){
//     if(team1 === undefined) {
//       console.log( `team2: ${team2.name}, ${breckletId}`)
//       teamToMoveForward = team2
//       return {...state, brecklets:[
//         ...state.brecklets.slice(0,2), // before the one we are updating
//         {...state[2], team1: {...state.brecklets[2].team1}, team2: team2},
//         ...state.brecklets.slice(3), // after the one we are updating
//       ]}
//     }
//     else {
//       console.log(`team1: ${team1.name}, index: ${breckletId}`)
//       teamToMoveForward = team1
//       return {...state, brecklets:[
//         ...state.brecklets.slice(0,2), // before the one we are updating
//         {...state[2], team1: team1, team2:  {...state.brecklets[2].team2}},
//         ...state.brecklets.slice(3), // after the one we are updating
//       ]}
//     }
//   }
// },
// moveTeamForwardOtherEven: (state, action) => {
//   console.log('moving')
//   let breckletId = action.payload.index;
//   let teamToMoveForward;
//   let team1 = action.payload.team1;
//   let team2 = action.payload.team2;
//   console.log('breckletId', breckletId)
//   // brecklet 1 and 2, move winner to forward brecklet
//   if(breckletId===1 || breckletId===2){
//     if(team1 === undefined) {
//       console.log( `team2: ${team2.name}, ${breckletId}`)
//       teamToMoveForward = team2
//       if(state.brecklets[0].team1.name==="Empty") {
//         return {...state, brecklets:[
//           {...state[0],  team1: team2, team2: state.brecklets[0].team1},
//           ...state.brecklets.slice(1)
//         ]}
//       }
//       else if (state.brecklets[0].team2.name==="Empty"){
//         return {...state, brecklets:[
//           {...state[0],  team1:  state.brecklets[0].team1 , team2:team2},
//           ...state.brecklets.slice(1)
//         ]}
//       }
//     }
//     else if(state.brecklets[0].team1.name==="Empty")
//     {
//       console.log(`team1: ${team1.name}, index: ${breckletId}`)
//       teamToMoveForward = team1
//       return {...state, brecklets:[
//         {...state[0], team1: team1, team2: {...state.brecklets[0].team2}},
//         ...state.brecklets.slice(1)
//       ]}
//     }
//     else if (state.brecklets[0].team2.name==="Empty"){
//       return {...state, brecklets:[
//         {...state[0],  team1:  state.brecklets[0].team1 , team2:team1},
//         ...state.brecklets.slice(1)
//       ]}
//     }
//   }
//   // brecklet 3 and 4
//   // if(breckletId===3 || breckletId===4){
//   //   if(team1 === undefined) {
//   //     console.log( `team2: ${team2.name}, ${breckletId}`)
//   //     teamToMoveForward = team2
//   //     return {...state, brecklets:[
//   //       ...state.brecklets.slice(0,1), // before the one we are updating
//   //       {...state[1], team1: {...state.brecklets[1].team1}, team2: team2},
//   //       ...state.brecklets.slice(2), // after the one we are updating
//   //     ]}
//   //   }
//   //   else {
//   //     console.log(`team1: ${team1.name}, index: ${breckletId}`)
//   //     teamToMoveForward = team1
//   //     return {...state, brecklets:[
//   //       ...state.brecklets.slice(0,1), // before the one we are updating
//   //       {...state[1], team1: team1, team2:  {...state.brecklets[1].team2}},
//   //       ...state.brecklets.slice(2), // after the one we are updating
//   //     ]}
//   //   }
//   // }
//   // // brecklet 5 and 6
//   // if(breckletId===5 || breckletId===6){
//   //   if(team1 === undefined) {
//   //     console.log( `team2: ${team2.name}, ${breckletId}`)
//   //     teamToMoveForward = team2
//   //     return {...state, brecklets:[
//   //       ...state.brecklets.slice(0,2), // before the one we are updating
//   //       {...state[2], team1: {...state.brecklets[2].team1}, team2: team2},
//   //       ...state.brecklets.slice(3), // after the one we are updating
//   //     ]}
//   //   }
//   //   else {
//   //     console.log(`team1: ${team1.name}, index: ${breckletId}`)
//   //     teamToMoveForward = team1
//   //     return {...state, brecklets:[
//   //       ...state.brecklets.slice(0,2), // before the one we are updating
//   //       {...state[2], team1: team1, team2:  {...state.brecklets[2].team2}},
//   //       ...state.brecklets.slice(3), // after the one we are updating
//   //     ]}
//   //   }
//   // }
// },


//forms



// import React from "react";
// import { useForm } from "react-hook-form";

// export default function App() {
//   const { register, handleSubmit, watch, formState: { errors } } = useForm();
//   const onSubmit = data => console.log(data);

//   console.log(watch("example")); // watch input value by passing the name of it

//   return (
//     /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
//     <form onSubmit={handleSubmit(onSubmit)}  className="create-team">
//       {/* register your input into the hook by invoking the "register" function */}
//       <input defaultValue="test" {...register("example")} />
      
//       {/* include validation with required or other standard HTML validation rules */}
//       <input {...register("exampleRequired", { required: true })} />
//       {/* errors will return when field validation fails  */}
//       {errors.exampleRequired && <span>This field is required</span>}
      
//       <input type="submit" />
//     </form>
//   );
// }


// import React from "react";
// import { useForm } from "react-hook-form";
// import { ErrorMessage } from '@hookform/error-message';
// import addTeam from '../features/teamsSlice';
// import { useDispatch } from "react-redux";


// export default function CreateTeam() {
//  const dispatch = useDispatch();
//   const { register, formState: { errors }, handleSubmit } = useForm();
//   const onSubmit = (data) => {
//     // dispatch(addTeam());
//     let name = data.teamName;
//     console.log('name',name);
//     console.log('data',data);
//     dispatch(addTeam(data));
//   }
 



//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="create-team">
//       <input {...register("teamName", { required: "This is required." })} />
//       <ErrorMessage errors={errors} name="singleErrorInput" />
      
//       <ErrorMessage
//         errors={errors}
//         name="singleErrorInput"
//         render={({ message }) => <p className="error">{message}</p>}
//       />
      
//       <input type="submit" />
//     </form>
//   );
// }


// import React from 'react'
// import { useForm } from 'react-hook-form';
// import Button from '../components/StyledComponents'
// import { useDispatch } from 'react-redux';

// export default function CreateTeam() {
//     const { register, handleSubmit, watch,formState: { errors }} = useForm();
//     const dispatch = useDispatch();

//     const onSubmit = (formData) => {
//         console.log('formData',formData)
//             dispatch(console.log("formData"));
//     };



//     return (
//         <form onSubmit={handleSubmit(onSubmit)} className="create-team">
//             <div className="line-center">
//                 <input 
//                 name="teamName"
//                 placeholder="Team name" 
//                 type="text" 
//                 {...register("teamName", {required:  "Required",})}
//                 />
//                 {errors.teamName && <p className="sendMail__errors">'Name' is required</p> }
//             </div>
//             {/* player 1 row */}
//             <div className="line">  
//                 <input 
//                 name="player1name"
//                 placeholder="player1name" 
//                 type="text" 
//                 {...register("to", {required:  "Required",})}
//                 />
//                 {errors.to && <p className="sendMail__errors">'To' is required</p> }
//                 <input 
//                 name="player1email"
//                 placeholder="player1email" 
//                 type="email" 
//                 {...register("to", {required:  "Required",})}
//                 />
//                 {errors.to && <p className="sendMail__errors">'To' is required</p> }
//             </div>
//             {/* player 2 row */}
//             <div className="line">  
//                 <input 
//                 name="player2name"
//                 placeholder="player2name" 
//                 type="text" 
//                 {...register("to", {required:  "Required",})}
//                 />
//                 {errors.to && <p className="sendMail__errors">'To' is required</p> }
//                 <input 
//                 name="player2email"
//                 placeholder="player2email" 
//                 type="email" 
//                 {...register("to", {required:  "Required",})}
//                 />
//                 {errors.to && <p className="sendMail__errors">'To' is required</p> }
//             </div>
//             {/* player 3 row */}
//             <div className="line">  
//                 <input 
//                 name="player3name"
//                 placeholder="player3name" 
//                 type="text" 
//                 {...register("to", {required:  "Required",})}
//                 />
//                 {errors.to && <p className="sendMail__errors">'To' is required</p> }
//                 <input 
//                 name="player3email"
//                 placeholder="player3email" 
//                 type="email" 
//                 {...register("to", {required:  "Required",})}
//                 />
//                 {errors.to && <p className="sendMail__errors">'To' is required</p> }
//             </div>
//             <div className="line-center">
//                 <Button 
//                 type='submit'
//                 >
//                     <div className="button-text">Send</div>
//                 </Button>
//             </div>
//     </form>
//     )
// }

import { createSlice } from '@reduxjs/toolkit';
import teams from '../data/teams'
// import update from 'react-addons-update';
import update from 'immutability-helper';
export const teamsSlice = createSlice({
  name: 'teams',
  initialState: {
    teams: teams,
    nextTeamId: 4
  },
  reducers: {
    addTeam: (state, action) => {
      // state.user = action.payload; 
      console.log('adding:',action.payload)
      // action.teamName
      // action.player1name
      // action.player1email
      // action.player2name
      // action.player2email
      // action.player3name
      // action.player3email
      return {...state, 
        teams:[...state.teams, 
        {
          // name: action.teamName,
          name: action.payload.teamName,
          members: 
          [
            {
              id:1, 
              name: action.payload.player1Name, 
              email: action.payload.player1Email
            },
            // {
            //   id:2, 
            //   name: action.player2name, 
            //   email: action.player2email
            // }
          ]
        }
      ],
    }
    },
    makeTeamUnavailable: (state, action) => {
      {console.log("the tddeam is", action.payload)}
      // const i = action.payload.id - 1; //id starts with 1 that is suppose to delete team[0] so team[i-1]
      const i = state.teams.findIndex(team => team.name === action.payload.name)
      return {...state, teams:[
        ...state.teams.slice(0,i), // before the one we are updating
        {...state.teams[i], addedToTournament:true},
        ...state.teams.slice(i + 1), // after the one we are updating
      ]}

    },
    makeTeamAvailable: (state, action) => {
      console.log('back available', action.payload)
      let teamName = action.payload;
      const i = state.teams.findIndex(team => team.name === teamName)

      // const i = this.props.posts.findIndex((post) => post.code === postId);
      // const i = action.payload.id - 1; //id starts with 1 that is suppose to delete team[0] so team[i-1]
      return {...state, teams:[
        ...state.teams.slice(0,i), // before the one we are updating
        {...state.teams[i], addedToTournament:false},
        ...state.teams.slice(i + 1), // after the one we are updating
      ]}
    }
  
  
  
  }
  });

export const { addTeam, makeTeamUnavailable, makeTeamAvailable } = teamsSlice.actions;

export const selectTeams = (state) => state.teams.teams;
export default teamsSlice.reducer;




      // return update(state, {
      //   teams: {
      //     1: {addedToTournament:true}
      // }})

      // case 'INCREMENT_LIKES' :
      //   console.log("Incrementing Likes!!");
      //   const i = action.index;
      //   return [
      //     ...state.slice(0,i), // before the one we are updating
      //     {...state[i], likes: state[i].likes + 1},
      //     ...state.slice(i + 1), // after the one we are updating
      //   ]

      // console.log('otherArr', otherArr)
      // otherArr[0].addedToTournament = true;
      // return {...state, teams: {...otherArr} }
      // console.log("tempTeams", tempTeams);
      // console.log("tempTeams[0]", tempTeams[0]);
      // tempTeams[0].name = "true";
      // // tempTeams[0].name = "true";
      // console.log("tempTeams", tempTeams)
      // return{...state, teams: tempTeams}
      // 
      // let indexOfTeam = state.teams.findIndex(team.name===action.payload.name)
      // console.log('indexOfTeam:',indexOfTeam)
      // let teamWithIdAddedAndStatusChanged = {...action.payload, id:state.nextTeamId, addedToTournament: true}
      // return {...state, teams:teamWithIdAddedAndStatusChanged}


            // let tempTeams = [...teams];
      // let otherArr = tempTeams.map(((element,i) => {
      //     // if(i===0) {element.addedToTournament=true};
      //     return element
      //     ;
      // }))
      // const i = action.index;
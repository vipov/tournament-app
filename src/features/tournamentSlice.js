import { createSlice } from '@reduxjs/toolkit';
import brecklets from '../data/brecklets';
import prizes from '../data/prizes';

export const tournamentSlice = createSlice({
  name: 'tournament',
  initialState: {
    name: "Default name",
    rewardsTotal: 0,
    entryFee: 0,
    winner: {},
    teams: [],
    prizes: [],
    nextTeamId: 1,
    createTeamWindow: false,
    createPrizeWindow: false,
    brecklets: []
  },
  reducers: {
    setName: (state, action) => {
    console.log('setting name', action.payload)
    return {...state, name: action.payload}
    },
    setEntryFee: (state, action) => {
    let entryFee = parseInt(action.payload);
    return {...state, entryFee: entryFee}
    },
    setPrizes: (state, action) => {
      // if(action)
      // return {...state,}
      // total = parseFloat(total.toFixed(2));
      let firstPlaceReward = action.payload.firstPlaceReward;
      let firstPlaceRewardPercentage = action.payload.firstPlaceRewardPercentage;
      let secondPlaceReward = action.payload.secondPlaceReward;
      let secondPlaceRewardPercentage = action.payload.secondPlaceRewardPercentage;
      let thirdPlaceReward = action.payload.thirdPlaceReward;
      let thirdPlaceRewardPercentage = action.payload.thirdPlaceRewardPercentage;

      // total = parseFloat(total.toFixed(2));
      // let firstPlaceReward = parseFloat(action.payload.firstPlaceReward.toFixed(2));
      // let firstPlaceRewardPercentage = parseFloat(action.payload.firstPlaceRewardPercentage.toFixed(2));
      // let secondPlaceReward = parseFloat(action.payload.secondPlaceReward.toFixed(2));
      // let secondPlaceRewardPercentage = parseFloat(action.payload.secondPlaceRewardPercentage.toFixed(2));
      // let thirdPlaceReward = parseFloat(action.payload.thirdPlaceReward.toFixed(2));
      // let thirdPlaceRewardPercentage = parseFloat(action.payload.thirdPlaceRewardPercentage.toFixed(2));

      if(firstPlaceReward!="" ){
        if(secondPlaceReward!="") {
          //1 = $, 2 = $
          if(thirdPlaceReward!="") {
            //1=$, 2=$ 3=$
            console.log(`1 = $, 2 = $ 3=$ ${firstPlaceReward, secondPlaceReward, thirdPlaceReward}`)

            firstPlaceReward = parseFloat(firstPlaceReward);
            secondPlaceReward = parseFloat(secondPlaceReward);
            thirdPlaceReward = parseFloat(thirdPlaceReward);
            let tempPrizes = [
            {name: "First place prize", amount:  firstPlaceReward, pullPercentage: 0},
            {name: "Second place prize", amount:  secondPlaceReward, pullPercentage: 0},
            {name: "Third place prize", amount:  thirdPlaceReward, pullPercentage: 0}]
            return {...state, prizes: tempPrizes}
          }
          else {  
            //1 = $, 2 = $ 3=%
            console.log(`1 = $, 2 = $ 3=% ${firstPlaceReward, secondPlaceReward, thirdPlaceReward}`)
            firstPlaceReward = parseFloat(firstPlaceReward);
            secondPlaceReward = parseFloat(secondPlaceReward);
            thirdPlaceRewardPercentage = parseFloat(thirdPlaceRewardPercentage);

            let tempPrizes = [
              {name: "First place prize", amount:  firstPlaceReward, pullPercentage: 0},
              {name: "Second place prize", amount:  secondPlaceReward, pullPercentage: 0},
              {name: "Third place prize", amount:  0, pullPercentage: thirdPlaceRewardPercentage}]
              return {...state, prizes: tempPrizes}
        }
      }
      else { //1=$ 2=%
        if(thirdPlaceReward!="") {
          //1=$ 2=% 3=$
          console.log(`1=$ 2=% 3=$ ${firstPlaceReward, secondPlaceReward, thirdPlaceReward}`)
          firstPlaceReward = parseFloat(firstPlaceReward);
          secondPlaceRewardPercentage = parseFloat(secondPlaceRewardPercentage);
          thirdPlaceReward = parseFloat(thirdPlaceReward);

          let tempPrizes = [
            {name: "First place prize", amount:  firstPlaceReward, pullPercentage: 0},
            {name: "Second place prize", amount:  0, pullPercentage: secondPlaceRewardPercentage},
            {name: "Third place prize", amount:  thirdPlaceReward, pullPercentage: 0}]
            return {...state, prizes: tempPrizes}
      }
      else {
        //1=$ 2=% 3=%
        console.log(`1=$ 2=% 3=% ${firstPlaceReward, secondPlaceReward, thirdPlaceReward}`)
        firstPlaceReward = parseFloat(firstPlaceReward);
        secondPlaceRewardPercentage = parseFloat(secondPlaceRewardPercentage);
        thirdPlaceRewardPercentage = parseFloat(thirdPlaceRewardPercentage);

        let tempPrizes = [
          {name: "First place prize", amount:  firstPlaceReward, pullPercentage: 0},
          {name: "Second place prize", amount:  0, pullPercentage: secondPlaceRewardPercentage},
          {name: "Third place prize", amount:  0, pullPercentage: thirdPlaceRewardPercentage}]
          return {...state, prizes: tempPrizes}  
      }
      }
      }
      else { // 1=%
        if(secondPlaceReward!="") {
          //1 = %, 2 = $
          if(thirdPlaceReward!="") {
            //1=%, 2=$ 3=$
            console.log(`1=$ 2=% 3=% ${firstPlaceReward, secondPlaceReward, thirdPlaceReward}`)
            firstPlaceReward = parseFloat(firstPlaceReward);
            secondPlaceRewardPercentage = parseFloat(secondPlaceRewardPercentage);
            thirdPlaceRewardPercentage = parseFloat(thirdPlaceRewardPercentage);

            let tempPrizes = [
              {name: "First place prize", amount:  firstPlaceReward, pullPercentage: 0},
              {name: "Second place prize", amount:  0, pullPercentage: secondPlaceRewardPercentage},
              {name: "Third place prize", amount:  0, pullPercentage: thirdPlaceRewardPercentage}]
              return {...state, prizes: tempPrizes}  
          }
          else { 
            //1=%, 2=$ 3=%
            console.log(`1=%, 2=$ 3=% ${firstPlaceReward, secondPlaceReward, thirdPlaceReward}`) //1 = %, 2 = $ 3=%

            firstPlaceRewardPercentage = parseFloat(firstPlaceReward);
            secondPlaceReward = parseFloat(secondPlaceRewardPercentage);
            thirdPlaceRewardPercentage = parseFloat(thirdPlaceRewardPercentage);

            let tempPrizes = [
              {name: "First place prize", amount:  0, pullPercentage: firstPlaceRewardPercentage},
              {name: "Second place prize", amount:  0, pullPercentage: secondPlaceRewardPercentage},
              {name: "Third place prize", amount:  0, pullPercentage: thirdPlaceRewardPercentage}]
              return {...state, prizes: tempPrizes}  
        }
      }
      else { //1=% 2=%
        if(thirdPlaceReward!="") {
          //1=% 2=% 3=$
          console.log(`1=% 2=% 3=$ ${firstPlaceReward, secondPlaceReward, thirdPlaceReward}`)
          firstPlaceRewardPercentage = parseFloat(firstPlaceReward);
          secondPlaceRewardPercentage = parseFloat(secondPlaceRewardPercentage);
          thirdPlaceReward = parseFloat(thirdPlaceRewardPercentage);

          let tempPrizes = [
            {name: "First place prize", amount:  0, pullPercentage: firstPlaceRewardPercentage},
            {name: "Second place prize", amount:  0, pullPercentage: secondPlaceRewardPercentage},
            {name: "Third place prize", amount:  thirdPlaceReward, pullPercentage: 0}]
            return {...state, prizes: tempPrizes}  
      }
      else {
         //1=% 2=% 3=%
        console.log(`1=% 2=% 3=% ${firstPlaceReward, secondPlaceReward, thirdPlaceReward}`)
        firstPlaceRewardPercentage = parseFloat(firstPlaceRewardPercentage);
        secondPlaceRewardPercentage = parseFloat(secondPlaceRewardPercentage);
        thirdPlaceRewardPercentage = parseFloat(thirdPlaceRewardPercentage);

        let tempPrizes = [
          {name: "First place prize", amount:  0, pullPercentage: firstPlaceRewardPercentage},
          {name: "Second place prize", amount:  0, pullPercentage: secondPlaceRewardPercentage},
          {name: "Third place prize", amount:  0, pullPercentage: thirdPlaceRewardPercentage}]
          return {...state, prizes: tempPrizes} 
      }
      }
      }

    },
    setPrizesTotalFromFees: (state, action) => {
      console.log("sentry fee2:", state.entryFee)
      let { total, amount } = state.teams.reduce(
        // (cartTotal, cartItem) => {
          (prizeTotal) => {
          let singleTeamFee = state.entryFee;
          prizeTotal.total += singleTeamFee;
          prizeTotal.amount += 1;
          return prizeTotal;
        },
        {
          total: 0,
          amount: 0
        }
      );
      total = parseFloat(total.toFixed(2));
      console.log("total:", total, "amount:", amount)

      // return { ...state, total, amount };
      return { ...state, rewardsTotal: total};
    },
    addTeam: (state, action) => {
      let teamWithIdAdded = {...action.payload, id:state.nextTeamId, addedToTournament:true}
      console.log('tutaj:', teamWithIdAdded)

      let addedTeamName = action.payload.name
      let isTheNameTaken = false;
      state.teams.forEach(team => {
        if(team.name===addedTeamName) {
          console.log('name already taken')
          return isTheNameTaken=true;
        }
      });
      if(isTheNameTaken===true) {return state}
      else {return {...state, nextTeamId: state.nextTeamId+1, teams:[...state.teams, teamWithIdAdded]}}
    },
    removeTeam: (state, action) => {
      console.log('removing',action.payload)
      let tempTeams = state.teams.filter(team => team.id!==action.payload )
      return {...state, teams: tempTeams, nextTeamId: state.nextTeamId - 1}
    },
    fixIdmess: (state, action) => {
      console.log('fixind id mess')
      let tempTeams = state.teams.map((team, i) => {
        console.log('i',i)
        let tempTeam = {...team, id: i+1}
        return tempTeam;
      })

      return {...state, teams:tempTeams}
      // state: {...state, }
      // console.log('teampTeams:',tempTeams)
      // return {...state, teams: tempTeams}
    },
    fillBrecklets: (state, action) => {
      // generate random number 1-8
      var arr = [];
      while(arr.length < state.teams.length){
          var r = Math.floor(Math.random() * state.teams.length);
          if(arr.indexOf(r) === -1) arr.push(r);
      }
      // console.log('add', arr)
      let howManyTeams = state.teams.length;
      // console.log('howManyTeams', howManyTeams)

      // if odd number of teams
      if (howManyTeams%2 ===1) {
      // round to 4 bracklets if 7 teams and so
        let howManyBrecklets = (howManyTeams + 1)/2;
        let tempBrecklets = []

        for (var i = 0; i < howManyBrecklets; i++) {
        // console.log(`arr${i*2}=`, arr[i*2], `arr${i*2+1}=`,arr[i*2+1] )
        tempBrecklets[i] = { team1: state.teams[arr[i*2]],
                            team2: state.teams[arr[i*2+1]]}
                            
          if( howManyBrecklets-1===i) //last bracklet has a bay if odd number of brecklets
          {
            // {console.log("im not here")}
            tempBrecklets[i] = {team1: state.teams[arr[i*2]], team2: {name: "Bay", members: []} }
          }
        }
        // console.log('finalBrecklets',tempBrecklets)
        return {...state, brecklets: tempBrecklets}


      } 
      // if even number of teams
      else {
        let howManyBrecklets = howManyTeams/2;
        let tempBrecklets = []

        for (var i = 0; i < howManyBrecklets; i++) {
        // console.log(`arr${i*2}=`, arr[i*2], `arr${i*2+1}=`,arr[i*2+1] )
        tempBrecklets[i] = { team1: state.teams[arr[i*2]],
                            team2: state.teams[arr[i*2+1]]}
        }
        // console.log('tempBrecklets',tempBrecklets)
        return {...state, brecklets: tempBrecklets}
      }

    },
    extendBracklets: state => {
      let howManyTeams = state.teams.length;
      let howManyBrecklets;
      // if odd number of teams
      if (howManyTeams%2 ===1) {
      // round to 4 bracklets if 7 teams and so
      howManyBrecklets = (howManyTeams + 1)/2 }
      else { howManyBrecklets = howManyTeams/2 };
      //extend with empty brecklets like semi-finals and final
      howManyBrecklets = howManyBrecklets*2 - 1 //for 2 brecklets it's 1 more extra (final), for 4 its 3 more(2x semi-finals and final) and so


      let emptyBrecklets = [];
      let howManyEmptyBrecklets = howManyBrecklets - (howManyBrecklets+1)/2


      for (let index = 0; index < howManyEmptyBrecklets; index++) {
      { emptyBrecklets[index] = {                    
          team1: {  
            name: "Empty",
            members:  [],
            addedToTournament: false},
          team2: {  
            name: "Empty",
            members:  [],
            addedToTournament: false},
        }}
      }

      return {...state, brecklets: [
        ...emptyBrecklets,
        ...state.brecklets
      ]}
    },
    moveTeamForward: (state, action) => {
      console.log('moving')
      let breckletId = action.payload.index;
      let team1 = action.payload.team1;
      let team2 = action.payload.team2;
      console.log('breckletId', breckletId)
      if(breckletId===0) {
      
        if(team1 === undefined) {  console.log("setting winnder:", team2); return {...state, winner: team2}}
        else {  console.log("setting winnder:", team1);  return {...state, winner: team1}}
      }
      // brecklet 1, move winner to forward brecklet
      if(breckletId===1){
        if(team1 === undefined) {
            return {...state, brecklets:[
              {...state.brecklets[0],  team1: team2, team2: state.brecklets[0].team2},
              ...state.brecklets.slice(1)
            ]}}
        else 
          return {...state, brecklets:[
            {...state.brecklets[0], team1: team1, team2: {...state.brecklets[0].team2}},
            ...state.brecklets.slice(1)
          ]}}
      // brecklet 2
      if(breckletId===2){
        if(team1 === undefined) {
            return {...state, brecklets:[
              {...state.brecklets[0],  team2: team2, team1: state.brecklets[0].team1},
              ...state.brecklets.slice(1)
            ]}}
        else 
          return {...state, brecklets:[
            {...state.brecklets[0], team2: team1, team1: {...state.brecklets[0].team1}},
            ...state.brecklets.slice(1)
          ]}}
      // brecklet 3
      if(breckletId===3){
        if(team1 === undefined) {
            return {...state, brecklets:[
              ...state.brecklets.slice(0,1),
              {...state.brecklets[1],  team1: team2, team2: state.brecklets[1].team2},
              ...state.brecklets.slice(2)
            ]}}
        else 
          return {...state, brecklets:[
            ...state.brecklets.slice(0,1),
            {...state.brecklets[1], team1: team1, team2: {...state.brecklets[1].team2}},
            ...state.brecklets.slice(2)
          ]}}
      // brecklet 4
      if(breckletId===4){
        if(team1 === undefined) {
            return {...state, brecklets:[
              ...state.brecklets.slice(0,1),
              {...state.brecklets[1],  team2: team2, team1: state.brecklets[1].team1},
              ...state.brecklets.slice(2)
            ]}}
        else 
          return {...state, brecklets:[
            ...state.brecklets.slice(0,1),
            {...state.brecklets[1], team2: team1, team1: {...state.brecklets[1].team1}},
            ...state.brecklets.slice(2)
        ]}}
        
      // brecklet 5
      if(breckletId===5){
        if(team1 === undefined) {
            return {...state, brecklets:[
              ...state.brecklets.slice(0,2),
              {...state.brecklets[2],  team1: team2, team2: state.brecklets[2].team2},
              ...state.brecklets.slice(3)
            ]}}
        else 
          return {...state, brecklets:[
            ...state.brecklets.slice(0,2),
            {...state.brecklets[1], team1: team1, team2: {...state.brecklets[2].team2}},
            ...state.brecklets.slice(3)
          ]}}
      // brecklet 6
      if(breckletId===6){
        if(team1 === undefined) {
            return {...state, brecklets:[
              ...state.brecklets.slice(0,2),
              {...state.brecklets[1],  team2: team2, team1: state.brecklets[2].team1},
              ...state.brecklets.slice(3)
            ]}}
        else 
          return {...state, brecklets:[
            ...state.brecklets.slice(0,2),
            {...state.brecklets[1], team2: team1, team1: {...state.brecklets[2].team1}},
            ...state.brecklets.slice(3)
        ]}}    
    },
    closeCreateTeamWindow: state => {
      console.log('closing')
      state.createTeamWindow = false;
    },
    openCreateTeamWindow: state => {
      console.log('opening')
      state.createTeamWindow = true;
    },
    closeCreatePrizeWindow: state => {
      console.log('closing')
      state.createPrizeWindow = false;
    },
    openCreatePrizeWindow: state => {
      state.createPrizeWindow = true;
    },
    resetBrecklets: (state) => {
      return {...state, brecklets: brecklets}
    }
  },
});

export const {
  setName,
  setEntryFee,
  setPrizes,
  setPrizesTotalFromFees,
  addTeam, 
  removeTeam,
  closeCreateTeamWindow, 
  openCreateTeamWindow, 
  closeCreatePrizeWindow, 
  openCreatePrizeWindow,
  fixIdmess,
  fillBrecklets,
  extendBracklets,
  moveTeamForward, resetBrecklets } = tournamentSlice.actions;

export const selectTeams = (state) => state.tournament.teams;
export const selectBrecklets = (state) => state.tournament.brecklets;
export const selectIsCreateTeamWindowOpen = (state) => state.tournament.createTeamWindow;
export const selectIsCreatePrizeWindowOpen = (state) => state.tournament.createPrizeWindow;
export const selectName = (state) => state.tournament.name;
export const selectFee = (state) => state.tournament.entryFee;
export const selectWinner = (state) => state.tournament.winner;
export const selectPrizes = (state) => state.tournament.prizes;
export const selectRewardsTotal = (state) => state.tournament.rewardsTotal;
export default tournamentSlice.reducer;







// let howManyTeams = teams.length;
// //round to 4 bracklets if 7 teams and so
// // if (howManyBrecklets%2 ===1) {
// //   howManyBrecklets = howManyBrecklets/2 + 1;
// // } 
// // else howManyBrecklets = howManyBrecklets/2


// let tempBrecklets = []
// for (var i = 0; i < howManyTeams/2; i++) {
// tempBrecklets[i] = { team1: teams[i*2],
//                     team2: teams[i*2+1]}

//   if( (howManyTeams%2 ===1) && howManyTeams/2-1===i) //last bracklet has a bay if odd number of brecklets
//   {
//     {console.log("im not here")}
//     tempBrecklets[i] = {team1: teams[1], team2: {name: "Bay", members: []} }
//   }

// }
// console.log('tempBrecklets',tempBrecklets)
// return {...state, brecklets: tempBrecklets}

// fillBrecklets: (state, action) => {
//   // generate random number 1-8
//   var arr = [];
//   while(arr.length < state.teams.length){
//       var r = Math.floor(Math.random() * state.teams.length);
//       if(arr.indexOf(r) === -1) arr.push(r);
//   }
//   // console.log('add', arr)
//   let howManyTeams = state.teams.length;
//   // console.log('howManyTeams', howManyTeams)

//   // if odd number of teams
//   if (howManyTeams%2 ===1) {
//   // round to 4 bracklets if 7 teams and so
//     let howManyBrecklets = (howManyTeams + 1)/2;
//     let tempBrecklets = []

//     for (var i = 0; i < howManyBrecklets; i++) {
//     // console.log(`arr${i*2}=`, arr[i*2], `arr${i*2+1}=`,arr[i*2+1] )
//     tempBrecklets[i] = { team1: state.teams[arr[i*2]],
//                         team2: state.teams[arr[i*2+1]]}
                        
//       if( howManyBrecklets-1===i) //last bracklet has a bay if odd number of brecklets
//       {
//         // {console.log("im not here")}
//         tempBrecklets[i] = {team1: state.teams[arr[i*2]], team2: {name: "Bay", members: []} }
//       }
//     }
//     console.log('tempBrecklets',tempBrecklets)
//     return {...state, brecklets: tempBrecklets}


//   } 
//   // if even number of teams
//   else {
//     let howManyBrecklets = howManyTeams/2;
//     let tempBrecklets = []

//     for (var i = 0; i < howManyBrecklets; i++) {
//     // console.log(`arr${i*2}=`, arr[i*2], `arr${i*2+1}=`,arr[i*2+1] )
//     tempBrecklets[i] = { team1: state.teams[arr[i*2]],
//                         team2: state.teams[arr[i*2+1]]}
//     }
//     console.log('tempBrecklets',tempBrecklets)
//     return {...state, brecklets: tempBrecklets}
//   }

// },


// for (let index = 0; index < howManyBrecklets; index++) {
//   if(index < ( (howManyBrecklets+1)/2) ) // for 7 bracklets its 4 with teams so 7+1/2
//    { 
//     // tempBrecklets[index] = state.brecklets[index] 
//     // console.log(`state.brecklets[${index}]`, state.brecklets[index] )
//     // return tempBrecklets[index] 
//   } // normal brecklets
//   else { tempBrecklets[index] = {                    
//     team1: {  
//       name: "Empty1",
//       members:  [],
//       addedToTournament: false},
//     team2: {  
//       name: "Empty2",
//       members:  [],
//       addedToTournament: false},
//   }}


//  //       id: 999,
//   //       name: "team 0",
//     // else {
//   //   let emptyBrecklet = {
//   //     team1: {  
//  //       members:  [],
//   //       addedToTournament: false}
//   //     ,team2: {            
//   //       id: 999,
//   //       name: "team 0",
//   //       members:  [],
//   //       addedToTournament: false}}
//   //   return tempBrecklets[index] = emptyBrecklet } // empty brecklets
//   // if(state.teams[index].name === "undefined") 
//   // return tempBrecklets[index] = state.teams[index];
//   // else {
//   //   let emptyTeam = {id:999, name: "Empty", members:[], addedToTournament:true}
//   //   return tempBrecklets[index] = emptyTeam;
//   // }
// }

      // for (let index = 0; index < howManyBrecklets; index++) {
      //   if(state.teams[index].name === "undefined") 
      //   return tempBrecklets[index] = state.teams[index];
      //   else {
      //     let emptyTeam = {id:999, name: "Empty", members:[], addedToTournament:true}
      //     return tempBrecklets[index] = emptyTeam;
      //   }
      // }

      // const i = (howManyBrecklets+1)/2 // for 7 brecklets it's 4 with teams, so find i = 4
      // return {...state, brecklets: [
      // ...state.brecklets.slice(0,i),
      // ...emptyBrecklets 
      // ]}





      // if(team1 === undefined) {
      //   console.log( `team2: ${team2.name}, ${breckletId}`)
      //   teamToMoveForward = team2
      //   return {...state, brecklets:[
      //     ...state.brecklets.slice(0,breckletId-1), // before the one we are updating
      //     {...state[breckletId-1], team1: {...state.brecklets[breckletId-1].team1}, team2: team2},
      //     ...state.brecklets.slice(breckletId), // after the one we are updating
      //   ]}
      // }
      // else {
      //   console.log(`team1: ${team1.name}, index: ${breckletId}`)
      //   teamToMoveForward = team1
      //   return {...state, brecklets:[
      //     ...state.brecklets.slice(0,breckletId-1), // before the one we are updating
      //     {...state.brecklets[breckletId-1], team1: team1, team2: {...state.brecklets[breckletId-1].team2 }},
      //     ...state.brecklets.slice(breckletId) // after the one we are updating
      //   ]}
      // }
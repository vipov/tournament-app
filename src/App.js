import React from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreatePrize from './components/CreatePrize'
import MainComponent from './components/MainComponent';
import './App.css';
import Ahref from './components/Ahref';
import TournamentLadder from './components/TournamentLadder';
function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={MainComponent}/>
      <Route path="/createPrize" component={CreatePrize}/>
      <Route path="/ahref" component={Ahref}/>
      <Route path="/tournamentLadder" component={TournamentLadder}/>
      </Switch>
    </Router>
  );
}

export default App;











// import React from 'react';
// import CreateTournamentForm from './components/CreateTournamentForm'
// import Button from './components/StyledComponents'
// import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import './App.css';

// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/mail">
//                 <Mail/>
//             </Route>
//         <Route path="/">
            
//         </Route>
//       </Switch>

//       <div className="app">
//         <h1 className="main-header">Create Tournament</h1>
//         <CreateTournamentForm/>
//         <div className="bottom-part">
//             <Button className="bottom-button"><div className="button-text">Create Tournament</div></Button>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

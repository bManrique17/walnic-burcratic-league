import React, { Component } from 'react';

import AddTeam from './AddTeam';
import AddMatch from './AddMatch';
import Table from './Table';
import Remove from './Remove';
import Historial from './Historial';

class App extends Component {

  constructor() {
    super();
    this.state = {
      teams: [],
      matchs: []
    };
    this.updateTeams = this.updateTeams.bind(this);
    this.updateMatchs = this.updateMatchs.bind(this);
    this.deleteAll = this.deleteAll.bind(this);
  }

  getResponse(){
    this.updateTeams();
    this.updateMatchs();
  }

  componentDidMount(){
    this.updateTeams();
    this.updateMatchs();
  }

  updateTeams(){
    let teams = localStorage.getItem('teams');
    let arr = [];
    if(teams){
      arr = JSON.parse(teams);
      arr = Array.from(new Set(arr));
      this.setState({teams: arr});
    }
  }

  updateMatchs(){
    let matchs = localStorage.getItem('matchs');
    let arr = [];
    if(matchs){
      arr = JSON.parse(matchs);
      arr = Array.from(new Set(arr));
      this.setState({matchs: arr});
    }
  }

  deleteAll(){
    localStorage.removeItem('matchs');
    localStorage.removeItem('teams');
    this.setState()
    this.updateTeams();
    this.updateMatchs();
    this.setState({matchs: [],teams: []});
  }

  render (){
    const _teams = this.state.teams;
    const _matchs = this.state.matchs;
    return (
      <div className="App">
        <nav className="orange darken-4">
          <div className="container">
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">Liga Burocratica Walnic</a>
            </div>
          </div>
        </nav>

        <div className="container">
          <div className="row">
            <div className="col s5">
              <AddTeam teams={_teams} callback={this.getResponse.bind(this)}/>
              <AddMatch teams={_teams} matchs={_matchs} callback={this.getResponse.bind(this)}/>
              <Remove teams={_teams} matchs={_matchs} callback={this.getResponse.bind(this)}/>
            </div>
            <div className="col s7">
              <Table teams={_teams} matchs={_matchs}/>
              <Historial matchs={_matchs}/>
            </div>
            <button type="button" onClick={this.deleteAll} className="btn #e64a19 deep-orange darken-2">Eliminar Todo</button>
          </div>
        </div>

      </div>
    );
  }
}


export default App;

import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class AddMatch extends Component {

  constructor() {
    super();

    this.state = {
      team1: '',
      team2: '',
      goals1: 0,
      goals2: 0
    };
    this.setTeam1 = this.setTeam1.bind(this);
    this.setTeam2 = this.setTeam2.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addMatch = this.addMatch.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  componentDidMount(){

  }

  setTeam1(e){
    let index = e.target.selectedIndex;
    this.setState({team1:e.target.options[index].text});
  }

  setTeam2(e){
    let index = e.target.selectedIndex;
    this.setState({team2:e.target.options[index].text});
  }

  addMatch(e) {
    e.preventDefault();
    if(this.state.team1 == this.state.team2){
      alert("Seleccione equipos diferentes.")
      return;
    }
    let matchs = localStorage.getItem('matchs');
    let arr = [];
    if(matchs){
        arr = JSON.parse(matchs);
        arr.push({team1:this.state.team1, team2:this.state.team2, goals1:this.state.goals1, goals2:this.state.goals2});
        arr = Array.from(new Set(arr));
        localStorage.setItem('matchs', JSON.stringify(arr));
    }else{
        arr=[];
        arr.push({team1:this.state.team1, team2:this.state.team2, goals1:this.state.goals1, goals2:this.state.goals2});
        localStorage.setItem('matchs', JSON.stringify(arr));
    }
    window.M.toast({html: 'Partido agregado'});
    this.props.callback();
  }

  render (){
    let teams = this.props.teams;
    let optionItems;
    if(teams != null){
      optionItems = teams.map((team) =>
              <option key={team.name}>{team.name}</option>
      );
    }

    return (
      <div className="AddMatch">
        <div className="card">
          <div className="card-content">
            <form onSubmit={this.addMatch}>
              <h5>Agregar partido</h5>
              <h6>Equipo local</h6>
              <div className="input-field col s10">
                <select className="browser-default" onChange={this.setTeam1}>
                  <option value="" disabled selected>Elija equipo local</option>
                  {optionItems}
                </select>
              </div>
              <div className="input-field col s2">
                <input placeholder="0" name="goals1" type="text" onChange={this.handleChange}/>
              </div>
              <h6>Equipo visitante</h6>
              <div className="input-field col s10">
                <select className="browser-default" onChange={this.setTeam2}>
                  <option value="" disabled selected>Elija equipo visitante</option>
                  {optionItems}
                </select>
              </div>
              <div className="input-field col s2">
                <input placeholder="0" name="goals2" type="text" onChange={this.handleChange}/>
              </div>
              <br/>
              <button type="submit" className="btn #e64a19 deep-orange darken-2">Agregar</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddMatch;

import React, { Component } from 'react';

class Remove extends Component {

  constructor() {
    super();
    this.state = {
      toRemove: '',
    };
    this.delete = this.delete.bind(this);
    this.setRemove = this.setRemove.bind(this);
  }

  setRemove(e){
    let index = e.target.selectedIndex;
    this.setState({toRemove:e.target.options[index].text});
  }

  async delete(e) {
    e.preventDefault();
    let teams = localStorage.getItem('teams');
    let arr = [];
    var i=0;
    if(teams){
      arr = JSON.parse(teams);
      arr = Array.from(new Set(arr));
      for (i = 0; i < arr.length; i++) {
        if(arr[i].name === this.state.toRemove){
          arr.splice(i,1);
          break;
        }
      }
      localStorage.setItem('teams', JSON.stringify(arr));

      let matchs = localStorage.getItem('matchs');
      arr = []
      arr = JSON.parse(matchs);
      arr = Array.from(new Set(arr));

      var newarray = [];
      for (i = 0; i < arr.length; i++) {
        if(arr[i].team1 != this.state.toRemove && arr[i].team2 != this.state.toRemove){
          newarray.push(arr[i]);
        }
      }

      await localStorage.setItem('matchs', JSON.stringify(newarray));

      window.M.toast({html: 'Equipo eliminado'});
      this.props.callback();
    }
    this.setState({toRemove: ''});
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
            <form onSubmit={this.delete}>
              <h5>Eliminar equipo</h5>
              <h6>Se eliminaran todos los partidos en donde participo.</h6>
              <div className="input-field col s12">
                <select className="browser-default" onChange={this.setRemove}>
                  <option value="" disabled selected>Elija equipo a eliminar</option>
                  {optionItems}
                </select>
              </div>
                <button type="submit" className="btn #e64a19 deep-orange darken-2">Eliminar</button>
              <br/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Remove;

import React, { Component } from 'react';

class AddTeam extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      dt: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.addTeam = this.addTeam.bind(this);
  }

  componentDidMount(){

  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  addTeam(e) {
    e.preventDefault();
    let teams = localStorage.getItem('teams');
    let arr = [];
    if(teams){
        arr = JSON.parse(teams);
        arr.push({name:this.state.name,dt:this.state.dt});
        arr = Array.from(new Set(arr));
        localStorage.setItem('teams', JSON.stringify(arr));
    }else{
        arr=[];
        arr.push({name:this.state.name,dt:this.state.dt});
        localStorage.setItem('teams', JSON.stringify(arr));
    }
    window.M.toast({html: 'Equipo agregado'});
    this.props.callback();
    this.setState({name: '', dt: ''});
  }

  render (){
    console.log(this.state.teams);
    return (
      <div className="AddTeam">
        <div className="card">
          <div className="card-content">
            <form onSubmit={this.addTeam}>
              <h5>Agregar Equipo</h5>
              <input name="name" onChange={this.handleChange} value={this.state.name} type="text" placeholder="Nombre del equipo"/>
              <input name="dt" onChange={this.handleChange} value={this.state.dt} type="text" placeholder="Director tecnico"/>

              <button type="submit" className="btn #e64a19 deep-orange darken-2">Agregar</button>

            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default AddTeam;

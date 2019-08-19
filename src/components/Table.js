import React, { Component } from 'react';
import Team from '../utilities/Team'

class Table extends Component {

  constructor() {
    super();

  }

  render (){

    let teams = this.props.teams;
    let matchs = this.props.matchs;

    var _teamsData = [];

    teams.map((team) =>{
      _teamsData.push(new Team(team.name));
    });

    matchs.map((match) => {
      _teamsData.map((team) => {
        if(team.getName() === match.team1){
          team.calculateHome(match)
        }
        if(team.getName() === match.team2){
          team.calculateAway(match)
        }
      });
    });

    _teamsData.sort(function (a, b) {
      if (a.get_pts() < b.get_pts()) {
        return 1;
      }else if (a.get_pts() > b.get_pts()) {
        return -1;
      }else{
        if (a.get_dg() < b.get_dg()) {
          return 1;
        }
        if (a.get_dg() > b.get_dg()) {
          return -1;
        }
        return 0;
      }
    });

    _teamsData.sort(function (a, b) {

    });

    var teamsData = [];

    _teamsData.map((team) => {
    teamsData.push([team.getName(),
                              team.get_pj(),
                            team.get_g(),
                          team.get_e(),
                        team.get_p(),
                      team.get_gf(),
                    team.get_gc(),
                  team.get_dg(),
                team.get_pts()])
    });



    let optionItems;
    if(teams != null){
      optionItems = teams.map((team) =>
              <option key={team.name}>{team.name}</option>
      );
    }


    return (
      <div className="Table">
        <h5>Tabla de Posiciones</h5>
        <table>
          <thead>
            <tr>
              <th>Equipo</th>
              <th>PJ</th>
              <th>G</th>
              <th>E</th>
              <th>P</th>
              <th>GF</th>
              <th>GC</th>
              <th>DG</th>
              <th>Pts</th>
            </tr>
          </thead>
          <tbody>
            {
              teamsData.map(team => {
                return (
                  <tr>
                    <td>{team[0]}</td>
                    <td>{team[1]}</td>
                    <td>{team[2]}</td>
                    <td>{team[3]}</td>
                    <td>{team[4]}</td>
                    <td>{team[5]}</td>
                    <td>{team[6]}</td>
                    <td>{team[7]}</td>
                    <td>{team[8]}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;

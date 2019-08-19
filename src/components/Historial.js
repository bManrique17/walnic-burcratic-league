import React, { Component } from 'react';


class Historial extends Component {

  constructor() {
    super();
  }

  render (){

    return (
      <div>
        <h5>Partidos llevados a cabo hasta el momento</h5>
        <table className="striped">
          <thead>
            <tr>
              <th>Local</th>
              <th>Resultado</th>
              <th>Visitante</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.matchs.map(match => {
                return (
                  <tr>
                    <td>{match.team1}</td>
                    <td>{match.goals1} - {match.goals2}</td>
                    <td>{match.team2}</td>
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

export default Historial;

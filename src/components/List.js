import React, {Component} from 'react';

export default class List extends Component {

  render() {
    return (
      <div className="list">
      <ul>
      {this.props.films.map(film => <li className="listEl" key={film}>{film}</li>)}
      </ul>
      </div>
    )
  }
}

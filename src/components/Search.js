import React, {Component} from 'react';

export default class Search extends Component {

  render() {
    return (
      <div className="search">
        <form onSubmit={this.props.handleSubmit}>
          <input className="SearchInput" placeholder="Please enter the URL of the actor.." onChange={this.props.handleChange} />
          <br />
          <input className="SearchBtn" type="submit" value="Search" />
        </form>
      </div>
    )
  }
}

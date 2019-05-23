import React, {Component} from 'react';
import './App.css';
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {

  state = {
    films: [],
    searchedURL: "",
    searchedActor: "",
  }

  componentDidMount() {
    return fetch(`http://dbpedia.org/sparql?default-graph-uri=http%3A%2F%2Fdbpedia.org&query=PREFIX+owl%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2002%2F07%2Fowl%23%3E%0D%0APREFIX+xsd%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23%3E%0D%0APREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0D%0APREFIX+foaf%3A+%3Chttp%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F%3E%0D%0APREFIX+dc%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0D%0APREFIX+%3A+%3Chttp%3A%2F%2Fdbpedia.org%2Fresource%2F%3E%0D%0APREFIX+dbpedia2%3A+%3Chttp%3A%2F%2Fdbpedia.org%2Fproperty%2F%3E%0D%0APREFIX+dbpedia%3A+%3Chttp%3A%2F%2Fdbpedia.org%2F%3E%0D%0APREFIX+skos%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2004%2F02%2Fskos%2Fcore%23%3E%0D%0ASELECT+%3Ff+WHERE+%7B%0D%0A%3Ff+rdf%3Atype+dbo%3AFilm+.%0D%0A%3Ff+dbo%3Astarring+dbr%3A${this.state.searchedActor}+.%0D%0A%7D&output=json`)
      .then(resp => resp.json())
      .then(films => films.results.bindings.map(film =>
        this.setState({films: [...this.state.films, film.f.value.split('/').slice(-1)[0].split('_').join(' ')]})
      ))
  }

  handleSubmit = event => {
      event.preventDefault()
      this.componentDidMount()
      this.setState({films: []})
    }

  handleChange = event => {
    this.setState({
      searchedURL: event.target.value,
      searchedActor: event.target.value.split('/').slice(-1)[0],
    })
  }


  render() {
    return (
      <div className="App">
        <h1>Wikipedia Search Tool</h1>
        <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange} searchedURL={this.state.searchedURL} />
        <List films={this.state.films} />
      </div>
    )
  }
}

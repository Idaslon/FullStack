import React, { Component } from 'react';
import TechItem from './TechItem';

interface IDeleteHandler {
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>;
  tech: string;
}


class TechList extends Component {
  state = {
    newTech: '',
    techs: [
      'Node',
      'React',
      'React Native',
    ]
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ newTech: e.target.value })
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ''
     })
  }

  handleDelete = ({ tech } : IDeleteHandler) => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <ul>
        {this.state.techs.map(tech => (
          <TechItem
            key={tech}
            tech={tech}
            onDelete={this.handleDelete}
          />
        ))}
      </ul>
      <input
        type="text"
        onChange={this.handleInputChange}
        value={this.state.newTech}
      />
      <button type="submit">Enviar</button>
      </ form>
    )
  }
}

export default TechList;

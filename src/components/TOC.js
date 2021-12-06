import React, { Component } from 'react';

class TOC extends Component {
  render() {
    console.log('TOC render');
    const lists = [];
    const data = this.props.data;

    for (const dataKey in data) {
      lists.push(
        <li key={data[dataKey].id}>
          <a href={'/contents/' + data[dataKey].id + '.html'}>{data[dataKey].title}</a>
        </li>,
      );
    }

    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    );
  }
}

export default TOC;

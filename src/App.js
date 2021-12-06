import React, { Component } from 'react';
import Contents from './components/Contents';
import Subject from './components/Subject';
import TOC from './components/TOC';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'welcome',
      subject: { title: 'WEB', sub: 'World Wide Web' },
      welcome: { title: 'Welcome', desc: 'Hello! React!!' },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is good' },
        { id: 2, title: 'CSS', desc: 'CSS is good' },
        { id: 3, title: 'PUBLISHING', desc: 'PUBLISHING is good' },
      ],
    };
  }
  render() {
    console.log('App Render');

    let _title,
      _desc = null;
    let mode = this.state.mode;
    if (mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (mode === 'read') {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }

    console.log('render', this);

    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
        <TOC data={this.state.contents}></TOC>
        <Contents title={_title} desc={_desc}></Contents>
      </div>
    );
  }
}

export default App;

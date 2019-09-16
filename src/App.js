import React from 'react';
import './App.css';
class App extends React.Component {
  state = {
    status: 'ALL',
    classification: 'ALL'
  }

  statusChanged = (e) => {
    this.setState({ status: e.target.value })
  }
  classificationChanged = (e) => {
    this.setState({ classification: e.target.value })
  }

  render() {
    const status = ['ALL', 'PROVISIONAL', 'CONFIRMED', 'WARNING',]
    const classification = ['ALL', 'Public Event', 'Structures', 'Event',]
    return (
      <div className="App">
        <header className="App-header">
          <label>Status</label>
          <select onChange={this.statusChanged} value={this.state.status}>
            {status.map(i => (<option value={i}>{i}</option>))}
          </select>
          <label>Classification</label>
          <select onChange={this.classificationChanged}
            value={this.state.classification}>
            {classification.map(i => (<option value={i}>{i}</option>))}
          </select>
        </header>
      </div>
    )
  }
}
export default App;
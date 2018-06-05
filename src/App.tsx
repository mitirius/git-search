import * as React from 'react';
import './App.css';

interface State {
  userQuery: string;
  repositoryQuery: string;
}

class App extends React.PureComponent<{}, State> {

  state = {
    userQuery: 'hbhujnj',
    repositoryQuery: 'bhubhj'
  };

  callback1 = (event: React.ChangeEvent<HTMLInputElement>) => this.setState({ repositoryQuery: event.target.value });
  callback2 = (event: React.ChangeEvent<HTMLInputElement>) => this.setState({ userQuery: event.target.value });

  search = (evt: React.SyntheticEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    const URL = `https://api.github.com/issues/${this.state.userQuery}/${this.state.repositoryQuery}`;
    console.log('url', URL);
  }

  render() {
    return (
      <div className="app">
        <div className="app-title">Git Issue</div>
        <div className="app-search">
          <form>
            <div className="form-group">
              <label>Owner Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Search for Owner..."
                aria-label="Search for Owner"
                value={this.state.userQuery}
                onChange={this.callback2}
              />
            </div>
            <div className="form-group">
              <label>Repository</label>
              <input
                type="text"
                className="form-control"
                placeholder="Search for Git Repository..."
                aria-label="Search for Git Repository"
                value={this.state.repositoryQuery}
                onChange={this.callback1}
              />
            </div>
            <button
              className="btn btn-outline-warning"
              type="submit"
              onClick={this.search}
            >
              Search
            </button>
          </form>
        </div>
        <div className="profile">
          <div>Artist Name</div>
          <div>Artist Picture</div>
          <div><a href="">link to github page</a></div>
        </div>
      </div>
    );
  }
}

export default App;
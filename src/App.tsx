import * as React from 'react';
import './App.css';
import IssuesProfile, { Issue } from './components/IssuesProfile';
import Repository from './components/Repository';

interface State {
  userQuery: string;
  repositoryQuery: string;
  issues: Issue[];
  repositories: Repository[];
}

export interface Repository {
  name: string;
  id: string;
}

class App extends React.PureComponent<{}, State> {

  state = {
    userQuery: '',
    repositoryQuery: '',
    issues: [],
    repositories: []
  };

  // callback1 = (event: React.ChangeEvent<HTMLSelectElement>) => 
  // this.setState({ repositoryQuery: event.target.value });
  callback2 = (event: React.ChangeEvent<HTMLInputElement>) => this.setState({ userQuery: event.target.value });

  search = (evt: React.SyntheticEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    const URL = `https://api.github.com/repos/${this.state.userQuery}/${this.state.repositoryQuery}/issues`;
    fetch(URL, {
      headers: {
        'Accept': 'application/vnd.github.v3+json'
      }
    })
      .then(response => response.json())
      .then(json => this.setState({ issues: json }));
  }

  repositorySearch = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (this.state.userQuery !== null) {
      const REPO_URL = `https://api.github.com/users/${this.state.userQuery}/repos`;
      fetch(REPO_URL)
        .then(response => response.json())
        .then(json => this.setState({ repositories: json }));
    }
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
                onChange={this.repositorySearch}
              />
            </div>
            <Repository repositories={this.state.repositories} />
            <button
              className="btn btn-outline-warning"
              type="submit"
              onClick={this.search}
            >
              Search
            </button>
          </form>
        </div>
        <IssuesProfile
          issues={this.state.issues}
        />
      </div>
    );
  }
}

export default App;
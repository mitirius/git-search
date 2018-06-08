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

  repoChange = (event: React.ChangeEvent<HTMLInputElement>) => this.setState({ repositoryQuery: event.target.value });
  userChange = (event: React.ChangeEvent<HTMLInputElement>) => this.setState({ userQuery: event.target.value });

  search = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    const URL = `https://api.github.com/repos/${this.state.userQuery}/${evt.target.value}/issues`;
    fetch(URL, {
      headers: {
        'Accept': 'application/vnd.github.v3+json'
      }
    })
      .then(response => response.json())
      .then(json => {
        if (json.constructor === Array) {
          this.setState({ issues: json });
        }
      });
  }

  repositorySearch = (evt: React.FocusEvent<HTMLSelectElement>) => {
    if (this.state.userQuery !== null) {
      const REPO_URL = `https://api.github.com/users/${this.state.userQuery}/repos`;
      fetch(REPO_URL)
        .then(response => response.json())
        .then(json => {
          if (json.constructor === Array) {
            this.setState({ repositories: json });
          }
        });
    }
  }

  render() {
    return (
      <div className="app">
        <div className="app-title">Git Issue Search</div>
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
                onChange={this.userChange}
              />
            </div>
            <Repository
              repositories={this.state.repositories}
              search={this.search}
              repositorySearch={this.repositorySearch}
            />
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
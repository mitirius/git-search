import * as React from 'react';
import '../App.css';
import { Repository } from '../App';

interface Props {
    // callback1: () => string;
    repositories: Repository[];
}

export default function Repository(props: Props) {
    return (
        <div className="form-group">
            <label>Repository</label>
            <select
                className="custom-select"
            >
                {props.repositories.map(repo => <option value={repo.name} key={repo.id}>{repo.name}</option>)}
            </select>
        </div>
    );
}
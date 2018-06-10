import * as React from 'react';
import '../App.css';
import { Repository } from '../App';

interface Props {
    search: (evt: React.ChangeEvent<HTMLSelectElement>) => void;
    repositorySearch: (evt: React.FocusEvent<HTMLSelectElement>) => void;
    repositories: ReadonlyArray<Repository>;
}

export default function Repository(props: Props) {
    return (
        <div className="form-group">
            <label>Repository</label>
            <select
                className="custom-select"
                onFocus={props.repositorySearch}
                onChange={props.search}
            >
                <option>Click for Repository Options...</option>
                {props.repositories.map(repo => <option value={repo.name} key={repo.id}>{repo.name}</option>)}
            </select>
        </div>
    );
}
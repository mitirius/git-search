import * as React from 'react';
import '../App.css';
import IssueItem from './IssueItem';

export interface Issue {
    title: string;
    number: number;
    created_at: Date;
    id: number;
    user: {
        login: string;
        avatar_url: string;
        html_url: string;
    };

}

export interface Props {
    issues: Issue[];
}

export default function IssuesProfile(props: Props) {
    return (
        <ul className="profile">
            {props.issues.map(issue => <IssueItem key={issue.id.toString()} issue={issue} />)}
        </ul>
    );
}
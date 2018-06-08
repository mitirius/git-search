import * as React from 'react';
import '../App.css';
import { Issue } from './IssuesProfile';

interface Props {
    key: string;
    issue: Issue;
}

export default function IssueItem(props: Props) {
    return (
        <li>
            <div>
                <p>Title: {props.issue.title}</p>
                <p>Number: {props.issue.number}</p>
                <p>Creation Date: {props.issue.created_at}</p>
            </div>
            <div>
                <p>Author's Name: {props.issue.user.login}</p>
                <img src={props.issue.user.avatar_url} alt="" />
                <a href={props.issue.user.html_url}>Link to Github Page</a>
            </div>
        </li>
    );
}
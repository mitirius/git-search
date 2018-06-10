import * as React from 'react';
import '../App.css';
import { Issue } from './IssuesProfile';

interface Props {
    key: string;
    issue: Issue;
}

export default function IssueItem(props: Props) {
    return (
        <li className="issue-item row">
            <div className="issue col-sm-6">
                <h6 className="issue--header">Title:</h6>
                <p className="issue--details">{props.issue.title}</p>
                <h6 className="issue--header">Number:</h6>
                <p className="issue--details">Number: {props.issue.number}</p>
                <h6 className="issue--header">Creation date:</h6>
                <p className="issue--details">Creation Date: {props.issue.created_at}</p>
            </div>
            <div className="issue-item--author author col-sm-6">
                <img className="author--image" src={props.issue.user.avatar_url} alt="author's image" />
                <p className="author--name">Author's Name: {props.issue.user.login}</p>
                <a className="author--gitPage" href={props.issue.user.html_url}>Link to Github Page</a>
            </div>
        </li>
    );
}
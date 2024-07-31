import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './OpenSource.css';
import GithubCard from '../GithubCard/GithubCard';
import { openSourceProjects } from '../../portfolio';

// Define the interface for the repository data
interface Repo {
    html_url: string;
    name: string;
    description: string | null;
    language: string | null;
    stargazers_count: number;
    forks_count: number;
    size: number;
}

function OpenSource() {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        // GitHub REST API endpoint for fetching user repositories
        const GITHUB_REST_API = 'https://api.github.com/users/carefreelife98/repos';

        // API call function
        async function fetchRepositories() {
            try {
                const response = await axios.get(GITHUB_REST_API, {
                    headers: {
                        'Content-Type': 'application/json',
                        // 'Authorization': `Bearer YOUR_PERSONAL_ACCESS_TOKEN`, // Uncomment if using a token for authenticated requests
                    },
                });

                const repos = response.data.map((repo: Repo) => ({
                    url: repo.html_url || '',
                    name: repo.name || 'Unknown',
                    description: repo.description || 'No description provided',
                    primaryLanguage: {
                        name: repo.language || 'Unknown',
                    },
                    stargazers: {
                        totalCount: repo.stargazers_count || 0,
                    },
                    forkCount: repo.forks_count || 0,
                    diskUsage: repo.size || 0,
                }));

                setRepos(repos.slice(0, 6));
            } catch (error) {
                console.error('Error fetching repositories:', error);
                setRepos([]);
            }
        }

        fetchRepositories().then(r => console.log('fetch result: ' + r));
    }, []);

    return (
        <div className="main" id="opensource">
            <h1 className="project-title">{openSourceProjects.title}</h1>
            <div className="repo-cards">
                {/*Repo 데이터가 존재하면 사용*/}
                {repos.map((repo, i) => repo && <GithubCard repos={repo} key={i} />)}
            </div>
            <a href="https://github.com/carefreelife98" target="_blank" rel="noopener noreferrer">More Projects</a>
        </div>
    );
}

export default OpenSource;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './OpenSource.css';
import GithubCard from '../GithubCard/GithubCard';
import { openSourceProjects } from '../../portfolio';

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
    const [repos, setRepos] = useState<Array<{ node: any }> | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const GITHUB_REST_API = 'https://api.github.com/users/carefreelife98/repos';

        async function fetchRepositories() {
            try {
                setIsLoading(true);
                const response = await axios.get(GITHUB_REST_API, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                const repos = response.data.map((repo: Repo) => ({
                    node: {
                        url: repo.html_url || '',
                        name: repo.name || 'Unknown',
                        description: repo.description || 'No description provided',
                        primaryLanguage: repo.language ? {
                            name: repo.language,
                            color: null
                        } : null,
                        stargazers: {
                            totalCount: repo.stargazers_count || 0,
                        },
                        forkCount: repo.forks_count || 0,
                        diskUsage: repo.size || 0,
                    }
                }));

                setRepos(repos.slice(0, 6));
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching repositories:', error);
                setError('Failed to fetch repositories');
                setIsLoading(false);
            }
        }

        fetchRepositories();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="main" id="opensource">
            <h1 className="project-title">{openSourceProjects.title}</h1>
            <div className="repo-cards">
                {repos && repos.map((repo, i) => <GithubCard repos={repo} key={i} />)}
            </div>
            <a href="https://github.com/carefreelife98" target="_blank" rel="noopener noreferrer">More Projects</a>
        </div>
    );
}

export default OpenSource;
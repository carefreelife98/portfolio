import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './OpenSource.css';
import GithubCard from '../GithubCard/GithubCard';
import { openSourceProjects } from '../../portfolio';

function OpenSource() {
    const MAX_REPO_NUM = 6;
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetchRepoData();  // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchRepoData = async () => {
        try {
            console.log('gh token: ' + process.env.REACT_APP_GITHUB_TOKEN)
            const response = await axios.get('https://api.github.com/users/carefreelife98/repos', {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
                },
            });

            // 가져온 데이터 중 최대 6개 레포만 저장.
            const limitedRepos = response.data.slice(0, MAX_REPO_NUM);
            setRepos(limitedRepos);
        } catch (error) {
            console.error("Error fetching repositories", error);
        }
    };

    return (
        <div className="main" id="opensource">
            <h1 className="project-title">{openSourceProjects.title}</h1>
            <div className="repo-cards">
                {repos.map((repo, i) => (
                    <GithubCard repos={repo} key={i} />
                ))}
            </div>
            <a href="https://github.com/carefreelife98" target="_blank" rel="noopener noreferrer">More Projects</a>
        </div>
    );
}

export default OpenSource;

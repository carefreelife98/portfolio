import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './OpenSource.css';
import GithubCard from '../GithubCard/GithubCard';
import { openSourceProjects } from '../../portfolio';

function OpenSource() {
    const [ repos, setRepos ] = useState([]);

    useEffect(() => {
        // GitHub GraphQL API 엔드포인트
        const GITHUB_GRAPHQL_API = 'https://api.github.com/graphql';

        // GraphQL 쿼리
        const GET_REPOSITORIES_QUERY =
            `
          query {
            user(login: "carefreelife98") { // 사용자명을 자신의 GitHub 사용자명으로 변경하세요.
              repositories(first: 10) {
                edges {
                  node {
                    url
                    name
                    description
                    primaryLanguage {
                      color
                      name
                    }
                    stargazers {
                      totalCount
                    }
                    forkCount
                    diskUsage
                  }
                }
              }
            }
          }
        `;

        // API 호출 함수
        async function fetchRepositories() {
            try {
                const response = await axios.post(
                    GITHUB_GRAPHQL_API,
                    { query: GET_REPOSITORIES_QUERY },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            // 'Authorization': `Bearer YOUR_PERSONAL_ACCESS_TOKEN`, // 비공개 데이터를 가져오려면 토큰을 여기에 추가하세요.
                        },
                    }
                );

                const repos = response.data.data.user.repositories.edges.map((edge: { node: any; }) => edge.node);
                setRepos(repos.slice(0, 6));
            } catch (error) {
                console.error('Error fetching repositories:', error);
                setRepos([]);
            }
        }

        fetchRepositories().then(r => console.log('github api result: ' + r));
    }, []);

    return (
        <div className="main" id="opensource">
            <h1 className="project-title">{openSourceProjects.title}</h1>
            <div className="repo-cards">
                {repos.map((repo, i) => {
                    return <GithubCard repos={repo} key={i} />;
                })}
            </div>
            <a href="https://github.com/CarefreeLife98" target="_blank" rel="noopener noreferrer">More Projects</a>
        </div>
    );
}
export default OpenSource;
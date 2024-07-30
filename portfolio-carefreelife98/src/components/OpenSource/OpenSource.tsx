import React, { useState, useEffect } from 'react';
import ApolloClient, { gql } from 'apollo-boost';
import './OpenSource.css';
import GithubCard from '../GithubCard/GithubCard';
import { openSourceProjects } from '../../portfolio';

function OpenSource() {
    const [ repos, setRepos ] = useState([]);

    useEffect(() => {
        getRepoData(); // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function encodeBase64(input: string): string {
        return Buffer.from(input).toString('base64');
    }

    const githubSecrets: string | undefined = process.env.REACT_APP_GITHUB_TOKEN;
    const encoded: string = 'Bearer ' + encodeBase64(githubSecrets as string);
    console.log("Encoded:", encoded);

    function getRepoData(): void {
        // I don't know well about this part...
        const client = new ApolloClient({
            uri: "https://api.github.com/graphql",
            request: (operation) => {
                operation.setContext({
                    headers: {
                        authorization: encoded,
                    },
                });
            },
        });

        client
            .query({
                query: gql`
                {
                user(login: "carefreelife98") {
                    pinnedItems(first: 6, types: [REPOSITORY]) {
                        totalCount
                        edges {
                            node {
                                ... on Repository {
                                    name
                                    description
                                    forkCount
                                    stargazers {
                                        totalCount
                                    }
                                    url
                                    id
                                    diskUsage
                                    primaryLanguage {
                                        name
                                        color
                                    }
                                }
                            }
                        }
                    }
                }
            }
            `,
            })
            .then((result) => {
                setrepoFunction(result.data.user.pinnedItems.edges);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function setrepoFunction(arr: []): void {
        setRepos(arr);
    }
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
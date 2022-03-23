import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import { useState, useEffect } from "react";

// https://api.github.com/orgs/rocketseat/repos

const repository = {
  name: "unform",
  description: "Forms in React",
  link: "https://github.com/g7tavares/01-github-explorer",
};

export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos').then(response => response.json()).then(data => setRepositories(data));
    }, []);

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios: </h1>

      <ul>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
      </ul>
    </section>
  );
}

import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function Project() {
    const { slug } = useParams();
    const project = projects.find(p => p.slug === slug);

    if (!project) return <h2>Project not found</h2>;

    return (
        <div className="container">
            <h1>{project.title}</h1>
            <p>{project.description}</p>

            <h3>Tech stack</h3>
            <ul>
                {project.stack.map(s => <li key={s}>{s}</li>)}
            </ul>

            <a href={project.repo} target="_blank" rel="noreferrer">
                Open GitHub repo →
            </a>
        </div>
    );
}
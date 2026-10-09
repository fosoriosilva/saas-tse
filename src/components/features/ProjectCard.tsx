import { Project } from "@/types/project";

type ProjectProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectProps) => {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>

      <p className="mt-3 text-sm leading-6 text-slate-600">
        {project.description}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <li
            key={item}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex gap-3">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            Live Demo
          </a>
        ) : null}

        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            GitHub
          </a>
        ) : null}
      </div>
    </article>
  );
};

export default ProjectCard;

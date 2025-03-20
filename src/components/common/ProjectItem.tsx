interface ProjectItemProps {
  title: string;
  description: string;
}

const ProjectItem = ({ title, description }: ProjectItemProps) => {
  return (
    <div className="project-item">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProjectItem;

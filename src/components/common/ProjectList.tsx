import { useEffect, useState, useRef } from "react";
import ProjectItem from "@/components/common/ProjectItem";

interface Project {
  id: number;
  title: string;
  description: string;
}

interface ProjectListProps {
  apiPath: string; 
}

const ProjectList = ({ apiPath }: ProjectListProps) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const isFetched = useRef(false);

  useEffect(() => {
    if (!isFetched.current) {
      fetch(apiPath)
        .then((res) => res.json())
        .then((data) => {
          console.log(`${apiPath} API 응답 데이터:`, data);
          setProjects(data);
        })
        .catch((error) => console.error(`${apiPath} API 요청 실패:`, error));
      isFetched.current = true;
    }
  }, [apiPath]);

  return (
    <div>
      {projects.map((project) => (
        <ProjectItem key={project.id} title={project.title} description={project.description} />
      ))}
    </div>
  );
};

export default ProjectList;

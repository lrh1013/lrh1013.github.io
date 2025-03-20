import { useState } from "react";
import { Link } from "react-router-dom";
import stProject from "@/components/project/project.module.scss";

interface ProjectItemProps {
  title: string;
}

const ProjectItem = ({ title }: ProjectItemProps) => {
  const [imgSrc, setImgSrc] = useState(`https://picsum.photos/600/600?random=${Math.random()}`);

  return (
    <article className={stProject["project-item"]}>
      <Link to="">
        <div className={stProject["details"]}>
          <h2>{title}</h2>
        </div>
        <picture className={stProject["thumb"]}>
          <img src={imgSrc} alt="" onError={() => setImgSrc("/fallback.jpg")} />
        </picture>
      </Link>
    </article>
  );
};

export default ProjectItem;

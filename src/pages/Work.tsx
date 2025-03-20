import ProjectList from "@/components/project/ProjectList";

const Work = () => {
  return (
    <>
      <section>
        <div className="maxinner">
          <ProjectList apiPath="/api/portfolio" />
        </div>
      </section>
    </>
  );
};

export default Work;

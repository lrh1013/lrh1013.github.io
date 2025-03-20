import ProjectList from "@/components/common/ProjectList";

const Work = () => {
  return (
    <>
      <section>
        <div className="maxinner">
          <h2 className="h6">Work List</h2>
          <ProjectList apiPath="/api/portfolio" />
        </div>
      </section>
    </>
  );
};

export default Work;

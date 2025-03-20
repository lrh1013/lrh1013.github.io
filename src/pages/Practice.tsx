import ProjectList from "@/components/project/ProjectList";

const Practice = () => {
  return (
    <>
      <section>
        <div className="maxinner">
          <ProjectList apiPath="/api/practice" />
        </div>
      </section>
    </>
  );
};

export default Practice;

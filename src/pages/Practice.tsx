import ProjectList from "@/components/common/ProjectList";

const Practice = () => {
  return (
    <>
      <section>
        <div className="maxinner">
          <h2 className="h6">Practice List</h2>
          <ProjectList apiPath="/api/practice" />
        </div>
      </section>
    </>
  );
};

export default Practice;

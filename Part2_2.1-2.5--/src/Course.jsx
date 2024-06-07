const Course = ({ course }) => {
    console.log(course);
    let total = course.parts.reduce((sum, part) => sum + part.exercises, 0);
    console.log(total);
    return (
      <div>
        <h1>{course.name}</h1>
        {course.parts.map((part) => (
          <p key={part.id}>
            {part.name} {part.exercises}
          </p>
        ))}
        <h4>total of {total} exercises</h4>
      </div>
    );
  };
 export default Course
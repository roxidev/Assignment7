/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
//  eslint-disable react/jsx-key
const Card = ({ selectedCourses, remainingCreadit }) => {
  // console.log(selectedCourses);
  return (
    <div>
      <h3 className="text-sm font-bold text-[#2F80ED]">
        Credit Hour Remaining {remainingCreadit} hr
      </h3>
      <h2 className="text-xl font-bold text-[#1C1B1B]">Course Name</h2>
      {selectedCourses.map((course, index) => (
        <ol>
          <li key={selectedCourses}>
            {index + 1}-{course.course_name}
          </li>
        </ol>
      ))}
    </div>
  );
};

export default Card;

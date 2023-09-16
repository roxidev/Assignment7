/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
//  eslint-disable react/jsx-key
const Card = ({
  selectedCourses,
  remainingCreadit,
  totalPrice,
  totalCradit,
}) => {
  // console.log(selectedCourses);
  return (
    <div>
      <h3 className="text-sm font-bold text-[#2F80ED]">
        Credit Hour Remaining {remainingCreadit} hr
      </h3>
      <hr />
      <h2 className="text-xl font-bold text-[#1C1B1B]">Course Name</h2>
      {selectedCourses.map((course) => (
        <li className="list-decimal" key={course.id}>
          {course.course_name}
        </li>
      ))}
      <hr />
      <h2>Total Credit Hour:{totalCradit}</h2>
      <hr />
      <h2>Total Price:{totalPrice}</h2>
    </div>
  );
};

export default Card;

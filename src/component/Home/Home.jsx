/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Home = () => {
  const [allCourse, setAllCourse] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  // console.log(selectedCourses);

  useEffect(() => {
    fetch('./data.json')
      .then((res) => res.json())
      .then((data) => setAllCourse(data));
  });
  const handleSelectCourse = (course) => {
    const isExist = selectedCourses.find((item) => item.id == course.id);
    if (isExist) {
      alert('Already join this course!!');
    } else {
      setSelectedCourses([...selectedCourses, course]);
    }

    // console.log(selectedCourses);
  };

  return (
    <div className="flex gap-6 mx-4">
      <div className="w-2/3 ">
        <h1 className="text-2xl text-[#1C1B1B] font-bold mt-12 mb-8 text-center">
          Course Registration
        </h1>

        <div className="grid grid-cols-3  gap-6 ">
          {allCourse.map((course) => (
            <div key={course.id} className=" mt-4 bg-[#fff] rounded-xl">
              <figure className="">
                <img src={course.img} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="">
                <h2 className="text-sm text-[#1C1B1B] font-semibold mt-4 mb-3">
                  {course.course_name}
                </h2>
                <p className="text-xs text-[#1C1B1B99] font-normal ">
                  {course.description}
                </p>
                <div className="flex justify-between">
                  <div className="mt-5 mb-6">
                    <img src="" alt="" />
                    <p className="text-xs text-[#1C1B1B99] font-medium">
                      price: {course.price}
                    </p>
                  </div>
                  <div className="">
                    <img src="" alt="" />
                    <p className="text-xs text-[#1C1B1B99] font-medium">
                      Credit:{course.Credit}h
                    </p>
                  </div>
                </div>
                <div
                  onClick={() => handleSelectCourse(course)}
                  className="border-2 border-solid border-[#2F80ED] bg-[#2F80ED] mx-auto text-center rounded-lg py-2"
                >
                  <button>Select</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/3 mt-28 bg-slate-400">
        <Card selectedCourses={selectedCourses} />
      </div>
    </div>
  );
};

export default Home;

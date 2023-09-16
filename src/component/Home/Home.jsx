/* eslint-disable react/jsx-key */
import { FiDollarSign } from 'react-icons/fi';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [allCourse, setAllCourse] = useState([]);

  const [selectedCourses, setSelectedCourses] = useState([]);

  const [remainingCreadit, setRemainingCreadit] = useState(20);
  // setRemainingCreadit(10);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCradit, setTotalCradit] = useState(0);

  // console.log(selectedCourses);

  useEffect(() => {
    fetch('./data.json')
      .then((res) => res.json())
      .then((data) => setAllCourse(data));
  });
  const handleCradit = (course) => {
    const newRemainingCreadit = remainingCreadit + course.credit;
    setRemainingCreadit(newRemainingCreadit);
  };
  const handleSelectCourse = (course) => {
    const newAllcourse = [...selectedCourses, course];
    const newTotalPrice = totalPrice + course.price;
    const newTotalCreadit = totalCradit + course.credit;

    const newRemaining = remainingCreadit - course.credit;

    const isExist = selectedCourses.find((item) => item.id == course.id);
    let newRemainingTotalCreaditHours = 0;
    if (remainingCreadit < course.credit) {
      return toast.warning('You have not supetient creadit');
    }

    if (isExist) {
      toast.warn('Course already added');
    } else {
      toast.success('Successfully course added');
      setSelectedCourses(newAllcourse);

      setRemainingCreadit(newRemaining);
      setTotalPrice(newTotalPrice);
      setTotalCradit(newTotalCreadit);
    }
  };

  return (
    <div className="flex gap-6 mx-14 ">
      <div className="w-3/4 bg-[#F3F3F3]">
        <h1 className="text-2xl text-[#1C1B1B] font-bold mt-12 mb-8 text-center">
          Course Registration
        </h1>

        <div className="grid grid-cols-3  gap-6 bg-[#F3F3F3]">
          {allCourse.map((course) => (
            <div
              key={course.id}
              className=" mt-4 bg-[#fff] rounded-xl py-4 px-4"
            >
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
                <div className="flex justify-between mb-6 mt-5">
                  <div className="  flex">
                    <FiDollarSign className="text-xl" />
                    <span className="text-xs text-[#1C1B1B99] font-medium">
                      price: {course.price}
                    </span>
                  </div>
                  <div className="flex">
                    <HiOutlineBookOpen
                      onClick={() => handleCradit(course)}
                      className="text-xl"
                    />
                    <span className="text-xs text-[#1C1B1B99] font-medium">
                      credit:{course.credit}h
                    </span>
                  </div>
                </div>
                <div
                  className="border-2 border-solid border-[#2F80ED] bg-[#2F80ED] mx-auto text-center rounded-lg py-2"
                  onClick={() => handleSelectCourse(course)}
                >
                  <button>Select</button>
                </div>
                <ToastContainer />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/4 mt-32 bg-[#F3F3F3]">
        <div className="bg-[#fff] py-4 px-4 rounded-xl">
          <Card
            remainingCreadit={remainingCreadit}
            selectedCourses={selectedCourses}
            totalPrice={totalPrice}
            totalCradit={totalCradit}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

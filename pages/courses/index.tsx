import type { NextPage } from "next";
import Card from "../../components/Layout/Card";

const Courses: NextPage = () => {
  const coursesList = [
    {
      id: "0",
      title: "Namaste JavaScript Intro",
      courseUrl: "/courses/namastejs0",
      imageUrl: "/course-images/namaste-javascript.jpg",
      description: "Learn all about how JavaScript works behind the scenes",
      duration: 4.5,
      lectureCount: 12,
    },
    {
      id: "1",
      title: "Map, Filter and Reduce",
      courseUrl: "/courses/namastejs1",
      imageUrl: "/course-images/map-filter-reduce.jpg",
      description: "Learn most used array methods in JavaScript",
      duration: 8.25,
      lectureCount: 22,
    },
    {
      id: "2",
      title: "Closures in JavaScript",
      courseUrl: "/courses/namastejs2",
      imageUrl: "/course-images/closure.jpg",
      description: "Learn all about how closures work in JavaScript",
      duration: 8,
      lectureCount: 18,
    },
    {
      id: "3",
      title: "Higher Order Functions",
      courseUrl: "/courses/namastejs3",
      imageUrl: "/course-images/higher-order-functions.jpg",
      description: "Higher Order Functions in JavaScript",
      duration: 12.5,
      lectureCount: 6,
    },
    {
      id: "4",
      title: "Callbacks in JavaScript",
      courseUrl: "/courses/namastejs4",
      imageUrl: "/course-images/callbacks.jpg",
      description: "Learn all about callbacks in JavaScript",
      duration: 9,
      lectureCount: 8,
    },
    {
      id: "5",
      title: "JavaScript Engine Architecture",
      courseUrl: "/courses/namastejs5",
      imageUrl: "/course-images/js-engine.jpg",
      description: "Learn all about how JS Engine works behind the scenes",
      duration: 16,
      lectureCount: 35,
    },
  ];

  return (
    <div className="courses-container grid justify-items-center gap-8 px-2 py-8 mx-auto sm:px-4 md:px-6 max-w-none b0:max-w-[368px] b1:max-w-[720px] b2:max-w-[1072px] b3:max-w-[1424px] b4:max-w-[1776px]">
      {coursesList.map((course) => (
        <Card key={course.id} {...course} />
      ))}
    </div>
  );
};

export default Courses;

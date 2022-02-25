import React from 'react';

// const courses = [
//   {
//     courseTitle: 'React.js',
//     courseDesc: 'The most wanted programming',
//     courseRating: '⭐⭐⭐⭐⭐',
//     coursePrice: 100,
//   },
//   {
//     courseTitle: 'Vue.js',
//     courseDesc: 'The most progressive framework',
//     courseRating: '⭐⭐⭐⭐',
//     coursePrice: 200,
//   },
//   {
//     courseTitle: 'Angular Js',
//     courseDesc: 'The leading programming to discovering react',
//     courseRating: '⭐⭐⭐',
//     coursePrice: 300,
//   },
// ];

// {courses.map((course) => (
//     <div>
        // <h1>{courseTitle}</h1>
        // <p>{course.courseDesc}</p>
        // <p>{course.courseRating}</p>
        // <p>K {course.coursePrice}</p>
//     </div>
//   ));
// }

const Courses = ({ courseDesc, courseRating, coursePrice, courseTitle }) => {
  return (
    <div>
      <h1>{courseTitle}</h1>
      <p>{courseDesc}</p>
      <p>{courseRating}</p>
      <p>K {coursePrice}</p>
    </div>
  );
};

export default Courses;

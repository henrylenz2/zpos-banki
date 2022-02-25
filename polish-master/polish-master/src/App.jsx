import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Courses from './components/Courses.';

const App = () => {
  return (
    <div className="courses">
      <Courses
        courseTitle="React.js"
        courseDesc="The most wanted programming language"
        courseRating="⭐⭐⭐⭐⭐"
        coursePrice="100"
      />
      <Courses
        courseTitle="Vue.js"
        courseDesc="The most progressive framework"
        courseRating="⭐⭐⭐⭐"
        coursePrice="200"
      />
      <Courses
        courseTitle="Angular"
        courseDesc="The best programming web framework"
        courseRating="⭐⭐⭐"
        coursePrice="300"
      />
    </div>
  );
};

export default App;

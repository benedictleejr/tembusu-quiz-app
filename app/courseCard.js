import React from 'react';
import { courseData } from './courseData';
import './courseCard.css';

export const CourseCard = ({courseID}) => {
    const course = courseData[courseID];
    return (
        <div className="course-card">
            <div className="course-title">{courseID}: {course.name}</div>
            <div className="course-info">Taught by {course.prof}</div>
            <div className="course-type">{course.type}</div>
        </div>
    );
};  
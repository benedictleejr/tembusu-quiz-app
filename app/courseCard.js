"use client";

import React, {useState} from 'react';
import { courseData } from './courseData';
import './courseCard.css';
import styled from 'styled-components';

const PopupCard = styled.div`
    width: 300px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -150px;
    background-color: white;
    padding: 40px;
    transform: translateY(-50%);
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.75);
`;

// Define Popup component
const CustomPopup = ({ onClose }) => (
    <Overlay>
        <PopupCard>
            <div onClick={onClose}>Close</div>
        </PopupCard>
    </Overlay>
);

export const CourseCard = ({courseID}) => {
    const course = courseData[courseID];
    const [isShownCourseInfo, setIsShownCourseInfo] = useState(false);
    const togglePopup = () => {
        setIsShownCourseInfo(!isShownCourseInfo);
    };

    return (
        <div className="course-card" onClick={togglePopup}>
            <div className="course-title">{courseID}: {course.name}</div>
            <div className="course-info">Taught by {course.prof}</div>
            <div className="course-type">{course.type}</div>
            {isShownCourseInfo && <CustomPopup onClose={togglePopup} />}
        </div>
    );
};  
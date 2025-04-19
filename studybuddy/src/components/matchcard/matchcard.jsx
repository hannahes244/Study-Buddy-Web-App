import React from 'react';
import './matchcard.css';
import PropTypes from 'prop-types';
import no from "../../assets/no.png"
import yes from "../../assets/yes.png"
import { motion, useMotionValue, useTransform, useTranslate, useAnimation} from 'framer-motion';
import { useState} from 'react';
// Needed to install npm install prop-types to use this
// Need to install npm install motion



const MatchCard = ({id, name, classification, matchimage, bio, courses, interests, index, totalcards, removeCard}) => {

    const motionValue = useMotionValue(0); //used to store and track animated values, they update smoothly without rerendering

    const rotateValue = useTransform(motionValue, [-200, 200], [-50, 50]); //rotates the card as it moves on drag

    const opacityValue = useTransform(
        motionValue, 
        [-200, -150, 0, 150, 200],
        [0, 1, 1, 1, 0]
    );

    const animControls = useAnimation();

const [isHidden, setIsHidden] = useState(false);

    return (
        
        <motion.div 
            className={`dbMatchBox ${isHidden ? 'hidden' : ''}`}
            drag="x"
            style={{
                x: motionValue,
                //rotate: rotateValue,
                opacity: opacityValue,
                zIndex: totalcards - index,
            }}
            dragConstraints={{ left: -1000, right: 1000}}
            onDragEnd={(event, info) => {
                if(Math.abs(info.point.x) > 150) {
                    removeCard(id);
                    setIsHidden(true);
                }
                else {
                    //motionValue.set(info.point.x < 0 ? -400 : 400);
                    animControls.start({ x: 0 }); //work on putting the card back in it's place if not fully dragged
                }
            }}
        >

            <div className="dbMatchImgBox">
                    <img className ="dbCurrentMatch" src= {matchimage} alt="Current Match"></img>
                    <h1 className="dbMatchName">{name}</h1>
                    <p className="dbMatchYear">{classification}</p>
            </div>

            <div className="dbMatchInfo">
                <div className="dbBio">
                    <div className="dbTitle">
                        About Me
                    </div>

                    <div className="dbBioInfo">
                        {bio}
                    </div>
                </div>

                <div className="dbCourses">
                    <div className="dbTitle">
                    Courses
                    </div>

                    <div className="dbCoursesInfo">
                        {
                            courses.map((course, index) => (
                                <div className="dbListElements" key = {index}>
                                    {course}
                                </div>
                            )
                        )}
                        
                    </div>
                </div>

                <div className="dbInterests">
                    <div className="dbTitle">
                        Interests
                    </div>

                    <div className="dbInterestsInfo">
                        {
                            interests.map((course, index) => (
                                <div className="dbListElements" key = {index}>
                                    {course}
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>

            {/* <div className="dbButtons">
                <img className="dbyesButton" src={yes} alt="Yes Button"></img>
                <img className="dbnoButton" src={no} alt="No Button"></img>
            </div> */}

    </motion.div>
    )
}

MatchCard.propTypes = {
    name: PropTypes.string.isRequired,
    classification: PropTypes.string.isRequired,
    matchimage: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    courses: PropTypes.arrayOf(PropTypes.string).isRequired,
    interests: PropTypes.arrayOf(PropTypes.string).isRequired,
    index: PropTypes.number.isRequired,
    totalCards: PropTypes.number.isRequired,
}

export default MatchCard;
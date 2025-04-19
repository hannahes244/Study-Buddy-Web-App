import SaniyahPic from "../../assets/saniyahprofilepic.jpeg"
import HannahPic from "../../assets/hannahpfp.jpg"
import SarahPic from "../../assets/sarahpfp.jpg"
import MatchCard from "./matchcard";
import  { useState } from "react";

const MatchList = () => {

const [matches, setMatches] = useState([
    {
        id: 1,
        name: "Saniyah",
        classification: "Sophomore",
        matchimage: SaniyahPic,
        bio: "Straight to the point- I'm here to find a study buddy who actually wants to get things done. \
              I'm all about setting goals, making study schedules, and keeping each other accountable. \
              If you need someone who will hype you up before exams and make sure you don't procrastinate (too much), \
              let's team up! Bonus: I make aesthetic notes and killer study guides.",
        interests: ["Drawing", "Photography", "Reading", "Music", "Money"],
        courses: ["Discrete Structures", "Systems Architecture", "Web Development"],

    },
    {
        id: 2,
        name: "Hannah",
        classification: "Sophomore",
        matchimage: HannahPic,
        bio: "Looking for a study buddy who's all about balance—serious study sessions, but with coffee breaks, \
         brain dumps, and occasional 'what are we even doing with our lives' moments. I work best with people \
        who keep it low-stress but still get stuff done. If you bring good vibes and a shared love for background \
        study music, we'll get along great.",
        interests: ["Crochet", "Puzzles", "Baking", "Legos", "Volleyball"],
        courses: ["Discrete Structures", "Systems Architecture", "Web Development", "Computer Networking"],

    },
    {
        id: 3,
        name: "Jeremiah",
        classification: "Sophomore",
        matchimage: SaniyahPic,
        bio: "If you thrive under last-minute pressure, we might just be the perfect study match. \
         I'm that person pulling late-night study sessions with coffee in one hand and highlighters \
          in the other. Need a partner to go over flashcards at 2 AM or talk through concepts when \
          you're on the verge of giving up? I got you.",
        interests: ["Surfing", "Writing", "Painting", "Gardening"],
        courses: ["Database Management", "Systems Architecture", "Web Development"],

    },
    {
        id: 4,
        name: "Javon",
        classification: "Sophomore",
        matchimage: SaniyahPic,
        bio: "Studying is way more fun when you're not doing it alone! I love bouncing ideas off people, \
         teaching concepts (because it helps me learn, too), and turning study time into something productive \
          and social. Whether it's deep discussions, whiteboard sessions, or a casual group study vibe, \
          let's make learning less painful together.",
        interests: ["Dancing", "Singing", "Kayaking", "Cooking", "Backpacking", "Video Games"],
        courses: ["Discrete Structures", "Systems Architecture", "Web Development"],
    },
    {
        id: 5,
        name: "Jordan",
        classification: "Junior",
        matchimage: SaniyahPic,
        bio: "Looking for a study buddy who's all about balance—serious study sessions, but with coffee breaks,\
              brain dumps, and occasional 'what are we even doing with our lives' moments. I work best with people\
              who keep it low-stress but still get stuff done. If you bring good vibes and a shared love for background\
              study music, we'll get along great.",
        interests: ["Gaming", "Basketball", "Coding", "Cooking"],
        courses: ["Data Structures", "Operating Systems", "Software Engineering"],
    },
    {
        id: 6,
        name: "Leila",
        classification: "Freshman",
        matchimage: SarahPic,
        bio: "If you thrive under last-minute pressure, we might just be the perfect study match. I’m that person pulling\
              late-night study sessions with coffee in one hand and highlighters in the other. Need a partner to go over\
              flashcards at 2 AM or talk through concepts when you’re on the verge of giving up? I got you.",
        interests: ["K-Pop", "Writing", "Puzzles", "Board Games"],
        courses: ["Psychology 101", "Statistics", "Biology"],
    },
    {
        id: 7,
        name: "Ethan",
        classification: "Senior",
        matchimage: SaniyahPic,
        bio: "Straight to the point—I’m here to find a study buddy who actually wants to get things done. I’m all about\
              setting goals, making study schedules, and keeping each other accountable. If you need someone who will hype\
              you up before exams and make sure you don’t procrastinate (too much), let’s team up! Bonus: I make aesthetic\
              notes and killer study guides.",
        interests: ["Weightlifting", "Chess", "Podcasts", "Technology"],
        courses: ["Artificial Intelligence", "Cybersecurity", "Machine Learning"],
    },
    {
        id: 8,
        name: "Maya",
        classification: "Sophomore",
        matchimage: SaniyahPic,
        bio: "Studying is way more fun when you’re not doing it alone! I love bouncing ideas off people, teaching concepts\
              (because it helps me learn, too), and turning study time into something productive *and* social. Whether it’s\
              deep discussions, whiteboard sessions, or a casual group study vibe, let’s make learning less painful together.",
        interests: ["Painting", "Baking", "Yoga", "Traveling"],
        courses: ["Marketing", "Business Analytics", "Finance"],
    }
])

const removeCard = (id) => {
    setMatches((prevMatches) => prevMatches.filter((match) => match.id !== id));
};

    return (
        <div className="match-list">
            {matches.map((match, index) => (
                <MatchCard 
                key={match.id}
                name={match.name}
                classification={match.classification}
                matchimage={match.matchimage}
                bio={match.bio}
                courses={match.courses}
                interests={match.interests}
                totalcards = {matches.length}
                index = {index}
                removeCard = {removeCard}
                />
            ))}
        </div>
        
    )
}

export default MatchList;


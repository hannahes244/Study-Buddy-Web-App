import SaniyahPic from "../../assets/saniyahprofilepic.jpeg";
import HannahPic from "../../assets/hannahpfp.jpg";
import JeremiahPic from "../../assets/jeremiah_whitehurst-headshot.jpg";
import JavonPic from "../../assets/javonpfp.jpeg";
import MatchCard from "./matchcard";
import { useState } from "react";
import { motion, useMotionValue, useTransform, useTranslate, useAnimation, AnimatePresence} from 'framer-motion';

const MatchList = () => {
  const [matches, setMatches] = useState([
    {
      id: 1,
      name: "Saniyah",
      classification: "Sophomore",
      matchimage: SaniyahPic,
      bio: "Straight to the point- I'm here to find a study buddy who actually wants to get things done. I'm all about setting goals, making study schedules, and keeping each other accountable. If you need someone who will hype you up before exams and make sure you don't procrastinate (too much), let's team up! Bonus: I make aesthetic notes and killer study guides.",
      interests: ["Drawing", "Photography", "Reading", "Music", "Money"],
      courses: ["Discrete Structures", "Systems Architecture", "Web Development"],
    },
    {
      id: 2,
      name: "Hannah",
      classification: "Sophomore",
      matchimage: HannahPic,
      bio: "Looking for a study buddy who's all about balance—serious study sessions, but with coffee breaks, brain dumps, and occasional 'what are we even doing with our lives' moments. I work best with people who keep it low-stress but still get stuff done. If you bring good vibes and a shared love for background study music, we'll get along great.",
      interests: ["Crochet", "Puzzles", "Baking", "Legos", "Volleyball"],
      courses: ["Discrete Structures", "Systems Architecture", "Web Development", "Computer Networking"],
    },
    {
      id: 3,
      name: "Jeremiah",
      classification: "Sophomore",
      matchimage: JeremiahPic,
      bio: "If you thrive under last-minute pressure, we might just be the perfect study match. I'm that person pulling late-night study sessions with coffee in one hand and highlighters in the other. Need a partner to go over flashcards at 2 AM or talk through concepts when you're on the verge of giving up? I got you.",
      interests: ["Surfing", "Writing", "Painting", "Gardening"],
      courses: ["Database Management", "Systems Architecture", "Web Development"],
    },
    {
      id: 4,
      name: "Javon",
      classification: "Sophomore",
      matchimage: JavonPic,
      bio: "Studying is way more fun when you're not doing it alone! I love bouncing ideas off people, teaching concepts (because it helps me learn, too), and turning study time into something productive and social. Whether it's deep discussions, whiteboard sessions, or a casual group study vibe, let's make learning less painful together.",
      interests: ["Dancing", "Singing", "Kayaking", "Cooking", "Backpacking", "Video Games"],
      courses: ["Discrete Structures", "Systems Architecture", "Web Development"],
    }
  ]);

  const removeCard = (id) => {
    setMatches((prevMatches) => prevMatches.filter((match) => match.id !== id));
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      x: -100,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  return (
    <div className="match-list-container">
      <motion.div 
        className="match-list-header"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Your Potential Study Matches</h2>
        <p>Connect with classmates who share your courses and interests</p>
      </motion.div>

      <motion.div 
        className="match-list"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {matches.length > 0 ? (
            matches.map((match, index) => (
              <motion.div
                key={match.id}
                variants={cardVariants}
                exit="exit"
                layout
              >
                <MatchCard 
                  id={match.id}
                  name={match.name}
                  classification={match.classification}
                  matchimage={match.matchimage}
                  bio={match.bio}
                  courses={match.courses}
                  interests={match.interests}
                  index={index}
                  totalcards={matches.length}
  removeCard={removeCard}
/>

              </motion.div>
            ))
          ) : (
            <motion.div
              className="no-matches-message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p>No more matches available. Check back later!</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default MatchList;
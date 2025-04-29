import SaniyahPic from "../../assets/saniyahprofilepic.jpeg";
import HannahPic from "../../assets/hannahpfp.jpg";
import JeremiahPic from "../../assets/jeremiah_whitehurst-headshot.jpg";
import JavonPic from "../../assets/javonpfp.jpeg";
import MatchCard from "./matchcard";
import { useState } from "react";
import { motion, useMotionValue, useTransform, useTranslate, useAnimation, AnimatePresence} from 'framer-motion';
import cat from "../../assets/acnhpfps/cat.jpeg";
import duck from "../../assets/acnhpfps/duck.jpeg";
import pig from "../../assets/acnhpfps/pig.jpeg";
import raccoon from "../../assets/acnhpfps/raccoon.jpeg";
import raccoonwsunglasses from "../../assets/acnhpfps/raccoonwsunglasses.jpeg";
import sleepingdog from "../../assets/acnhpfps/sleepingdog.jpeg";
import tomnook from "../../assets/acnhpfps/tomnook.jpeg";
import yellowduck from "../../assets/acnhpfps/yellowduck.jpeg";



const MatchList = () => {
  const [matches, setMatches] = useState([
    {
      id: 1,
      name: "Saniyah",
      classification: "Sophomore",
      matchimage: cat,
      bio: "Straight to the point- I'm here to find a study buddy who actually wants to get things done. I'm all about setting goals, making study schedules, and keeping each other accountable. If you need someone who will hype you up before exams and make sure you don't procrastinate (too much), let's team up! Bonus: I make aesthetic notes and killer study guides.",
      interests: ["Drawing", "Photography", "Reading", "Music", "Money"],
      courses: ["Discrete Structures", "Systems Architecture", "Web Development"],
    },
    {
      id: 2,
      name: "Hannah",
      classification: "Sophomore",
      matchimage: duck,
      bio: "Looking for a study buddy who's all about balance—serious study sessions, but with coffee breaks, brain dumps, and occasional 'what are we even doing with our lives' moments. I work best with people who keep it low-stress but still get stuff done. If you bring good vibes and a shared love for background study music, we'll get along great.",
      interests: ["Crochet", "Puzzles", "Baking", "Legos", "Volleyball"],
      courses: ["Discrete Structures", "Systems Architecture", "Web Development", "Computer Networking"],
    },
    {
      id: 3,
      name: "Jeremiah",
      classification: "Sophomore",
      matchimage: pig,
      bio: "If you thrive under last-minute pressure, we might just be the perfect study match. I'm that person pulling late-night study sessions with coffee in one hand and highlighters in the other. Need a partner to go over flashcards at 2 AM or talk through concepts when you're on the verge of giving up? I got you.",
      interests: ["Surfing", "Writing", "Painting", "Gardening"],
      courses: ["Database Management", "Systems Architecture", "Web Development"],
    },
    {
      id: 4,
      name: "Javon",
      classification: "Sophomore",
      matchimage: raccoon,
      bio: "Studying is way more fun when you're not doing it alone! I love bouncing ideas off people, teaching concepts (because it helps me learn, too), and turning study time into something productive and social. Whether it's deep discussions, whiteboard sessions, or a casual group study vibe, let's make learning less painful together.",
      interests: ["Dancing", "Singing", "Kayaking", "Cooking", "Backpacking", "Video Games"],
      courses: ["Discrete Structures", "Systems Architecture", "Web Development"],
    },
    {
      id: 5,
      name: "Avery",
      classification: "Junior",
      matchimage: sleepingdog,
      bio: "I'm all about efficiency—study smarter, not harder. If you love building color-coded study plans, smashing through to-do lists, and tackling practice problems until they feel easy, we'd make a solid team. Bonus points if you appreciate bad puns and random bursts of motivation!",
      interests: ["Hiking", "Board Games", "Photography", "Chess"],
      courses: ["Algorithms", "Machine Learning", "Data Structures"],
    },
    {
      id: 6,
      name: "Leo",
      classification: "Freshman",
      matchimage: raccoonwsunglasses,
      bio: "Still figuring this college thing out but determined to make the most of it! I'm looking for a chill study buddy who's down to brainstorm, troubleshoot tough assignments, and maybe laugh through the struggle. No judgment zones only—we're all learning here!",
      interests: ["Soccer", "Comics", "Streaming Shows", "Cooking"],
      courses: ["Intro to Programming", "Calculus I", "General Chemistry"],
    },
    {
      id: 7,
      name: "Maya",
      classification: "Senior",
      matchimage: tomnook,
      bio: "Big fan of deep dives into complicated topics, organizing study materials, and explaining concepts until they stick. If you want someone who's serious about acing exams but still knows how to keep the mood light, let's team up and crush this semester!",
      interests: ["Yoga", "Traveling", "Blogging", "Thrifting"],
      courses: ["Artificial Intelligence", "Operating Systems", "Software Engineering"],
    },
    {
      id: 8,
      name: "Ethan",
      classification: "Junior",
      matchimage: yellowduck,
      bio: "I'm a 'work hard, play hard' type when it comes to studying. I take my work seriously, but I'm also all about setting rewards after big study sessions—think study marathons followed by movie nights. If you’re motivated, goal-driven, and okay with some fun mixed in, we’ll get along great.",
      interests: ["Rock Climbing", "Gaming", "Guitar", "Travel"],
      courses: ["Networks and Security", "Computer Graphics", "Human-Computer Interaction"],
    },
    {
      id: 9,
      name: "Isabella",
      classification: "Sophomore",
      matchimage: raccoon,
      bio: "I'm the type who loves detailed study plans, cozy study sessions, and motivating each other through those tough midterms. If you’re into swapping notes, quiz games, and study playlists, we’ll vibe perfectly. Let's make studying feel a little less like a chore.",
      interests: ["Painting", "Baking", "Reading", "Animal Rescue"],
      courses: ["Discrete Structures", "Linear Algebra", "Computer Networking"],
    },
    {
      id: 10,
      name: "Noah",
      classification: "Senior",
      matchimage: tomnook,
      bio: "I believe studying should be a team sport. I'm down for group study sessions, whiteboard brainstorming, and celebrating small wins along the way. If you need someone to help simplify complex ideas or just keep things moving, I'm your guy.",
      interests: ["Photography", "Basketball", "Fishing", "Cooking"],
      courses: ["Software Engineering", "Data Mining", "Systems Architecture"],
    },
    {
      id: 11,
      name: "Chloe",
      classification: "Freshman",
      matchimage: duck,
      bio: "I'm here to find a buddy to navigate college life and classes with. Whether it's late-night study sessions, figuring out confusing assignments, or sharing memes during breaks, I’m all about building good vibes and better grades!",
      interests: ["Sewing", "Journaling", "Fashion Design", "Music"],
      courses: ["Intro to Computer Science", "English Composition", "College Algebra"],
    },
    {
      id: 12,
      name: "Carter",
      classification: "Junior",
      matchimage: yellowduck,
      bio: "If you love serious study grinds with occasional spontaneous debates about random topics, we'll get along great. I’m big on helping each other stay on track, swapping resources, and maybe competing a little to push each other harder (friendly competition, of course!).",
      interests: ["Weightlifting", "Running", "History", "Anime"],
      courses: ["Machine Learning", "Computer Vision", "Mobile App Development"],
    },
    {
      id: 13,
      name: "Lily",
      classification: "Senior",
      matchimage: pig,
      bio: "I’m a big believer in active learning—talking through problems, teaching each other concepts, and constantly improving. If you're passionate about making study sessions fun, focused, and full of energy, let’s be study partners!",
      interests: ["Piano", "Creative Writing", "Camping", "Photography"],
      courses: ["Advanced Databases", "Cybersecurity", "Cloud Computing"],
    },
    {
      id: 14,
      name: "Elijah",
      classification: "Sophomore",
      matchimage: cat,
      bio: "Last-minute cram sessions? Check. Group projects? Check. Helping each other stay sane through it all? Double check. If you’re looking for someone who’s reliable but also knows when it’s time for a snack break, we’re probably a match.",
      interests: ["Video Games", "Sneakers", "Basketball", "Music"],
      courses: ["Web Development", "Data Structures", "Discrete Structures"],
    },
    {
      id: 15,
      name: "Sofia",
      classification: "Junior",
      matchimage: sleepingdog,
      bio: "I love turning studying into something that's actually enjoyable—think pomodoro timers, cozy playlists, and mini goal celebrations. I'm looking for someone who’s serious about learning but not so serious we forget to have a little fun along the way.",
      interests: ["Painting", "Ice Skating", "Baking", "Movies"],
      courses: ["Operating Systems", "Software Testing", "Artificial Intelligence"],
    },
    {
      id: 16,
      name: "Grayson",
      classification: "Freshman",
      matchimage: raccoonwsunglasses,
      bio: "Starting fresh in college and looking for someone who's as motivated (or at least as determined) as I am to stay on top of classes. Whether it’s group problem-solving or sharing survival tips for first-year students, I'm all in!",
      interests: ["Skateboarding", "Photography", "Hiking", "Podcasts"],
      courses: ["Intro to Programming", "Calculus I", "General Biology"],
    },
    {
      id: 17,
      name: "Zoey",
      classification: "Junior",
      matchimage: tomnook,
      bio: "If you’re the type who loves structured plans, intense focus sessions, and tracking progress, we’ll be unstoppable. I’m all about Gantt charts, checklists, and strategic goal setting. If you want a partner who’s serious about leveling up academically, let’s connect!",
      interests: ["Organizing", "Bullet Journaling", "Data Analytics", "Fitness"],
      courses: ["Project Management", "Software Design", "Cloud Computing"],
    },
    {
      id: 18,
      name: "Miles",
      classification: "Sophomore",
      matchimage: pig,
      bio: "Listen, I’m all for studying... but in a 'let’s survive this together' kind of way. Chill sessions, good playlists, no unnecessary stress. If you work best with someone who doesn’t take themselves too seriously but still gets it done, I’m your guy.",
      interests: ["Guitar", "Documentaries", "Video Games", "Napping"],
      courses: ["Discrete Structures", "Intro to AI", "Mobile App Development"],
    },
    {
      id: 19,
      name: "Amira",
      classification: "Senior",
      matchimage: sleepingdog,
      bio: "Night owls unite! I do my best work after the sun goes down—midnight study jams, energy drinks, deep focus mode. If you’re tired of study groups that meet at 8 AM, I’m your late-night study buddy!",
      interests: ["Star Gazing", "Writing", "DIY Projects", "Coffee Tasting"],
      courses: ["Natural Language Processing", "Cybersecurity", "Big Data Analytics"],
    },
    {
      id: 20,
      name: "Kai",
      classification: "Freshman",
      matchimage: yellowduck,
      bio: "Group study sessions are my jam! I thrive when ideas are flying around and we’re all helping each other figure stuff out. If you want someone who brings the snacks, energy, and whiteboard markers, hit me up.",
      interests: ["Cooking", "Traveling", "Basketball", "Streaming Shows"],
      courses: ["Intro to Programming", "Statistics I", "General Chemistry"],
    },
    {
      id: 21,
      name: "Layla",
      classification: "Sophomore",
      matchimage: cat,
      bio: "Looking for a buddy who's serious about grades but understands that mental health comes first. I’m big on realistic schedules, stress management techniques, and study breaks that actually help you recharge. Let's ace our classes *and* take care of ourselves!",
      interests: ["Meditation", "Yoga", "Art", "Reading"],
      courses: ["Systems Architecture", "Software Engineering", "Discrete Math"],
    },
    {
      id: 22,
      name: "Sebastian",
      classification: "Junior",
      matchimage: raccoon,
      bio: "Hyper-competitive but in a fun way. I love setting goals, crushing them, and leveling up academically like it’s a video game. If you need a study buddy who’ll push you to be your absolute best, I’m right here!",
      interests: ["Weightlifting", "Strategy Games", "Debate", "Coding Competitions"],
      courses: ["Algorithms", "Data Mining", "Machine Learning"],
    },
    {
      id: 23,
      name: "Nina",
      classification: "Junior",
      matchimage: pig,
      bio: "I'm pretty introverted, but I’m super dependable once you get to know me. If you want someone who's focused, organized, and great at one-on-one study sessions (minus the small talk), I’m your perfect match.",
      interests: ["Reading", "Sketching", "Nature Walks", "Indie Music"],
      courses: ["Operating Systems", "Computer Architecture", "Algorithms"],
    },
    {
      id: 24,
      name: "Zion",
      classification: "Senior",
      matchimage: yellowduck,
      bio: "Big energy! I love leading study groups, organizing meetups, and making sure everyone feels included and motivated. If you need someone to keep the group on task *and* laughing, I'm your guy!",
      interests: ["Public Speaking", "Traveling", "Music Festivals", "Basketball"],
      courses: ["Cybersecurity", "Cloud Computing", "Project Management"],
    },
    {
      id: 25,
      name: "Sage",
      classification: "Sophomore",
      matchimage: tomnook,
      bio: "Prefer studying remotely? Same here! I'm all about virtual study sessions, shared docs, and late-night Zoom calls. If you’re looking for a study partner who's reliable even from miles away, let's connect online and crush it.",
      interests: ["Gaming", "Blogging", "Photography", "Puzzles"],
      courses: ["Intro to Data Science", "Web Development", "Discrete Structures"],
    },
    {
      id: 26,
      name: "Luca",
      classification: "Freshman",
      matchimage: sleepingdog,
      bio: "I’m a little on the quiet side but super motivated when it comes to hitting academic goals. I prefer small, focused sessions rather than big study groups. If you need someone calm and committed, I'm your person!",
      interests: ["Chess", "Coding", "Baking", "Podcasts"],
      courses: ["Intro to Programming", "Linear Algebra", "General Chemistry"],
    },
    {
      id: 27,
      name: "Aria",
      classification: "Junior",
      matchimage: yellowduck,
      bio: "Nothing beats a good in-person study group. I love gathering a bunch of motivated people, keeping the vibes high, and making studying feel like a team event. If you're looking for someone who makes learning social and fun, let’s do this!",
      interests: ["Dance", "Theater", "Writing", "Travel"],
      courses: ["Artificial Intelligence", "Software Engineering", "Computer Networking"],
    },
    {
      id: 28,
      name: "Dylan",
      classification: "Sophomore",
      matchimage: cat,
      bio: "Remote work warrior here! I’m all about Google Docs, shared notes, Discord study groups, and productivity apps. If you're looking for someone who knows how to stay connected and focused without needing to meet up, we’ll work great together!",
      interests: ["Technology", "Esports", "Graphic Design", "Reading"],
      courses: ["Systems Architecture", "Database Systems", "Cybersecurity"],
    },
    
    
    
    
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
                  removeCard={removeCard} />

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
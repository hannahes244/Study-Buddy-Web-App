import React, { useState } from 'react';
import MatchCard from './matchcard';

const MatchContainer = ({ matches }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleRemoveCard = (id) => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  if (currentIndex >= matches.length) {
    return <div>No more matches!</div>;
  }

  const currentMatch = matches[currentIndex];

  return (
    <div className="match-container">
      <MatchCard
        id={currentMatch.id}
        name={currentMatch.name}
        classification={currentMatch.classification}
        matchimage={currentMatch.matchimage}
        bio={currentMatch.bio}
        courses={currentMatch.courses}
        interests={currentMatch.interests}
        index={currentIndex}
        totalcards={matches.length}
        removeCard={handleRemoveCard}
      />
    </div>
  );
};

export default MatchContainer;

import React, { useState } from 'react';
import type { CharacterCounterProps, TextStats } from '../../types';
import { TextInput } from '../TextInput/TextInput';
import { StatsDisplay } from '../StatsDisplay/StatsDisplay';

export const CharacterCounter: React.FC<CharacterCounterProps> = ({
  minWords,
  maxWords,
  targetReadingTime
}) => {
  const [text, setText] = useState('');

  const words = text.trim().split(/\s+/).filter(Boolean);
  const wordCount = words.length;

  const stats: TextStats = {
    characterCount: text.length,
    wordCount,
    readingTime: Math.ceil(wordCount / 200) || 0
  };

  const isWithinRange =
    (minWords === undefined || wordCount >= minWords) &&
    (maxWords === undefined || wordCount <= maxWords);

  const readingGoalMet =
    targetReadingTime === undefined || stats.readingTime <= targetReadingTime;

  return (
    <div className="counter-container">
      <TextInput onTextChange={setText} />
      <div className="card">
        <StatsDisplay stats={stats} />
        {(minWords || maxWords) && (
          <div className="word-range">
            {minWords && `Min: ${minWords}`} {minWords && maxWords && ' | '}{' '}
            {maxWords && `Max: ${maxWords}`}
          </div>
        )}
      </div>
      {!isWithinRange && (
        <p className="message error">
          {minWords && wordCount < minWords && `Minimum ${minWords} words required.`}
          {maxWords && wordCount > maxWords && ` Maximum ${maxWords} words allowed.`}
        </p>
      )}
      {!readingGoalMet && (
        <p className="message warning">
          Estimated reading time exceeds target: {targetReadingTime} min
        </p>
      )}
    </div>
  );
};

import React from 'react';
import type { StatsDisplayProps } from '../../types';

export const StatsDisplay: React.FC<StatsDisplayProps> = ({ stats, showReadingTime = true }) => {
  const { characterCount, wordCount, readingTime } = stats;

  return (
    <div className="stats-display">
      <div>
        <div className="label">Characters</div>
        <div className="value">{characterCount}</div>
      </div>
      <div>
        <div className="label">Words</div>
        <div className={`value ${wordCount < 25 ? 'error' : ''}`}>{wordCount}</div>
      </div>
      {showReadingTime && (
        <div>
          <div className="label">Reading Time</div>
          <div className="value">{readingTime} min</div>
        </div>
      )}
    </div>
  );
};

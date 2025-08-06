import React from 'react';
import type { TextInputProps } from '../../types';

export const TextInput: React.FC<TextInputProps> = ({
  onTextChange,
  placeholder = 'Start typing...',
  initialValue = ''
}) => {
  return (
    <div className="input-wrapper">
      <textarea
        className="input"
        placeholder={placeholder}
        defaultValue={initialValue}
        onChange={(e) => onTextChange(e.target.value)}
        rows={6}
      />
    </div>
  );
};

import React from 'react';
import { FlipWords } from '../flipWords/flip-words';

export function FlipWordsController() {
  const words = ['better', 'beautiful', 'modern'];

  return (
    <div className="h-[20rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Datasets
        <FlipWords words={words} /> <br />
        we use in our project
      </div>
    </div>
  );
}

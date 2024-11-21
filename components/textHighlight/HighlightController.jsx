'use client';
import { motion } from 'framer-motion';
import { HeroHighlight, Highlight } from '../textHighlight/textHighlight';

export function HighlightController() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-lg px-4 md:text-2xl lg:text-3xl font-bold text-neutral-700 dark:text-white max-w-[1700px] leading-relaxed lg:leading-snug text-center mx-auto"
      >
        In this project, we analyzed the Amazon review dataset, focusing on the
        sentiment classification task. I trained a{' '}
        <Highlight className="text-black dark:text-white">
          Logistic Regression model
        </Highlight>{' '}
        to predict whether a review is positive or negative, achieving a high
        accuracy of{' '}
        <Highlight className="text-black dark:text-white">90%.</Highlight>{' '}
        Additionally, I identified the{' '}
        <Highlight className="text-black dark:text-white">top 10</Highlight>{' '}
        most representative words, bigrams, and trigrams for both positive and
        negative reviews. This analysis provides insights into common language
        patterns used in reviews, with positive reviews often featuring terms
        like{' '}
        <Highlight className="text-black dark:text-white">excellent</Highlight>{' '}
        and{' '}
        <Highlight className="text-black dark:text-white">
          highly recommend
        </Highlight>
        , while negative reviews highlight issues with phrases like
        <Highlight className="text-black dark:text-white">
          disappointed
        </Highlight>{' '}
        and{' '}
        <Highlight className="text-black dark:text-white">do not buy</Highlight>
        . These findings offer valuable information for understanding customer
        sentiment.
      </motion.h1>
    </HeroHighlight>
  );
}

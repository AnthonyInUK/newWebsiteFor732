import React from 'react';
import { TextGenerateEffectController } from '../components/textGenerate/TextGenerateEffectController';
import { HighlightController } from '../components/textHighlight/HighlightController';
import { AnimatedPinController } from '../components/3dPin/AnimatedPinController';
import { FlipWordsController } from '../components/flipWords/FlipWordsController';
const pinItems = [
  {
    title: 'Amazon product reviews',
    href: 'https://amazon-reviews-2023.github.io/',
    description:
      'This is a large-scale Amazon Reviews dataset, collected in 2023, which includes rich features (User Reviews, Item Metadata and links).',
    image: '/images/amazonLogo.png',
    customClass: 'bg-black text-white', // 可选的额外样式
  },
  {
    title: 'Temu Sales Analysis',
    href: 'https://www.kaggle.com/datasets/polartech/temu-dataset-us-online-mareket-place/data/',
    description:
      'Similar product metadata and review data to ensure a consistent comparison across platforms.',
    image: '/images/temuLogo.png',
    customClass: 'bg-black text-black', // 不同样式
  },
];

function page() {
  return (
    <div>
      <TextGenerateEffectController />
      <HighlightController />
      <FlipWordsController />
      <AnimatedPinController items={pinItems} />
    </div>
  );
}

export default page;

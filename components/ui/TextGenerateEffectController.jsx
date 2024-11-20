'use client';
import { TextGenerateEffect } from '../ui/text-generate-effect';

const words = `Welcome to our final project`;

export function TextGenerateEffectController() {
  return <TextGenerateEffect words={words} />;
}

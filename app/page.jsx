import React from 'react';
import { TextGenerateEffectController } from '@/components/ui/TextGenerateEffectController';
import { TimelineController } from '@/components/ui/TimelineController';
function page() {
  return (
    <div>
      <TextGenerateEffectController />
      <TimelineController />
    </div>
  );
}

export default page;

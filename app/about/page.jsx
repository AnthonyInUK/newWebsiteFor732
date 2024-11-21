import React from 'react';
import { TimelineController } from '../../components/timeLine/TimelineController';
import { AnimatedTestimonialsController } from '../../components/animatedForUsers/AnimatedController';
function page() {
  return (
    <div className="flex min-h-screen">
      {/* 左侧：TimelineController */}
      <div className="w-2/3 flex items-center justify-center bg-gray-100">
        <TimelineController />
      </div>

      {/* 右侧：AnimatedTestimonialsController */}
      <div className="w-1/3 h-1/3 flex items-center justify-center">
        <AnimatedTestimonialsController />
      </div>
    </div>
  );
}

export default page;

'use client';
import React from 'react';
import { PinContainer } from '../3dPin/3dPin';

export function AnimatedPinController({ items }) {
  return (
    // <div className="h-[40rem] w-full flex items-center justify-center ">
    //   <PinContainer
    //     title="Amazon product reviews"
    //     href="https://amazon-reviews-2023.github.io/"
    //   >
    //     <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
    //       <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
    //         Amazon product reviews
    //       </h3>
    //       <div className="text-base !m-0 !p-0 font-normal">
    //         <span className="text-slate-500 ">
    //           This is a large-scale Amazon Reviews dataset, collected in 2023,
    //           which includes rich features(User Reviews, Item Metadata and
    //           links)
    //         </span>
    //       </div>
    //       <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
    //     </div>
    //   </PinContainer>
    // </div>
    <div className="h-[20rem] w-full flex items-center justify-center flex-wrap gap-4">
      <h2></h2>
      {items.map((item, index) => (
        <PinContainer key={index} title={item.title} href={item.href}>
          <div
            className={`flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ${
              item.customClass || ''
            }`}
          >
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
              {item.title}
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500">{item.description}</span>
            </div>
            {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
            <img
              src={item.image}
              alt="description"
              className="flex flex-1 w-full rounded-lg mt-4 object-contain"
            />
          </div>
        </PinContainer>
      ))}
    </div>
  );
}

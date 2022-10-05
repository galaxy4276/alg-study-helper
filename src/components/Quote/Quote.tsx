import React, { HTMLAttributes } from 'react';


interface QuoteProps extends HTMLAttributes<HTMLDivElement> {
  writer: string;
}


export const Quote: React.FC<QuoteProps> = (
  {
    writer,
    children
  }
) => {
  return (
    <article
      className="quote flex-all flex-col px-0 font-noto w-full mb-12"
    >
      <span className="italic font-semibold text-slate-900">
      { children }
      </span>
      <span className="text-slate-800 pt-1.5">- { writer }</span>
    </article>
  )
};

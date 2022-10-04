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
      className="quote flex-all flex-col px-0 font-noto w-full"
    >
      <span>
      { children }
      </span>
      <span className="font-semibold italic pt-1.5">{ writer }</span>
    </article>
  )
};
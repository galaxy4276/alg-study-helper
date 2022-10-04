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
      className="quote flex-all flex-col mx-0 md:mx-64 font-noto"
    >
      <span>
      { children }
      </span>
      <span className="font-semibold italic pt-1.5">{ writer }</span>
    </article>
  )
};

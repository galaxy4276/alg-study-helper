import React, { PropsWithChildren } from 'react';


export const ProfileLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <section
    className="
      grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8
    "
  >
    { children }
  </section>
);

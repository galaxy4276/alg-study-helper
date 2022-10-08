import React, { HTMLAttributes } from 'react';


interface ProfileLayoutProps extends HTMLAttributes<HTMLDivElement> {}

export const ProfileLayout: React.FC<ProfileLayoutProps> = ({ children, className, ...props  }) => (
  <section
    className={`
      grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 ${className}
    `}
    {...props}
  >
    { children }
  </section>
);

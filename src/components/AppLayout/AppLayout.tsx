import React, { PropsWithChildren } from 'react';


export const AppLayout: React.FC<PropsWithChildren> = ({ children }) => (
	<main
		className="w-full px-0 md:px-24 lg:px-[424px]"
	>
		{ children }
	</main>
);

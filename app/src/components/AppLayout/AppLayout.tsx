import React, { PropsWithChildren } from 'react';


export const AppLayout: React.FC<PropsWithChildren> = ({ children }) => (
	<main
		className="w-full px-6 md:px-24 pt-8 lg:px-[230px] bg-gray-100 h-screen"
	>
			{ children }
	</main>
);

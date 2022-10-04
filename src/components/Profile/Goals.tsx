import React, { CSSProperties } from 'react';


const style: CSSProperties = {
	width: 'calc(100% - 80px)',
};

const mockCount = 2;

export const Goals: React.FC = () => (
	<div className="">
		<h3 className="text-slate-900 font-bold text-xl py-2.5">
			Left your solution goals: {mockCount}
		</h3>
	</div>
);
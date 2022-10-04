import React, { useState } from 'react';


const mockCount = 2;

export const Goals: React.FC = () => (
	<div>
		<div className="Stiker flex">
			LastGoals:{mockCount}
		</div>
	</div>
);
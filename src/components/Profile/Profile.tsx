import React from 'react';
import { Problem } from '@src/components/Problem/Problem';
import { Avatar } from './Avatar';
import { Goals } from '@src/components/Profile/Goals';


export const Profile: React.FC = () =>(
	<div className="my-5 p-5 shadow-md bg-amber-50 " >
		<Avatar/>
			<div className="relative">
			<div className="font-bold flex">
				minesp3164
			</div>
			<div className="Stiker flex">
			</div>
			<div>
				<Goals></Goals>
			</div>
			<div className="flex">Current solved</div>
			<Problem/>
		</div>
	</div>

)
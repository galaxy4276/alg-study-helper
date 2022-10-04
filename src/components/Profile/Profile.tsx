import React from 'react';
import { Problem } from '@src/components/Problem/Problem';
import { Avatar } from './Avatar';


export const Profile: React.FC = () =>(
	<div className="my-5 p-5 shadow-md bg-amber-50 " >
		<Avatar/>
			<div className="relative">
			<div className="font-bold flex">
				nickname
			</div>
			<div className="Stiker flex">
				Left goals: 1
			</div>
			<div>
				<i className="fa-solid fa-circle-check w-5 h-5 "/>
				<i className="fa-solid fa-circle-xmark w-5 h-5 "/>
			</div>
			<div className="flex">Current solved</div>
			<Problem/>
		</div>
	</div>

)
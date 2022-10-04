import React, { CSSProperties } from 'react';
import { FooterAvatar } from './FooterAvatar';

const style: CSSProperties = {
	background: 'linear-gradient(159.28deg, #B1B2FF 13.72%, #8C8EFF 87.96%)',
};

export const Developer: React.FC = () => (
	 <div
		 className="items p-3 rounded-sm"
		 style={style}
	 >
		 <div className="w-full h-full bg-white rounded-sm p-1.5 flex flex-col">
		 	<h1 className="
		 			font-bold drop-shadow-md center pb-2.5 self-center rotate-[-20deg]
		 			text-lg
		 		"
			>Developers</h1>
		 	<section className="flex flex-col gap-y-1.5">
				 <div className="flex items-center gap-x-2">
					<FooterAvatar
						src="https://avatars.githubusercontent.com/u/50310464?v=4"
					/>
					galaxy4276
					<i className="fa-brands fa-github"/>
					<i className="fa-brands fa-instagram"/>
				</div>
				<div className="flex items-center gap-x-2">
					<FooterAvatar
						src="https://avatars.githubusercontent.com/u/64721119?v=4"
					/>
					minesp3164
					<i className="fa-brands fa-github"/>
					<i className="fa-brands fa-instagram"/>
				</div>
			</section>
		 </div>
	 </div>
	)

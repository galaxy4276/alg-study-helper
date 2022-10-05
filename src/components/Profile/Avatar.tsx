import React from 'react';


interface AvatarProps {
	url?: string; // TODO: 임시 Optional
	isLoading?: boolean;
}

const mockUrl = 'https://www.bing.com/th?id=OIP.sFCXspWDaW2y4t939e1OpQHaHo&w=172&h=170&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2';

export const Avatar: React.FC<AvatarProps> = (
	{
		url,
		isLoading = false,
	}) => (
	<div className="absolute left-1/2 transform -translate-x-1/2 top-[-50px]">
		{isLoading && <div className="circle-avatar mb-6 animate-pulse bg-slate-300" />}
		{!isLoading && <img src={url} className="circle-avatar" alt="user-profile-image" />}
	</div>
);

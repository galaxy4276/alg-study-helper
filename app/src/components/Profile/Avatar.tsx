import React from 'react';


interface AvatarProps {
	url?: string; // Loading 상태 일 땐 이미지를 로드할 필요가 없음
	isLoading?: boolean;
}


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

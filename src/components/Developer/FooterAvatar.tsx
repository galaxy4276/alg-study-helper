import React, { HTMLAttributes } from 'react';

interface FooterAvatarProps extends HTMLAttributes<HTMLImageElement> {
	src: string;
}

export const FooterAvatar: React.FC<FooterAvatarProps> = ({ src }) => (
	<img
		src={src}
		className="rounded-full w-5 h-5"
	/>
);

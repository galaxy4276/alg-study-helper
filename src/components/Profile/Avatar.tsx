import React from 'react';

// 데이터 바인딩할 때 사용
interface AvatarProps {
	url: string;
}

const mockUrl = 'https://www.bing.com/th?id=OIP.sFCXspWDaW2y4t939e1OpQHaHo&w=172&h=170&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2';

export const Avatar: React.FC = () => (
	<div
		className="
			w-20 h-20 flex-auto absolute left-[50%]
		"
	>
		<img src={mockUrl} className="rounded-full" />
	</div>
);

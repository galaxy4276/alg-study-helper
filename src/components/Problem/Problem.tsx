import React from 'react';
import { TableItem } from './TableItem';
import './styles.css';


export const Problem: React.FC = () => (
	<section className="shadow-md overflow-hidden">
		<h3 className="text-slate-800 font-semibold pb-2.5">Current solved</h3>
		{ new Array(5).fill(0).map(() => <TableItem />) }
	</section>
);

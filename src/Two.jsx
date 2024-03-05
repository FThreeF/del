import { Typography } from '@mui/material';
import React from 'react';

const Two = ({ points }) => {
	const calculateDistance = (a, b) => {
		const distance = Math.sqrt((points[b].x - points[a].x) ** 2 + (points[b].y - points[a].y) ** 2);
		return distance.toFixed(2);
	};

	return (
		<div>
			<Typography variant='h6'>Расстояние между точками</Typography>
			<Typography variant='body1'>
				№1 - №2 = {calculateDistance(0, 1)}
			</Typography>
			<Typography variant='body1'>
				№2 - №3 = {calculateDistance(1, 2)}
			</Typography>
			<Typography variant='body1'>
				№3 - №1 = {calculateDistance(2, 0)}
			</Typography>
		</div>
	);
};

export default Two;

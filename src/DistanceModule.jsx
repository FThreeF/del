import { Typography } from '@mui/material';
import React from 'react';

const DistanceModule = ({ points }) => {
	const calculateDistance = (a, b) => {
		const distance = Math.sqrt((points[b].x - points[a].x) ** 2 + (points[b].y - points[a].y) ** 2);
		return distance.toFixed(2);
	};

	return (
		<div>
			<Typography variant='h5'>Расстояние между точками</Typography>
			<Typography variant='body1'>
				Точки <span style={{ color: 'rgb(2, 178, 175)', textShadow: '0 0 1px black' }}>№1</span> и{' '}
				<span style={{ color: 'rgb(46, 150, 255)', textShadow: '0 0 1px black' }}>№2</span> = {calculateDistance(0, 1)}
			</Typography>
			<Typography variant='body1'>
				Точки <span style={{ color: 'rgb(46, 150, 255)', textShadow: '0 0 1px black' }}>№2</span> и{' '}
				<span style={{ color: 'rgb(184, 0, 216)', textShadow: '0 0 1px black' }}>№3</span> = {calculateDistance(1, 2)}
			</Typography>
			<Typography variant='body1'>
				Точки <span style={{ color: 'rgb(184, 0, 216)', textShadow: '0 0 1px black' }}>№3</span> и{' '}
				<span style={{ color: 'rgb(2, 178, 175)', textShadow: '0 0 1px black' }}>№1</span> = {calculateDistance(2, 0)}
			</Typography>
		</div>
	);
};

export default DistanceModule;

import { Typography } from '@mui/material';
import React from 'react';

const TriangleModule = ({ points }) => {
	const calculateTriangleArea = () => {
		const a = Math.sqrt((points[1].x - points[0].x) ** 2 + (points[1].y - points[0].y) ** 2);
		const b = Math.sqrt((points[2].x - points[1].x) ** 2 + (points[2].y - points[1].y) ** 2);
		const c = Math.sqrt((points[0].x - points[2].x) ** 2 + (points[0].y - points[2].y) ** 2);

		const s = (a + b + c) / 2;
		const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
		return area.toFixed(2);
	};

	return (
		<div>
			<Typography variant='h5'>Площадь треугольника</Typography>
			<Typography variant='body1'>{calculateTriangleArea()}</Typography>
		</div>
	);
};

export default TriangleModule;

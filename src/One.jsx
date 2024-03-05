import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import React, { useState } from 'react';

const One = ({ points, setPoints }) => {
	const [coordinates, setCoordinates] = useState([]);

	const handleFileChange = (e) => {
		const file = e.target.files[0];

		if (file) {
			const reader = new FileReader();
			reader.onload = (event) => {
				const content = event.target.result;
				const lines = content.split('\n');
				const newCoordinates = lines.map((line) => {
					const [x, y] = line.split(' ').map(parseFloat);
					return { x, y };
				});
				setCoordinates(newCoordinates);
				setPoints(newCoordinates);
			};
			reader.readAsText(file);
		}
	};

	const VisuallyHiddenInput = styled('input')({
		clip: 'rect(0 0 0 0)',
		clipPath: 'inset(50%)',
		height: 1,
		overflow: 'hidden',
		position: 'absolute',
		bottom: 0,
		left: 0,
		whiteSpace: 'nowrap',
		width: 1,
	});

	return (
		<div className='main'>
			<Typography variant='h6'>Координаты точек на плоскости</Typography>
			<ul style={{ listStyleType: 'none' }}>
				<li>№1: {`(x: ${points[0].x}, y: ${points[0].y})`}</li>
				<li>№2: {`(x: ${points[1].x}, y: ${points[1].y})`}</li>
				<li>№3: {`(x: ${points[2].x}, y: ${points[2].y})`}</li>
			</ul>

			<input type='file' onChange={handleFileChange} />
		</div>
	);
};

export default One;

import styled from '@emotion/styled';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { ScatterChart, SparkLineChart } from '@mui/x-charts';
import React, { useState } from 'react';

const MainModule = ({ points, setPoints }) => {
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
				<li><span style={{color: 'rgb(2, 178, 175)', textShadow: '0 0 1px black'}}>№1</span>: {`(x: ${points[0].x}, y: ${points[0].y})`}</li>
				<li><span style={{color: 'rgb(46, 150, 255)', textShadow: '0 0 1px black'}}>№2</span>: {`(x: ${points[1].x}, y: ${points[1].y})`}</li>
				<li><span style={{color: 'rgb(184, 0, 216)', textShadow: '0 0 1px black'}}>№3</span>: {`(x: ${points[2].x}, y: ${points[2].y})`}</li>
			</ul>

			<ScatterChart
				width={400}
				height={200}
				series={[
					{
						label: 'Точка №1',
						data: [{ x: points[0].x, y: points[0].y, id: 1 }],
					},
					{
						label: 'Точка №2',
						data: [{ x: points[1].x, y: points[1].y, id: 2 }],
					},
					{
						label: 'Точка №3',
						data: [{ x: points[2].x, y: points[2].y, id: 3 }],
					},
				]}
			/>
			<Button size='small' disableElevation onChange={handleFileChange} component='label' role={undefined} variant='contained' tabIndex={-1}>
				Загрузить файл
				<VisuallyHiddenInput type='file' />
			</Button>
		</div>
	);
};

export default MainModule;

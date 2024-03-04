import React, { useState } from 'react';
import MainModule from './MainModule';
import DistanceModule from './DistanceModule';
import TriangleModule from './TriangleModule';
import './Style.css';

const App = () => {
	const [points, setPoints] = useState([
		{ x: 1, y: 4 },
		{ x: 2, y: 2 },
		{ x: 1, y: 3 },
	]);



  
	return (
		<div className='app'>
			<DistanceModule points={points} />
			<TriangleModule points={points} />
			<MainModule points={points} setPoints={setPoints} />
		</div>
	);
};

export default App;

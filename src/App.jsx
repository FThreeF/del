import React, { useState } from 'react';
import One from './One';
import Three from './Three';
import './Style.css';
import Two from './Two';

const App = () => {
	const [points, setPoints] = useState([
		{ x: 1, y: 1 },
		{ x: 2, y: 4 },
		{ x: 3, y: 3 },
	]);



  
	return (
		<div className='app'>
			<Two points={points} />
			<Three points={points} />
			<One points={points} setPoints={setPoints} />
		</div>
	);
};

export default App;

import React from 'react';

const Header = ({ setExpenseData, setAlerMessage }) => {
	const handleRomoveAllClick = () => {
		setExpenseData([]);
		setAlerMessage('항목이 모두 삭제되었습니다');
		setTimeout(() => setAlerMessage(null), 2000);
	};
	return (
		<header className='flex justify-between mb-3'>
			<h1 className='text-2xl font-semibold	'>예산 계산기</h1>
			<button onClick={handleRomoveAllClick}>Delete All</button>
		</header>
	);
};

export default Header;

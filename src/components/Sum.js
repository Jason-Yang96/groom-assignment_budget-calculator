import React from 'react';

const Sum = ({ expenseData }) => {
	return (
		<h1>
			총 예상 지출액:{' '}
			{expenseData
				.reduce((total, data) => total + parseInt(data.value), 0)
				.toLocaleString()}
			원 {/* 1000 마다 구분자 넣어주기 */}
		</h1>
	);
};

export default Sum;

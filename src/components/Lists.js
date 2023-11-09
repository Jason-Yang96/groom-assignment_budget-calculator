import React from 'react';
import List from './List';

const Lists = ({ handleRemove, expenseData, setExpenseData }) => {
	return (
		<div>
			<ul className='mt-3'>
				{expenseData.map((data, index) => (
					<List
						id={data.id}
						value={data.value}
						name={data.name}
						expenseData={expenseData}
						handleRemove={handleRemove}
						setExpenseData={setExpenseData}
					/>
				))}
			</ul>
		</div>
	);
};

export default Lists;

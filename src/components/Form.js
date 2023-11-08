import React from 'react';

const Form = ({
	handleSubmit,
	handleExpenseNameChange,
	expenseName,
	handleExpenseValueChange,
	expenseValue,
}) => {
	return (
		<form
			className='flex justify-between'
			onSubmit={handleSubmit}>
			<div className='flex flex-col flex-1'>
				<label>지출 항목</label>
				<input
					type='text'
					placeholder='항목 이름을 적어주세요'
					onChange={handleExpenseNameChange}
					value={expenseName}
				/>
			</div>
			<div className='flex flex-col flex-1'>
				<label>예상 비용</label>
				<input
					type='number'
					min='500'
					placeholder='예상 지출액을 적어주세요'
					onChange={handleExpenseValueChange}
					value={expenseValue}
				/>
			</div>
			<input
				className='flex-none'
				type='submit'
				value='추가'
			/>
		</form>
	);
};

export default Form;

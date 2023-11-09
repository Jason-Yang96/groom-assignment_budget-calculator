import React, { useState } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Notification from './components/Notification';
import Form from './components/Form';
import Sum from './components/Sum';
import Lists from './components/Lists';

const App = () => {
	const [expenseData, setExpenseData] = useState([]);
	const [expenseName, setExpenseName] = useState('');
	const [expenseValue, setExpenseValue] = useState('');
	const [alertMessage, setAlertMessage] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();

		let newExpense = {
			id: Date.now(),
			name: expenseName,
			value: expenseValue,
		};
		setExpenseData((prev) => [...prev, newExpense]);
		setExpenseName('');
		setExpenseValue('');
		setAlertMessage('항목이 추가되었습니다');
		setTimeout(() => setAlertMessage(null), 2000);
	};
	const handleExpenseNameChange = (e) => {
		setExpenseName(e.target.value);
	};
	const handleExpenseValueChange = (e) => {
		setExpenseValue(e.target.value);
	};
	const handleRemove = (id) => {
		let newExpenseData = expenseData.filter((data) => data.id !== id);
		setExpenseData(newExpenseData);
		setAlertMessage('항목이 삭제되었습니다');
		setTimeout(() => setAlertMessage(null), 2000);
	};

	const handleEnd = (e) => {
		if (!e.destination) return;

		const newExpenseData = expenseData;
		const [reorderedItem] = newExpenseData.splice(e.source.index, 1);
		newExpenseData.splice(e.destination.index, 0, reorderedItem);
		setExpenseData(newExpenseData);
	};
	return (
		<div className='relative flex flex-col items-center justify-center w-screen h-screen bg-blue-100'>
			<Notification alertMessage={alertMessage} />
			<div className='bg-white w-full p-6 m-4 rounded shadow md:w-3/4 md:max-w-lg lg:w-3/4 lg:max-w-lg'>
				<Header
					setExpenseData={setExpenseData}
					setAlerMessage={setAlertMessage}
				/>
				<Form
					handleSubmit={handleSubmit}
					handleExpenseNameChange={handleExpenseNameChange}
					expenseName={expenseName}
					handleExpenseValueChange={handleExpenseValueChange}
					expenseValue={expenseValue}
				/>
				<Lists
					handleRemove={handleRemove}
					handleEnd={handleEnd}
					expenseData={expenseData}
				/>
			</div>
			<Sum expenseData={expenseData} />
		</div>
	);
};

export default App;

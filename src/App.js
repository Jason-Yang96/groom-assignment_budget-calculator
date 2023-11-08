import React, { useState } from 'react';
import './styles/App.css';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const App = () => {
	const [expenseData, setExpenseData] = useState([]);
	const [expenseName, setExpenseName] = useState('');
	const [expenseValue, setExpenseValue] = useState('');
	const [alerMessage, setAlerMessage] = useState(null);

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
		setAlerMessage('항목이 추가되었습니다');
		setTimeout(() => setAlerMessage(null), 2000);
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
		setAlerMessage('항목이 삭제되었습니다');
		setTimeout(() => setAlerMessage(null), 2000);
	};
	const handleRomoveAllClick = () => {
		setExpenseData([]);
		setAlerMessage('항목이 모두 삭제되었습니다');
		setTimeout(() => setAlerMessage(null), 2000);
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
			<div className='absolute top-11'>{alerMessage}</div>
			<div className='bg-white w-full p-6 m-4 rounded shadow md:w-3/4 md:max-w-lg lg:w-3/4 lg:max-w-lg'>
				<header className='flex justify-between mb-3'>
					<h1 className='text-2xl font-semibold	'>예산 계산기</h1>
					<button onClick={handleRomoveAllClick}>Delete All</button>
				</header>
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
				<DragDropContext onDragEnd={handleEnd}>
					<Droppable droppableId='expenseItems'>
						{(provided) => (
							<div
								{...provided.droppableProps}
								ref={provided.innerRef}>
								<ul className='mt-3'>
									{expenseData.map((data, index) => (
										<Draggable
											key={data.id}
											draggableId={data.id.toString()}
											index={index}>
											{(provided, snapshot) => (
												<div
													key={data.id}
													{...provided.draggableProps}
													ref={provided.innerRef}
													className={`${
														snapshot.isDragging
															? 'bg-gray-400'
															: 'bg-gray-100'
													}`}>
													<li
														className='flex justify-between mb-2 hover:bg-gray-200 active:bg-gray-300'
														key={data.id}>
														<span className='flex-1'>
															{data.name}
														</span>
														<span className='flex-1'>
															{parseInt(
																data.value
															).toLocaleString()}
															원
														</span>
														<button
															className='flex-none mr-2'
															onClick={() =>
																handleRemove(
																	data.id
																)
															}>
															수정
														</button>
														<button
															className='flex-none'
															onClick={() =>
																handleRemove(
																	data.id
																)
															}>
															삭제
														</button>
													</li>
												</div>
											)}
										</Draggable>
									))}
								</ul>
							</div>
						)}
					</Droppable>
				</DragDropContext>
			</div>
			<div>
				<h1>
					총 예상 지출액:{' '}
					{expenseData
						.reduce(
							(total, data) => total + parseInt(data.value),
							0
						)
						.toLocaleString()}
					원 {/* 1000 마다 구분자 넣어주기 */}
				</h1>
			</div>
		</div>
	);
};

export default App;

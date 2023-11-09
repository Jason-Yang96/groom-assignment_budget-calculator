import React from 'react';
import { useState } from 'react';

const List = ({
	id,
	value,
	name,
	provided,
	snapshot,
	handleRemove,
	expenseData,
	setExpenseData,
}) => {
	const [isEditing, setisEditing] = useState(false);
	const [editedName, setEditedName] = useState(name);
	const [editedValue, setEditedValue] = useState(value);

	const handleEditSubmit = (e) => {
		e.preventDefault();
		let newExpenseData = expenseData.map((data) => {
			if (data.id === id) {
				data.name = editedName;
				data.value = editedValue;
			}
			return data;
		});
		setExpenseData(newExpenseData);
		setisEditing(false);
		localStorage.setItem('expenseData', JSON.stringify(newExpenseData));
	};
	const handleEditNameChange = (e) => {
		setEditedName(e.target.value);
	};
	const handleEditValueChange = (e) => {
		setEditedValue(e.target.value);
	};

	if (isEditing) {
		return (
			<li className='flex justify-between mb-2 bg-gray-100 hover:bg-gray-200 active:bg-gray-300'>
				<form
					className='flex'
					onSubmit={handleEditSubmit}>
					<input
						value={editedName}
						type='text'
						className='w-full px-3 py-2 mr-4 text-gray-500 rounded'
						onChange={handleEditNameChange}
					/>
					<input
						value={editedValue}
						type='number'
						className='w-full px-3 py-2 mr-4 text-gray-500 rounded'
						onChange={handleEditValueChange}
					/>
				</form>
				<button
					className='flex-none mr-2'
					onClick={handleEditSubmit}>
					저장
				</button>
				<button
					className='flex-none'
					onClick={() => handleRemove(id)}>
					삭제
				</button>
			</li>
		);
	} else {
		return (
			<li
				key={id}
				{...provided.draggableProps}
				ref={provided.innerRef}
				{...provided.dragHandleProps}
				className={`${
					snapshot.isDragging ? 'bg-gray-400' : 'bg-gray-100'
				} flex justify-between mb-2 hover:bg-gray-200 active:bg-gray-300`}>
				<span className='flex-1'>{name}</span>
				<span className='flex-1'>
					{parseInt(value).toLocaleString()}원
				</span>
				<button
					className='flex-none mr-2'
					onClick={() => setisEditing(true)}>
					수정
				</button>
				<button
					className='flex-none'
					onClick={() => handleRemove(id)}>
					삭제
				</button>
			</li>
		);
	}
};

export default List;

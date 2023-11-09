import React from 'react';

const List = ({ id, value, name, provided, snapshot, handleRemove }) => {
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
			<span className='flex-1'>{parseInt(value).toLocaleString()}원</span>
			<button
				className='flex-none mr-2'
				onClick={() => handleRemove(id)}>
				수정
			</button>
			<button
				className='flex-none'
				onClick={() => handleRemove(id)}>
				삭제
			</button>
		</li>
	);
};

export default List;

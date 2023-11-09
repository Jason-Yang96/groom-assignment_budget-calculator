import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import List from './List';

const Lists = ({ handleEnd, handleRemove, expenseData, setExpenseData }) => {
	return (
		<div>
			<DragDropContext onDragEnd={handleEnd}>
				<Droppable droppableId={'expenseItems'}>
					{(provided) => (
						<ul
							{...provided.droppableProps}
							ref={provided.innerRef}
							className='mt-3'>
							{expenseData.map((data, index) => (
								<Draggable
									key={data.id}
									draggableId={data.id.toString()}
									index={index}>
									{(provided, snapshot) => (
										<List
											id={data.id}
											value={data.value}
											name={data.name}
											expenseData={expenseData}
											provided={provided}
											snapshot={snapshot}
											handleRemove={handleRemove}
											setExpenseData={setExpenseData}
										/>
									)}
								</Draggable>
							))}
							{provided.placeholder}
						</ul>
					)}
				</Droppable>
			</DragDropContext>
		</div>
	);
};

export default Lists;

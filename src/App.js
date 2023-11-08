import React, {useState} from 'react';
import './styles/App.css';

const App = () => {
  const [expenseData, setExpenseData] = useState([]);
  const [expenseName, setExpenseName] = useState("");
  const [expenseValue, setExpenseValue] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    let newExpense = {
      id: Date.now(),
      name: expenseName,
      value: expenseValue,
    }

    setExpenseData(prev => [...prev, newExpense]);
    setExpenseName("");
    setExpenseValue("");
    console.log(newExpense);
    console.log(expenseData)
  }
  
  const handleExpenseNameChange = (e) => {
    setExpenseName(e.target.value);
  }
  const handleExpenseValueChange = (e) => {
    setExpenseValue(e.target.value);
  }
  const handleRemove = (id) => {
    let newExpenseData = expenseData.filter((data) => data.id !== id);
    setExpenseData(newExpenseData);
  }
  const handleRomoveAllClick = () => {
    setExpenseData([]);
  }
  
  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen bg-blue-100'>
      <div className='bg-white w-full p-6 m-4 rounded shadow md:w-3/4 md:max-w-lg lg:w-3/4 lg:max-w-lg'>
        <header className='flex justify-between mb-3'>
          <h1 className='text-2xl font-semibold	'>예산 계산기</h1>
          <button onClick={handleRomoveAllClick}>Delete All</button>
        </header>
        <form className='flex justify-between' onSubmit={handleSubmit}>
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
        <ul className='mt-3'>
          {expenseData.map((data) => (
            <li 
              className='flex justify-between mb-2'
              key={data.id}>
                <span className='flex-1'>{data.name}</span>
                <span className='flex-1'>{parseInt(data.value).toLocaleString()}원</span>
                <button
                  className='flex-none'
                  onClick={() => handleRemove(data.id)}  
                  >
                  삭제
                </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1>총 지출: {expenseData.reduce((total, data) =>  total + parseInt(data.value), 0).toLocaleString()}원
        </h1>
      </div>
    </div>
  )
}

export default App
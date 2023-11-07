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

  return (
    <div className='bg-gray' >
      <header>
        <h1 className='head-title'>예산 계산기</h1>
      </header>
      <form className='list-insert' onSubmit={handleSubmit}>
        <div className='expenditure-name'>
          <label>지출 항목</label>
          <input 
            placeholder='항목 이름을 적어주세요'
            onChange={handleExpenseNameChange}
            value={expenseName}
            />
        </div>
        <div className='cost'>
          <label>예상 비용</label>
          <input 
            placeholder='예상 지출액을 적어주세요'
            onChange={handleExpenseValueChange}
            value={expenseValue}
            />
        </div>
          <input
            type='submit'
            value='추가'
          />
      </form>
      <ul>
        {expenseData.map((data) => (
          <li key={data.id}>
            <span>{data.name}</span>
            <span>{data.value}</span>
            <button
              onClick={() => handleRemove(data.id)}  
              >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
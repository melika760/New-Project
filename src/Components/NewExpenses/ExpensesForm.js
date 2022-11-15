import React,{useState} from 'react'
import'./ExpenseForm.css'
export default function ExpenseForm(props){
const[enteredtitle,SetTitle]=useState('');
const[enteredamount,SetAmount]=useState('')
const[enteredDate,SetDate]=useState('')
    function titleChangeHandler(event){
SetTitle(event.target.value)
    }
    function amountChangeHandler(event){
        SetAmount(event.target.value)
    }
function dateChangeHandler(event){
    SetDate(event.target.value)
}
function SubmitHandler(event){
    event.preventDefault();
    const ExpenseData ={
        title:enteredtitle,
        Amount:enteredamount,
        Date:new Date(enteredDate)
    }
    props.onSaveExpenseData(ExpenseData);
    SetAmount(" ");
    SetTitle(" ");
    SetDate(" ")
}
    return(
        <form onSubmit={SubmitHandler}>
            <div className='new-expense__controls'>
    <div className='new-expense__control'onChange={titleChangeHandler}>
<label>Title</label>
<input type="text"/>
    </div>
    <div className='new-expense__control'>
<label>Amount</label>
<input type="number" min="0.01" step='0.01'onChange={amountChangeHandler}/>
    </div>
    <div className='new-expense__control'>
<label>Date</label>
<input  type='date'
            min='2019-01-01'
            max='2022-12-31' onChange={dateChangeHandler}/>
    </div></div>
    <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
    </div>
    
    </form>
    )
}
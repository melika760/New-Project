import React,{useState} from 'react'
import './NewExpenses.css'
import ExpenseForm from './ExpensesForm'
export default function NewExpenses(props){
    const[IsEditing,SetIsEditing]=useState(false)
    function expenseDataHandler(enteredExpenseData){
        const ExpenseData ={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        props.onExpensechange(ExpenseData)
        SetIsEditing(false)
    }
    function SaveEditing(){
        SetIsEditing(true)
    }
    function OnCancle()
    {
        SetIsEditing(false)
    }
    return(<div className='new-expense'>
     {!IsEditing && <button onClick={SaveEditing}>Add Expenses</button>}
      {IsEditing && <ExpenseForm onSaveExpenseData={expenseDataHandler} OnCancle={OnCancle}/>}
    </div>)
}
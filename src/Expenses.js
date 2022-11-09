import React,{useState} from 'react';
import ExpenseItem from './Components/ExpensesItems/ExpenseItem';
import './Expenses.css'
import Card from './Components/UI/Card';
import ExpensesFilter from './Components/ExpensesItems/ExpensesFilter';
export default function Expenses(props){
    const [filteredDate,SetfilteredDate] = useState("2020")
    function ChangingFilterTime(selectedYear){
SetfilteredDate(selectedYear)
    }
    return(
        <Card className='expenses'>
            <ExpensesFilter value={filteredDate} OnchangeFilter={ChangingFilterTime}/>
        <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}/>
        <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}/>
        <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}/>
        </Card>
    )
}
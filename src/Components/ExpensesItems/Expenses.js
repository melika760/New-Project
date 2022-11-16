import React,{useState} from 'react';
import ExpensesList from './ExpensesList';
import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
export default function Expenses(props){
    const [filteredDate,SetfilteredDate] = useState("2020")
    function ChangingFilterTime(selectedYear){
SetfilteredDate(selectedYear)
    }
    const Filteredyearitem = props.items.filter(expense=>{console.log(expense.date?.getFullYear().toString()===filteredDate)
        return expense.date.getFullYear().toString() === filteredDate;
        
        
    })

    return(<li>
        <Card className='expenses'>
            <ExpensesFilter selected={filteredDate} OnchangeFilter={ChangingFilterTime}/>
       <ExpensesList itemsData={Filteredyearitem}/>
        </Card></li>
    )
}
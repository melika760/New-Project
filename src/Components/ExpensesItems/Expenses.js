import React,{useState} from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
export default function Expenses(props){
    const [filteredDate,SetfilteredDate] = useState("2020")
    function ChangingFilterTime(selectedYear){
SetfilteredDate(selectedYear)
    }
    const Filteredyearitem = props.items.filter(expense=>{
        return(expense.date.getFullYear().toString() === filteredDate)
        
    })
    return(
        <Card className='expenses'>
            <ExpensesFilter value={filteredDate} OnchangeFilter={ChangingFilterTime}/>
            {Filteredyearitem.map(expense =>
                 <ExpenseItem 
                 key={expense.id}
                 title={expense.title}
                  amount={expense.amount} 
                  date={expense.date}/>
            )}
       
        </Card>
    )
}
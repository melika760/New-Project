import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'
export default function ExpensesList(props){
    if(props.itemsData.length === 0){
        return(
            <h2 className='expenses-list__fallback'>
                No Expenses Found
            </h2>
        )

    }

return(<ul className='expenses-list'>
    {props.itemsData.map(expense =>
              <ExpenseItem 
              key={expense.id}
              title={expense.title}
               amount={expense.amount} 
               date={expense.date}/>
         )
}</ul>
)
}
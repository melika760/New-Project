import './NewExpenses.css'
import ExpenseForm from './ExpensesForm'
export default function NewExpenses(props){
    function expenseDataHandler(enteredExpenseData){
        const ExpenseData ={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        props.onExpensechange(ExpenseData)

    }
    return(<div className='new-expense'>
        <ExpenseForm onSaveExpenseData={expenseDataHandler}/>
    </div>)
}
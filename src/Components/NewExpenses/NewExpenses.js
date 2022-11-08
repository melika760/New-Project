import './NewExpenses.css'
import ExpenseForm from './ExpensesForm'
export default function NewExpenses(){
    function expenseDataHandler(enteredExpenseData){
        const ExpenseData ={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        console.log(ExpenseData)

    }
    return(<div className='new-expense'>
        <ExpenseForm onSaveExpenseData={expenseDataHandler}/>
    </div>)
}
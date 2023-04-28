import './ExpenseItem.css';

//A React Component is just a JS function
function ExpenseItem() {
	return (
		<div className='expense-item'>
			<div>April 28th 2023</div>
			<div className='expense-item__description'>
				<h2>Car Insurance</h2>
                <div className='expense-item__price'>259.65</div>
			</div>
		</div>
	);
}

export default ExpenseItem;

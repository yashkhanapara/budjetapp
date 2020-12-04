import React ,{useContext , useState}from  'react';
import { v4 as uuidv4 } from 'uuid';

import IncomeList from './IncomeList';
import ExpenceList from './ExpenceList';
import Mycontextprovider from '../context/Mycontextprovider';
import {mycontext} from '../context/Mycontextprovider';
 

const Budjet = (props)=>{
	const {income , expence,addincome,addexpence}  = useContext(mycontext);

	const incomesum = income.map((val)=>val.amount);
	const incomesummm =incomesum.reduce((total, num )=>{
		return total + Math.round(num)
	}, 0)
	const expencesum = expence.map((val)=>val.amount);
	const expencesummm =expencesum.reduce((total, num )=>{
		return total + Math.round(num)
	}, 0)

	console.log(incomesummm)
	console.log(incomesum)
	const [incomedata , setincomedata] = useState({
		title:'',
		amount:0,
	})
	const {title , amount} = incomedata;

	const [expencedata , setexpencedata] = useState({
		title:'',
		amount:0,
	})
	

	const income_value =(e) =>{
		const name = e.target.name;
		const value = e.target.value;

		setincomedata((preval)=>{
			return {
				...preval,
				[name]:value,
			};
		})
	}
	
	const expence_value =(e) =>{
		const name = e.target.name;
		const value = e.target.value;

		setexpencedata((preval)=>{
			return {
				...preval,
				[name]:value,
			}
		})
	}

	const submitincome = (event)=>{
		event.preventDefault();
		if (title !== ''){
			const addnewicome={
			id:uuidv4(),
			title,
			amount:amount*1,
		}

		addincome(addnewicome);
		}
		
		setincomedata(()=>{
			return {

				title:"",
				amount:0,
			}
			
		})
	}

	const submitexpence = (event)=>{
		event.preventDefault();
		if(expencedata.title !== ''){
			
		const addnewexpence={
			id:uuidv4(),
			title:expencedata.title,
			amount:expencedata.amount*1,
		}
		addexpence(addnewexpence);
		}
		setexpencedata(()=>{
			return {
				title:'',
				amount:0,
			}
		})
	}


	return(
		<>
			<div className='main_div'>
				<div className="context_div">
					<div className="row container">
						<div className="col-sm-4">
							<h3 className="heading">BUDJET APP </h3>
						</div>
						<div className="col-sm-4">
							<form className="income_form form-group">
								<input onChange={(e)=> income_value(e)} name='title' value={incomedata.title} type="text" placeholder="Add Income" className="form-control mb-3"/>
								<input onChange={(e)=> income_value(e)} name='amount' value={incomedata.amount} type="number" placeholder="Amount " className="form-control"/>
								<button onClick={event=>submitincome(event) }type="button" className="btn btn-success mt-3">submit</button>
							</form>
						</div>
						<div className="col-sm-4">
							<form className="expnce_form form-group">
								<input onChange={(e)=> expence_value(e)} name="title" value={expencedata.title} type="text" placeholder="Add Expence" className="form-control mb-3"/>
								<input onChange={(e)=> expence_value(e)}  name="amount" value={expencedata.amount} type="number" placeholder="Amount " className="form-control"/>
								<button onClick={event=>submitexpence(event)} type="button" className="btn btn-danger mt-3">submit</button>

							</form>
						</div>
					</div>
					<div className="row">
						 <div className="col-sm-4 ">
						 	<h4>Your Balance</h4>
						 	<h5 className="pl-4">
						 		<i className="fa fa-inr" aria-hidden="true"></i>
						 		<span className="pl-2">{incomesummm - expencesummm}</span>
						 	</h5>
						 	<div className='d-flex pt-5'>
						<div className='pr-2 income_total'>
							<h6>Your Income</h6>
							<span>
							+ <i className="fa fa-inr pr-1" aria-hidden="true"></i>
							{incomesummm}</span>
						</div>
						<div className='expnece_total'>
							<h6>Your Expence</h6>
							<span>
							- <i className="fa fa-inr pr-1" aria-hidden="true"></i>
							{expencesummm}</span>
						</div>
					</div>
						 </div>
						 <div className="col-sm-4">
						 	<h6>Trasaction History </h6>
						 	<ul className="Trasaction_incomelist">
						 		{ income.map((val)=>{
						 			return <IncomeList val={val} />
						 		})}

						 	</ul>
						 </div>
						 <div className="col-sm-4 expnece_div">
						 	<h6>Trasaction History </h6>
						 	<ul className="Trasaction_expencelist">
						 		{expence.map((val)=>{
						 			return <ExpenceList val={val} />
						 		})}
						 	</ul>
						 </div>
					</div>
				</div>
			</div>
		</>
		);
}
export default Budjet ; 
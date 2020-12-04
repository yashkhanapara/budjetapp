import React,{useContext} from 'react';
import {mycontext} from '../context/Mycontextprovider';


const ExpenceList = ({val})=>{
	const {deleteexpence} =useContext(mycontext);
	return (
		<>
			<li  className="mb-1">
		 		{val.title} 
		 		<span className="float-right">
		 			<i className="fa fa-inr " aria-hidden="true"></i>
		 		{val.amount}
		 			<button onClick={()=>deleteexpence(val.id)} className="delete_button"><i className="fa fa-trash-o pl-2" aria-hidden="true"></i></button>
		 		</span>
	 		</li>
		</>
		);
}
export default ExpenceList;
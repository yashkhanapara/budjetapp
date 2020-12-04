import React ,{createContext , useReducer} from 'react';


const instate ={
	expence:[{
    "userId": 1,
    "id": 1,
    "title": "purchase grossery",
    "amount": 150,
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "purcase clothes",
    "amount":1350,
    "completed": false
  }],
	income:[{
    "userId": 1,
    "id": 4,
    "title": "rent recived",
    "amount":1200,
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "recived intrest",
    "amount":5000,
    "completed": false
  }]
}
 export const mycontext = createContext(instate);

const Mycontextprovider =(props)=>{
	const reducer = (state , action)=>{
		switch (action.type){
      case "add_income":
      return {
        ...state,
        income:[action.payload, ...state.income],
      };
      case "add_expence":
      return {
        ...state,
        expence:[action.payload, ...state.expence],
      };
      case "delete_income":
      return{
        ...state,
        income:state.income.filter(
          (income)=>income.id  !== action.payload),
      };
      case "delete_expence":
      return{
        ...state,
        expence:state.expence.filter(
          (expence)=>expence.id  !== action.payload),
      };
			default : 
			return state;
		}}
	
	const [state, dispatch]=useReducer(reducer , instate);

  const addincome = income =>{
    dispatch({
      type:"add_income",
      payload : income,
    }) 
  }
  const addexpence = expence =>{
    dispatch({
      type:"add_expence",
      payload : expence,
    }) 
  }
  const deleteincome = id =>{
    dispatch ({
      type:"delete_income",
      payload:id,
    })
  }
  const deleteexpence = id =>{
    dispatch ({
      type:"delete_expence",
      payload:id,
    })
  }
	return (
		<mycontext.Provider value={
		{
			income:state.income,
			expence:state.expence,
      addincome,
      addexpence,
      deleteincome,
      deleteexpence
		}}>
		{props.children}
		</mycontext.Provider>
		);
}
export default Mycontextprovider;


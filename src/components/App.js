import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
	
	const [pizza, setPizza] = useState([])
	const [formItem, setFormItem] = useState({})

	const onHandleEdit = (e) => {
		console.log(e.target.value)
		setFormItem(pizza.filter(pie => e.target.value === pie.id ? pie : null))
	}
	console.log(formItem)

	useEffect(() =>{
		fetch("http://localhost:3001/pizzas")
			.then(r => r.json())
			.then(data => setPizza(data))
	}, [])

	return (
		<>
			<Header />
			<PizzaForm />
			<PizzaList pizza={pizza} handleEdit={onHandleEdit}/>
		</>
	);
}

export default App;

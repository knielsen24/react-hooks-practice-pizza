import React from "react";
import Pizza from "./Pizza";


function PizzaList({ pizza, handleEdit }) {

	const pizzaTable = pizza.map((pie) => {
		// console.log(pie.id)
		return (
			<Pizza
				handleEdit={handleEdit}
				key={pie.id}
				id={pie.id}
				topping={pie.topping}
				size={pie.size}
				vegetarian={pie.vegetarian}
			/>
		)
	})

	return (
		<table className="table table-striped">
			<thead>
				<tr>
					<th scope="col">Topping</th>
					<th scope="col">Size</th>
					<th scope="col">Vegetarian?</th>
					<th scope="col">Edit</th>
				</tr>
			</thead>
			<tbody>
				{pizzaTable}
			</tbody>
		</table>
	);
}

export default PizzaList;

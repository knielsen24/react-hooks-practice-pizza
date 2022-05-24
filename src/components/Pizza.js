import React from "react";

function Pizza({ id, topping, size, vegetarian, handleEdit }) {
	
	return (
		<tr>
			<td value={topping} name="topping" >{topping}</td>
			<td value={size} name="size" >{size}</td>
			<td value={vegetarian} name="vegetarian" >{vegetarian ? "Yes" : "No"}</td>
			<td>
				<button onClick={handleEdit} value={id} type="button" className="btn btn-primary">
					Edit Pizza
				</button>
			</td>
		</tr>
	);
}

export default Pizza;

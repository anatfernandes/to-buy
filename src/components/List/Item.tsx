import { useState } from "react";
import { ItemType } from "./List";

type ItemParams = ItemType & {
	index: number;
};

export function Item({ name, checked, index }: ItemParams) {
	const [checkItem, setCheckItem] = useState(checked);

	function toggleCheckItem() {
		setCheckItem(!checkItem);
	}

	return (
		<li className={checkItem ? "checked" : ""} onClick={toggleCheckItem}>
			{name}
		</li>
	);
}

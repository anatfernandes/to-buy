import { useState } from "react";
import { Dispatcher, ItemType } from "./List";

type ItemParams = ItemType & {
	index: number;
	items: ItemType[];
	setItems: Dispatcher<ItemType[]>;
};

export function Item({ name, checked, index, items, setItems }: ItemParams) {
	const [checkItem, setCheckItem] = useState(checked);

	function toggleCheckItem() {
		setCheckItem(!checkItem);
	}

	function deleteItem() {
		const newItems = items.filter((item, id) => index !== id);
		setItems(newItems);
	}

	return (
		<li className={checkItem ? "checked" : ""}>
			<span onClick={toggleCheckItem}>{name}</span>
			<button onClick={deleteItem}>delete</button>
		</li>
	);
}

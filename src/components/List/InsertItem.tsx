import React, { useState } from "react";
import { ItemType } from "./List";

type Dispatcher<S> = React.Dispatch<React.SetStateAction<S>>;

type InsertItemParams = {
	items: ItemType[];
	setItems: Dispatcher<ItemType[]>;
};

export function InsertItem({ items, setItems }: InsertItemParams) {
	const [item, setItem] = useState("");

	function addNewItem(event: React.FormEvent) {
		event.preventDefault();

		setItems([...items, { name: item, checked: false }]);
	}

	function updateNewItem(event: React.ChangeEvent<HTMLInputElement>) {
		setItem(event.currentTarget.value);
	}

	return (
		<form onSubmit={addNewItem}>
			<input required placeholder="Inserir item..." onChange={updateNewItem} />
			<button>Adicionar à lista</button>
		</form>
	);
}

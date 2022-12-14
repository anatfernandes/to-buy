import React, { useState } from "react";
import { Dispatcher, ItemType } from "./List";

type InsertItemParams = {
	setItems: Dispatcher<ItemType[]>;
};

export function InsertItem({ setItems }: InsertItemParams) {
	const [item, setItem] = useState("");

	function addNewItem(event: React.FormEvent) {
		event.preventDefault();

		setItems((prev) => [...prev, { name: item, checked: false }]);
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

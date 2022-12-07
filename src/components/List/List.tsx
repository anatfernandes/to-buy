import { useState } from "react";
import { InsertItem } from "./InsertItem";
import { Item } from "./Item";
import "./List.css";

export type ItemType = {
	name: string;
	checked: boolean;
};

export function List() {
	// inferência de tipo
	const [items, setItems] = useState<ItemType[]>([]);

	return (
		<section>
			<InsertItem items={items} setItems={setItems} />

			<ul>
				{items.map(({ name, checked }, index) => (
					<Item key={index} name={name} checked={checked} index={index} />
				))}
			</ul>
		</section>
	);
}

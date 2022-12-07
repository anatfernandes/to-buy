import { useState } from "react";
import { InsertItem } from "./InsertItem";
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
		</section>
	);
}

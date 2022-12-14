import { useState } from "react";
import { InsertItem } from "./InsertItem";
import { Item } from "./Item";
import "./List.css";

export type ItemType = {
	name: string;
	checked: boolean;
};

export type Dispatcher<S> = React.Dispatch<React.SetStateAction<S>>;

export function List() {
	const [items, setItems] = useState<ItemType[]>([]);

	return (
		<section>
			<InsertItem setItems={setItems} />

			<ul>
				{items.map((item, index) => (
					<Item
						key={index}
						{...item}
						index={index}
						items={items}
						setItems={setItems}
					/>
				))}
			</ul>
		</section>
	);
}

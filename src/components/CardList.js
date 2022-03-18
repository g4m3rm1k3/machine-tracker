import { ListGroup } from "react-bootstrap";

export default function CardList({ listInfo }) {
	return (
		<ListGroup variant="secondary">
			<ListGroup.Item>Date: {listInfo.date}</ListGroup.Item>
			<ListGroup.Item>operator: {listInfo.operator}</ListGroup.Item>
			<ListGroup.Item>Stock: {listInfo.stock}</ListGroup.Item>
		</ListGroup>
	);
}

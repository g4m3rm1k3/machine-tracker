import { useState } from "react";
import Card from "react-bootstrap/Card";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardList from "./CardList";

export default function Machine({ Data }) {
	console.log("the data is ", Data);
	const [status, setStatus] = useState(Data.status);
	const handleStatusChange = (status) => {
		setStatus(status);
	};

	return (
		<div>
			<Card className="bg-secondary">
				<CardHeader {...Data} status={status}></CardHeader>
				<CardBody {...Data} handleStatusChange={handleStatusChange}></CardBody>
				<CardList {...Data} />
			</Card>
		</div>
	);
}

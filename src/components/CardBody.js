import { Dropdown } from "react-bootstrap";
import { useState } from "react";
import { DropdownButton, ButtonGroup } from "react-bootstrap";

export default function CardBody({
	machine,
	status,
	partNumber,
	handleStatusChange,
}) {
	return (
		<div className="card-body bg-secondary text-light">
			<h5 className="card-title text-center fw-bold display-3">{machine}</h5>
			<p className="card-text text-center lead">PART NO: {partNumber}</p>
			<div className="dropdown align-items-center bg-secondary">
				<DropdownButton
					className="bg-secondary"
					title="Change Status"
					as={ButtonGroup}
					key="dark"
					id="dropdown-variant-secondary"
				>
					<Dropdown.Item
						className="bg-secondary"
						onClick={() => handleStatusChange("running")}
					>
						RUNNING
					</Dropdown.Item>
					<Dropdown.Item onClick={() => handleStatusChange("setup")}>
						SETUP
					</Dropdown.Item>
					<Dropdown.Item onClick={() => handleStatusChange("maintenance")}>
						MAINTENANCE
					</Dropdown.Item>
				</DropdownButton>
			</div>
		</div>
	);
}

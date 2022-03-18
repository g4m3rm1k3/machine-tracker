import Machine from "./Machine";
import uuid from "react-uuid";
import Data from "../data/db.json";

export default function Machines() {
	console.log(Data);
	const renderedMachines = Data.machines.map((machine) => (
		<div key={uuid()} className="col-lg-3 col-md-6 mb-5">
			<Machine Data={machine} />
		</div>
	));
	return <div className="row">{renderedMachines}</div>;
}

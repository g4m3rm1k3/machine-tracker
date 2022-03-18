import "./CardHeader.css";

export default function CardHeader({ status, machine }) {
	let shift;
	const today = new Date();
	if (today.getHours() < 6) {
		shift = { act: 3, suff: "rd" };
	} else if (today.getHours() < 14) {
		shift = { act: 1, suff: "st" };
	} else if (today.getHours() < 22) {
		shift = { act: 2, suff: "cd" };
	} else {
		shift = { act: 3, suff: "rd" };
	}

	return (
		<div
			className={`card-header d-1 text-light d-flex justify-content-between flip-card__heading-span flip-card__heading-span--${
				status === "running" ? 2 : status === "setup" ? 1 : 3
			} ${machine}-color`}
			id={machine}
		>
			{status}{" "}
			<span className="">
				{shift.act}
				<sup>{shift.suff}</sup>
			</span>
		</div>
	);
}

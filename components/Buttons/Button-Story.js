import React from "react";

import { storiesOf } from "@storybook/react";

import { Button } from "./Button.js";
import icon from "../assets/thumbs_up.svg";

storiesOf("Button", module).add("Story", () => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
			}}
		>
			<Button margin={"1rem"} small>
				Hi
			</Button>
			<Button margin={"1rem"}>Hi</Button>
			<Button margin={"1rem"} small icon={icon} />
			<Button margin={"1rem"} icon={icon} />
		</div>
	);
});

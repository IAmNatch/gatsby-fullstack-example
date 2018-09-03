import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs/react";

import { Card } from "./Card.js";
import icon from "../assets/art_palette.svg";

const stories = storiesOf("Card", module).addDecorator(withKnobs);

stories
	.add("Single", () => (
		<div
			style={{
				display: "flex",
				justifyContent: "space-around",
				textAlign: "center",
			}}
		>
			<Card shadow={boolean("Shadow", false)}>
				<Card.Title>world</Card.Title>
				<Card.Subtitle>hello</Card.Subtitle>
			</Card>
		</div>
	))
	.add("Group", () => (
		<div style={{ display: "flex", flexDirection: "column" }}>
			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "space-evenly",
				}}
			>
				{[1, 2, 3].map(() => {
					<Card shadow={boolean("Shadow", false)}>
						<Card.Title> {text("Title", "Bright Idea")}</Card.Title>
						<Card.Subtitle>
							{text("Subtitle", "Other great things are great too!")}
						</Card.Subtitle>
					</Card>;
				})}
			</div>
			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "space-evenly",
				}}
			>
				{[1, 2].map(() => {
					<Card shadow={boolean("Shadow", false)}>
						<Card.Title> {text("Title", "Bright Idea")}</Card.Title>
						<Card.Subtitle>
							{text("Subtitle", "Other great things are great too!")}
						</Card.Subtitle>
					</Card>;
				})}
			</div>
		</div>
	));

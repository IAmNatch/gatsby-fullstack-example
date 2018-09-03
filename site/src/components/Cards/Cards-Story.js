import React from "react";

import { storiesOf } from "@storybook/react";

import { Card } from "./Card.js";
import icon from "../assets/art_palette.svg";

storiesOf("Card", module)
	.add("Single", () => (
		<div
			style={{
				display: "flex",
				justifyContent: "space-around",
				textAlign: "center",
			}}
		>
			<Card>
				<Card.Title>Care content</Card.Title>
				<Card.Subtitle>Care content is published.</Card.Subtitle>
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
				<Card shadow={true}>
					<Card.Title>Care content</Card.Title>
					<Card.Subtitle>Care content is published.</Card.Subtitle>
				</Card>
				<Card icon={icon} shadow={true}>
					<Card.Title>Art Work</Card.Title>
					<Card.Subtitle>Care content is published.</Card.Subtitle>
				</Card>
				<Card shadow={true}>
					<Card.Title>Care content</Card.Title>
					<Card.Subtitle>Care content is published.</Card.Subtitle>
				</Card>
			</div>
			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "space-evenly",
				}}
			>
				<Card>
					<Card.Title>Care content</Card.Title>
					<Card.Subtitle>Care content is published.</Card.Subtitle>
				</Card>
				<Card>
					<Card.Title>Care content</Card.Title>
					<Card.Subtitle>Care content is published.</Card.Subtitle>
				</Card>
			</div>
		</div>
	));

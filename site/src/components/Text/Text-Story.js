import React from "react";

import { storiesOf } from "@storybook/react";

import { Text } from "./Text.js";

storiesOf("Text", module).add("Overview", () => (
	<div
		style={{
			display: "flex",
			justifyContent: "space-around",
			textAlign: "center",
		}}
	>
		{/*No Block*/}
		<div>
			<Text block={false} size="large">
				Large
			</Text>
			<Text block={false} size="medium">
				Medium
			</Text>
			<Text size="small">Small</Text>
			<Text size="subtitle">Subtitle</Text>
			<Text size="p">Paragraph</Text>
		</div>
		{/* Block */}
		<div>
			<Text block={true} size="large">
				Large
			</Text>
			<Text size="medium">Medium</Text>

			<Text block={true} size="small">
				Small
			</Text>
			<Text block={true} size="subtitle">
				Subtitle
			</Text>
			<Text block={true} size="p">
				Paragraph
			</Text>
		</div>
	</div>
));

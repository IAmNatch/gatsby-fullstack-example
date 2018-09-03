import React from "react";
import styled from "styled-components";

// Use text for content
import { Text } from "../Text/Text.js";
import { colors } from "../color-palette.js";

const ButtonBase = styled.button`
	background: transparent;
	padding: ${props => (props.small ? `0.5rem 1.5rem` : `1rem 3rem`)};
	border: 0.2rem solid white;
	border-radius: 50px;
	margin: ${props => (props.margin ? props.margin : ``)};

	display: flex;
	justify-content: space-evenly;
	align-items: center;
	outline: none;
`;

const Icon = styled.img`
	margin-left: 1em;
`;

export const Button = props => {
	return (
		<ButtonBase {...props}>
			<Text color="white" size={props.small ? "p" : "small"}>
				Click Me
			</Text>
			{props.icon ? [<Icon src={props.icon} />] : " "}
		</ButtonBase>
	);
};

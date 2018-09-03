import React from "react";
import styled from "styled-components";

const textSizes = {
	large: `
    font-weight: 500;
    line-height: normal;
    font-size: 4rem;
  `,
	medium: `
    font-weight: 500;
    line-height: normal;
    font-size: 2rem;
    letter-spacing: 0.05rem
  `,
	small: `
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    font-size: 1.5rem;
  `,
	subtitle: `
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    font-size: 1.2rem;
    letter-spacing: 0.05rem;

    margin-top: 0.5rem;
  `,
	p: `
    font-size: 1rem;
  `,
};

export const Text = styled.p`
	font-family: Roboto;
	font-style: normal;
	color: ${props => props.color || "black"};
	margin: 0;

	${props => textSizes[props.size || "small"]} ${props =>
		props.block
			? `
    text-transform: uppercase;
    letter-spacing: 0.18rem;
    font-weight: 300;
    `
			: ""};
`;

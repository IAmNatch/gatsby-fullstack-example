import React from 'react';
import styled from 'styled-components';
import { colors, Box, Icon, Text } from '../';
import LazyLoad from 'react-lazyload';

// The ProjectSpec folder is for non-generalized project specific components.

export const Offer = props => (
  <Box
    align={'center'}
    TAlign={'center'}
    flex
    mobileMargin={''}
    maxWidth={'12rem'}
    direction={'column'}
    margin={'0rem 2rem 2rem'}
    mobileMargin={'2rem'}
    onclick=""
  >
    <LazyLoad height={200} once>
      <Icon round src={`assets/${props.icon || 'dna.svg'}`} width={'3rem'} />
    </LazyLoad>
    <Text size="subtitle" margin={'2rem 0 1rem'} color={colors.purpleDark}>
      {props.title}
    </Text>
    <Text size="p" margin={''} color={colors.purpleLight}>
      {props.subtitle}
    </Text>
  </Box>
);

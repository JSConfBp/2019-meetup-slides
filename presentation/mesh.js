import React from 'react';
import styled from 'react-emotion';
// Import Spectacle Core tags
import {
	Appear,
	BlockQuote,
	Cite,
	CodePane,
	Code,
	Deck,
	Fill,
	Fit,
	Heading,
	Image,
	Layout,
	Notes,
	ListItem,
	List,
	Quote,
	Slide,
	Text
  } from 'spectacle';

const mesh = require('../assets/JSConf_Budapest-wire-mesh.svg')
export default ({
	rotate = -100,
	top,
	bottom,
	left,
	right,
  }) => (<div style={{
	position: 'absolute',
	...top && { top },
	...bottom && { bottom },
	...left && { left },
	...right && { right },
	transform: `rotate(${rotate}deg)`,
  }}><Image src={mesh} /></div>);

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


export default ({ name, title, image, align }) => (<div style={{
	display: 'flex',
	flexDirection: (align === 'right') ? `row` : 'row-reverse',
	justifyContent: 'space-between',
	alignItems: 'center',
	position: 'relative',
	maxHeight: '30vh',
	margin: '4rem 0',
	top: '-6rem'
  }}>
	<div style={{
	  textAlign: 'left',
	  flexGrow: 2,
	  padding: '0 4rem',
	  maxWidth: '70%',
	}}>
	  <Heading size={5} textColor="secondary" caps>
		{ name }
	  </Heading>
	  <Text>
		{ title }
	  </Text>
	</div>
	<div style={{
	  flexGrow: 1,
	  overflow: 'hidden',
	  borderRadius: '50%',
	  maxWidth: '30vh',
	  maxHeight: '30vh',
	}}>
	  <Image src={image} style={{
		margin: 0,
		width: '100%',
		height: '100%',
	  }}/>
	</div>
  </div>)

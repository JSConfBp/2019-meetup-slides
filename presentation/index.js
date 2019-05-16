// Import React
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

import Mesh from './mesh';
import Capsule from './capsule';
import SpeakerJS from './js_speaker';
import SpeakerCSS from './css_speaker';
// Import theme
import createTheme from 'spectacle/lib/themes/default';

import  { jsSpeakers, cssSpeakers } from './speakers';

const images = {
  mesh: require('../assets/JSConf_Budapest-wire-mesh.svg'),
  logo: require('../assets/JSConf_Budapest_large-logo.svg'),
};


const chunkSpeakers = (array, num = 2) => {
  return array.sort(() => (0.5 - Math.random()))
  .reduce((arr, speaker, index) => {
    if (index % num === 0) {
      arr.push([])
    }
    arr[arr.length - 1].push(speaker);
    return arr
  },[])
}

const jsSpeakerGroups = chunkSpeakers(jsSpeakers);
const cssSpeakersGroups = chunkSpeakers(cssSpeakers, 3);

jsSpeakerGroups[jsSpeakerGroups.length - 1].push({
  name: 'Surprise Speaker',
  title: 'Soon to be announced!',
  topics: '?',
  image: require('../assets/speakers/surprise.jpg'),
})



const getDiscountCode = () => {
  const params = new URLSearchParams(window.location.search)

  return params.get('code') || 'CODE'
}

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#db3127',
    tertiary: '#0d171f',
    quaternary: '#3580C2',
    cssecondary: '#F05D5E',
  },
  {
    primary: {
      name: 'Roboto',
      googleFont: true,
      styles: ['400', '700i']
    },
    heading: {
      name: 'Space Mono',
      googleFont: true,
      styles: ['400', '700i']
    },
    cssHeading: {
      name: 'Rubik Mono One',
      googleFont: true,
      styles: ['400']
    },
    cssSecondary: {
      name: 'Lora',
      googleFont: true,
      styles: ['400']
    },
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['slide']}
        transitionDuration={300}
        theme={theme}
      >
        <Slide bgColor="primary">
          <Image src={images.logo} width={400} />
          <Heading size={1} fit lineHeight={1} textColor="secondary" textFont="heading">
            JSConf Budapest 2019
          </Heading>

          <Heading size={6} lineHeight={3} textColor="tertiary">
            jsconfbp.com | @jsconfbp
          </Heading>
        </Slide>

        <Slide>
          <Mesh rotate={-100} top={'-60%'} right={'-30%'} />
          <Heading size={1} fit lineHeight={1} textColor="tertiary" textFont="heading">
            26-27 September <br />2019
          </Heading>

          <Heading size={4} lineHeight={3} textColor="secondary">
            Tickets from €311
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={1} textColor="primary" textFont="heading">
            Akvárium Klub
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Mesh rotate={-120} top={'-60%'} right={'-30%'} />
          <Heading size={6} textColor="secondary" caps>
            Bringing You
          </Heading>

          <List style={{
            textAlign: 'center'
          }}>
            <ListItem bulletStyle="🎤">20 speakers</ListItem>
            <ListItem bulletStyle="🛠">Free Workshops!</ListItem>
            <ListItem bulletStyle="👷‍♀️">HackerLounge</ListItem>
            <ListItem bulletStyle="🍺">2 parties</ListItem>
            <ListItem bulletStyle="☕️">Barista coffee</ListItem>
            <ListItem bulletStyle="🥗🍗">Full Vegan catering with opt-in meat!</ListItem>
          </List>
        </Slide>

        <Slide textColor="tertiary">
          <Mesh rotate={-240} bottom={'-60%'} left={'-30%'} />
          <Heading size={1} textColor="secondary" caps textFont="heading">
            Speakers<br />
            &<br />
            topics
          </Heading>
        </Slide>

        {jsSpeakerGroups.map((group, index) => {
          const align = index % 2 === 0 ?  'left' : 'right';
          const meshProps = {
            rotate: index * -30,
          };

          if (align === 'left') {
            meshProps.bottom = '0%';
            meshProps.left = '-10%';
          } else {
            meshProps.bottom = '0%';
            meshProps.right = '-10%';
          }

          return (<Slide key={`speakergroup-${index}`}>
            <Mesh {...meshProps} />
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignContent: 'space-between',
              position: 'relative',
            }}>
            {group.map(({name, title, topics, image}, i) => {

              const al = i % 2 === 0 ? (align === 'left' ?'left' : 'right') :(align === 'left' ?'right' : 'left')

              return (<SpeakerJS
                key={`speakergroup-${i}`}
                align={al}
                name={name}
                title={title}
                image={image}
              />)})}
            </div>
          </Slide>)
        })}


        <Slide transition={['fade']} bgColor="quaternary">
          <Heading size={4} caps textColor="primary" style={{
            marginBottom: '3rem'
          }}>
            10% discount
          </Heading>
          <Heading size={1} caps textColor="primary" textFont="heading">
            { getDiscountCode() }
          </Heading>
          <Heading size={4} caps textColor="primary" style={{
            marginTop: '3rem'
          }}>
            <strike>€311</strike> <strong>€279</strong>
          </Heading>
        </Slide>


        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={1} textColor="primary" textFont="heading">
            There's more!
          </Heading>
        </Slide>


        <Slide transition={['fade']} bgColor="primary" style={{
          background: 'linear-gradient(lavender,azure)'
        }}>
          <Capsule />
          <Heading size={1} textColor="tertiary" textFont="cssHeading">
            CSSConf Budapest 2019
          </Heading>
        </Slide>


{cssSpeakersGroups.map((group, index) => {
  const align = index % 2 === 0 ?  'left' : 'right';
  const meshProps = {
    rotate: index * -30,
  };

  if (align === 'left') {
    meshProps.bottom = '0%';
    meshProps.left = '-10%';
  } else {
    meshProps.bottom = '0%';
    meshProps.right = '-10%';
  }

  return (<Slide key={`speakergroup-${index}`} style={{
    background: 'linear-gradient(lavender,azure)'
  }}>
    <Capsule />
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'space-between',
      position: 'relative',
    }}>
    {group.map(({name, title, topics, image}, i) => {

      const al = i % 2 === 0 ? (align === 'left' ?'left' : 'right') :(align === 'left' ?'right' : 'left')

      return (<SpeakerCSS
        key={`speakergroup-${i}`}
        align={al}
        name={name}
        title={title}
        image={image}
      />)})}
    </div>
  </Slide>)
})}


        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={4} caps textColor="primary" textFont="cssHeading" style={{
            marginBottom: '3rem'
          }}>
            10% discount
          </Heading>
          <Heading size={1} caps textColor="primary" textFont="heading">
            { getDiscountCode() }
          </Heading>
          <Heading size={4} caps textColor="primary" style={{
            marginTop: '3rem'
          }}>
            <strike>€159</strike> <strong>€143</strong>
          </Heading>
        </Slide>

        <Slide textColor="tertiary">
          <Mesh rotate={-240} bottom={'-60%'} left={'-30%'} />
          <Heading size={1} textColor="secondary" caps textFont="heading">
            There's still more 😉!
          </Heading>
        </Slide>

        <Slide textColor="tertiary">
          <Mesh rotate={-120} bottom={'60%'} left={'-10%'} />
          <Heading size={1} textColor="secondary" caps textFont="heading">
            Free Workshops on Sept 24th!
          </Heading>
        </Slide>

        <Slide textColor="tertiary">
          <Mesh rotate={-290} bottom={'60%'} right={'-30%'} />

          <Heading size={6} textColor="quaternary" textAlign="left">
            High-Performance Microservices with GraphQL and Apollo by RisingStack
          </Heading>
          <Text textSize={'2rem'} textAlign="left" style={{ marginBottom: '2rem' }}>#graphql #apollo</Text>

          <Heading size={6} textColor="quaternary" textAlign="left">
            Twilio Superclass by Twilio
          </Heading>
          <Text textSize={'2rem'} textAlign="left" style={{ marginBottom: '2rem' }}>#voip #sms #messaging #services</Text>

          <Heading size={6} textColor="quaternary" textAlign="left">
            Integration Driven Development by Unmock.io
          </Heading>
          <Text textSize={'2rem'} textAlign="left" style={{ marginBottom: '4rem' }}>#integrations #mocking #testing</Text>


          <Text textSize={'1.5rem'} textAlign="left" style={{ marginBottom: '2rem' }}>... and more!</Text>
        </Slide>

        <Slide textColor="tertiary">
          <Mesh rotate={-120} bottom={'60%'} left={'-10%'} />
          <Heading size={4} textColor="tertiary" caps textFont="heading">
            Workshops are Free
          </Heading>
          <Heading size={4} textColor="tertiary" caps textFont="heading">
            Has limited Seats
          </Heading>
          <Heading size={4} textColor="secondary" caps textFont="heading">
            Get your ticket quickly!
          </Heading>
        </Slide>

        <Slide>
          <Mesh rotate={-100} bottom={'-60%'} left={'-30%'} />
          <Capsule />
          <Heading size={1} fit lineHeight={1} textColor="tertiary" textFont="heading">
            See you in September
          </Heading>
          <Heading size={1} lineHeight={2} >
            👋👋👋
          </Heading>
          
          <Heading size={6} lineHeight={3} textColor="tertiary">
            jsconfbp.com | @jsconfbp
          </Heading>
        </Slide>

      </Deck>
    );
  }
}

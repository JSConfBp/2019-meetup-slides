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

const images = {
  mesh: require('../assets/JSConf_Budapest-wire-mesh.svg'),
  logo: require('../assets/JSConf_Budapest_large-logo.svg'),
};

const jsSpeakers = [
  {
    name: 'Charlie Gerard',
    title: 'Weaving the web - Programming textile-based interactions in JavaScript',
    topics: '',
    image: require('../assets/speakers/charlie_gerard.jpg'),
  },
  {
    name: 'Rubén Sospedra',
    title: 'Mastering UIs with Finite State Machines',
    topics: '',
    image: require('../assets/speakers/ruben_sospedra.jpg'),
  },
  {
    name: 'Braden Moore',
    title: 'Deciphering Brainwaves with the Web Audio API',
    topics: '',
    image: require('../assets/speakers/braden_moore.jpg'),
  },
  {
    name: 'Mauricio Palma',
    title: 'Accessibility vs latest Web APIs. Can’t we just get along?',
    topics: '',
    image: require('../assets/speakers/mauricio_palma.jpg')
  },
  {
    name: 'Isa Silveira',
    title: 'Looking under the rug: the art of learning from failure',
    topics: '',
    image: require('../assets/speakers/isa_silveira.jpg'),
  },
  {
    name: 'Adam Giese',
    title: 'Composing music with composed functions',
    topics: '',
    image: require('../assets/speakers/adam_giese.jpg'),
  },
  {
    name: 'Rebecca Hill',
    title: 'Essential JavaScript debugging tools for the modern detective',
    topics: '',
    image: require('../assets/speakers/rebecca_hill.jpg'),
  },
  {
    name: 'Stephanie Nemeth',
    title: 'How not to read the room: Creating socially awkward wearables with machine learning & javascript',
    topics: '',
    image: require('../assets/speakers/stephanie_nemeth.jpg'),
  },
  {
    name: 'Eva Ferreira',
    title: 'Take on me, web browsers!',
    topics: '',
    image: require('../assets/speakers/eva_ferreira.jpg'),
  },
  {
    name: 'Liran Tal',
    title: 'StrangerDanger: Finding Security Vulnerabilities Before They Find You!',
    topics: '',
    image: require('../assets/speakers/liran_tal.jpg'),
  },
  {
    name: 'Damini Satya Kammakomati',
    title: 'Taming “Git”osaurus Using Mystical Trees: Understanding complex git trees in the developer fairyland',
    topics: '',
    image: require('../assets/speakers/damini_satya.jpg'),
  },
  {
    name: 'Tejas Kumar',
    title: 'Legendary Lambdas',
    topics: '',
    image: require('../assets/speakers/tejas_kumar.jpg'),
  },
  {
    name: 'Shelley Vohr',
    title: 'API Modernization: Building Bridges As You Cross Them',
    topics: '',
    image: require('../assets/speakers/shelley_vohr.jpg'),
  },
  {
    name: 'Vitalii Bobrov',
    title: 'Algorithms and Their Habitat',
    topics: '',
    image: require('../assets/speakers/vitalii_bobrov.jpg'),
  },
  {
    name: 'Kat Kitay',
    title: 'Web Norms of the World: An exploration of the internet beyond the West',
    topics: '',
    image: require('../assets/speakers/kat_kitay.jpg'),
  },
  {
    name: 'Benedicte Raae',
    title: 'A privacy first period tracker? Is it even possible?',
    topics: '',
    image: require('../assets/speakers/benedicte_raae.jpg'),
  },
  {
    name: 'Jorge Marin',
    title: 'Testing in production: Ideas, experiences, limits, roadblocks', 
    topics: '',
    image: require('../assets/speakers/jorge_marin.jpg'),
  },
  {
    name: 'Taylor Fairbank',
    title: 'Javascript Performance in Extreme Conditions: Building WebApps for the Refugee Aid Movement',
    topics: '',
    image: require('../assets/speakers/taylor_fairbank.jpg'),
  },
  {
    name: 'Balázs Korossy-Khayll',
    title: 'Testing presentation components visually',
    topics: '',
    image: require('../assets/speakers/balazs_korossy_khayll.jpg'),
  }
]

const cssSpeakers = [
  {
    name: 'David Khourshid',
    title: 'Crafting Stateful Styles with State Machines',
    topics: '',
    image: require('../assets/speakers/david_khourshid.jpg'),
  },
  {
    name: 'Jeremy Wagner',
    title: 'The Weird (yet Practical) World of CSS Paint Worklets',
    topics: '',
    image: require('../assets/speakers/jeremy_wagner.jpg'),
  },
  {
    name: 'Giulia Cardieri',
    title: 'CSS Games and Drawings in the real world: useful or just fun?',
    topics: '',
    image: require('../assets/speakers/giulia_cardieri.jpg'),
  },
  {
    name: 'Damien Senger',
    title: 'Variable fonts & readability: the rising of custom reading experiences',
    topics: '',
    image: require('../assets/speakers/damien_senger.jpg'),
  },
  {
    name: 'Yu Ling Cheng',
    title: 'Building better products faster: DevUx is the new DevOps',
    topics: '',
    image: require('../assets/speakers/yu_ling_cheng.jpg'),
  },
  {
    name: 'Mike Riethmuller',
    title: 'CSS Architecture for Modern Web Applications',
    topics: '',
    image: require('../assets/speakers/mike_riethmuller.jpg'),
  },
  {
    name: 'Xavier Cazalot',
    title: 'The Path to SVG Animations',
    topics: '',
    image: require('../assets/speakers/xavier_cazalot.jpg'),
  },
  {
    name: 'Kathrin Holzmann',
    title: 'CSS in JS - beware the Hype!',
    topics: '',
    image: require('../assets/speakers/kathrin_holzmann.jpg'),
  },
  {
    name: 'Alan Stearns',
    title: 'Getting Browser Bugs Fixed',
    topics: '',
    image: require('../assets/speakers/alan_stearns.jpg'),
  },
]

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
        </Slide>

        <Slide>
          <Mesh rotate={-100} top={'-60%'} right={'-30%'} />
          <Heading size={1} fit lineHeight={1} textColor="tertiary" textFont="heading">
            26-27 September <br />2019
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={1} textColor="primary" textFont="heading">
            Akvarium Klub
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
          </List>
        </Slide>

        <Slide textColor="tertiary">
          <Mesh rotate={-240} bottom={'-60%'} left={'-30%'} />
          <Heading size={1} textColor="secondary" caps textFont="heading">
            Speakers & topics
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
        </Slide>

      </Deck>
    );
  }
}

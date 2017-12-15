import React from 'react';

const PROJECTS_LIST = [
  {
    title: `MNIST Digit Recognition Neural Network with Deeplearn.js`,
    description: `Recognizing handwritten digits from the MNIST Database. The project shows how neural networks may be used to solve a multi-class classification problem. `,
    values: {
      demo: 'https://mnist-neural-network-deeplearnjs.bri.im/',
      source: 'https://github.com/javascript-machine-learning/mnist-neural-network-deeplearnjs',
    },
  },
  {
    title: `Agar.io-AI - Agar.io with Neuroevolution`,
    description: `The project shows how you can use Neataptic to succesfully teach neural networks to play Agar.io. You can see the genomes live in action. These genomes have been trained for over 1000 generations, and definetely show sume human-like traits.`,
    values: {
      demo: 'https://wagenaartje.github.io/neataptic/articles/agario/',
      source: 'https://github.com/wagenaartje/agario-ai',
    },
  },
  {
    title: `Web Accessibility Neural Network with Deeplearn.js`,
    description: `Learning best color matches for an improved web accessibility. The project demonstrates how neural networks may be used to solve a binary classification problem.`,
    values: {
      demo: 'https://color-accessibility-neural-network-deeplearnjs.bri.im/',
      source: 'https://github.com/javascript-machine-learning/color-accessibility-neural-network-deeplearnjs',
    },
  },
  {
    title: `Fast Neural Style Transfer with Deeplearn.js`,
    description: `Implementation of the Fast Neural Style Transfer algorithm running purely on the browser. Basically, a neural network attempts to "draw" one picture, the Content, in the style of another, the Style.`,
    values: {
      demo: 'https://reiinakano.github.io/fast-style-transfer-deeplearnjs',
      source: 'https://github.com/reiinakano/fast-style-transfer-deeplearnjs',
    },
  },
  {
    title: `FlappyLearning - FlappyBird with Neuroevolution`,
    description: `The project manages to implement a neuroevolution algorithm along the way which trains a FlappyBird to fly. It learns dynamically from each iteration's success or failure.`,
    values: {
      demo: 'https://xviniette.github.io/FlappyLearning/',
      source: 'https://github.com/xviniette/FlappyLearning',
    },
  },
];

const PROJECTS_MAIN = {
  header: 'Projects',
  paragraph: 'Insightful projects taken from Machine Learning in JavaScript to get you motivated joining the movement.',
};

export {
  PROJECTS_LIST,
  PROJECTS_MAIN,
};
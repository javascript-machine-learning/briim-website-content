import React from 'react';

const LIBRARIES_LIST = [
  {
    title: `Math.js`,
    description: `Math.js is an extensive math library for JavaScript and Node.js. It features a flexible expression parser with support for symbolic computation, comes with a large set of built-in functions and constants, and offers an integrated solution to work with different data types like numbers, big numbers, complex numbers, fractions, units, and matrices. Powerful and easy to use.`,
    values: {
      power: 'Linear Algebra, Statistics, Calculus',
      library: 'http://mathjs.org/',
    },
  },
  {
    title: `D3.js`,
    description: `D3.js is a JavaScript library for manipulating documents based on data. D3 helps you bring data to life using HTML, SVG, and CSS. D3’s emphasis on web standards gives you the full capabilities of modern browsers without tying yourself to a proprietary framework, combining powerful visualization components and a data-driven approach to DOM manipulation.`,
    values: {
      power: 'Visualizations',
      library: 'https://d3js.org/',
    },
  },
  {
    title: `Natural`,
    description: `"Natural" is a general natural language facility for nodejs. Tokenizing, stemming, classification, phonetics, tf-idf, WordNet, string similarity, and some inflections are currently supported.`,
    values: {
      power: 'Natural Language Processing',
      library: 'https://github.com/NaturalNode/natural',
    },
  },
  {
    title: `OpenCV.js`,
    description: `OpenCV library for functions mainly aimed at real-time computer vision. OpenCV.js is a JavaScript binding that exposes OpenCV library to the web.`,
    values: {
      power: 'Computer Vision',
      library: 'https://github.com/ucisysarch/opencvjs',
    },
  },
  {
    title: `Pavlov.js`,
    description: `Pavlov.js uses Markov Decision Processes to implement reinforcement learning. It is written in C++ and compiled to JavaScript.`,
    values: {
      power: 'Markov Decision Processes',
      library: 'https://github.com/NathanEpstein/Pavlov.js',
    },
  },
  {
    title: `SVM.js`,
    description: `A lightweight implementation of the SMO algorithm to train a binary Support Vector Machine (SVM). As this uses the dual formulation, it also supports arbitrary kernels.`,
    values: {
      power: 'SVM',
      library: 'https://github.com/karpathy/svmjs',
    },
  },
  {
    title: `Brain.js`,
    description: `Brain lets you create neural networks and then train them based on input/output data. It only runs in a Node.js environment and thus doesn't make use of WebGL for computational efficiency.`,
    values: {
      power: 'Neural Networks',
      library: 'https://github.com/BrainJS/brain.js',
    },
  },
  {
    title: `Synaptic`,
    description: `Synaptic is a javascript neural network library for node.js and the browser, its generalized algorithm is architecture-free, so you can build and train basically any type of first order or even second order neural network architectures. The library includes a few built-in architectures.`,
    values: {
      power: 'Neural Networks',
      library: 'https://github.com/cazala/synaptic',
    },
  },
  {
    title: `Neataptic`,
    description: `Neataptic offers flexible neural networks; neurons and synapses can be removed with a single line of code. No fixed architecture is required for neural networks to function at all. This flexibility allows networks to be shaped for your dataset through neuro-evolution, which is done using multiple threads.`,
    values: {
      power: 'Neural Networks, Neuroevolution',
      library: 'https://github.com/wagenaartje/neataptic',
    },
  },
  {
    title: `Deeplearn.js`,
    description: `Deeplearn.js is an open-source library that brings performant machine learning building blocks to the web, allowing you to train neural networks in a browser or run pre-trained models in inference mode.`,
    values: {
      power: 'Neural Networks, WebGL',
      library: 'https://deeplearnjs.org/',
    },
  },
  {
    title: `WebDNN`,
    description: `WebDNN is an open source software framework for executing deep neural network (DNN) pre-trained model on web browser. It can execute various DNN models trained by popular deep learning frameworks on web browser.`,
    values: {
      power: 'Neural Networks, Only Inference Mode, WebGL',
      library: 'https://github.com/mil-tokyo/webdnn',
    },
  },
  {
    title: `Keras.js`,
    description: `Run Keras models in the browser, with GPU support provided by WebGL 2. Models can be run in Node.js as well, but only in CPU mode. Because Keras abstracts away a number of frameworks as backends, the models can be trained in any backend, including TensorFlow, CNTK, etc.`,
    values: {
      power: 'Neural Networks, Only Inference Mode, WebGL',
      library: 'https://github.com/transcranial/keras-js',
    },
  },
  {
    title: `TensorFire`,
    description: `TensorFire is a framework for running neural networks in the browser, accelerated by WebGL. Applications powered by TensorFire can utilize deep learning in almost any modern web browser with no setup or installation. TensorFire models run up to 100x faster than previous in-browser neural network libraries, at speeds comparable to highly-optimized native CPU code.`,
    values: {
      power: 'Neural Networks, Inference Mode, WebGL',
      library: 'https://tenso.rs/',
    },
  },
];

const LIBRARIES_MAIN = {
  header: 'Libraries',
  paragraph: 'Powerful libraries for applied machine learning in JavaScript. There is no need to implement algorithms from scratch.',
};

export {
  LIBRARIES_LIST,
  LIBRARIES_MAIN,
};

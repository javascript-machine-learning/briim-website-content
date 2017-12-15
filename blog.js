import React from 'react';

const ARTICLE_TYPES = {
  tutorial: 'Tutorial',
  new: 'News',
  project: 'Project',
  discussion: 'Discussion',
};

// Recent Last, Oldest First
export const BLOG_LIST = [
  {
    title: `Linear Regression with Gradient Descent in JavaScript`,
    description: `The article guides you through implementing linear regression with gradient descent in JavaScript. The article can be used as introduction to machine learning in JavaScript and as entry point to a whole blog post series.`,
    values: {
      articleType: ARTICLE_TYPES.tutorial,
      articleLink: 'https://www.robinwieruch.de/linear-regression-gradient-descent-javascript/',
    },
  },
  {
    title: `Improving Gradient Descent in JavaScript`,
    description: `When using gradient descent as learning algorithm for a regression problem, there are several ways to improve it. In the beginning, it is often unclear how to optimize it. This article shows it by choosing the right learning rate and initial parameters, applying feature scaling and vectorization.`,
    values: {
      articleType: ARTICLE_TYPES.tutorial,
      articleLink: 'https://www.robinwieruch.de/improving-gradient-descent-javascript/',
    },
  },
  {
    title: `Gradient Descent with Vectorization in JavaScript`,
    description: `The article guides you through implementing a vectorized implementation of gradient descent for a regression problem in JavaScript. You should be familiar with gradient itself by reading the introductory article before diving into this topic.`,
    values: {
      articleType: ARTICLE_TYPES.tutorial,
      articleLink: 'https://www.robinwieruch.de/linear-regression-gradient-descent-vectorization-javascript/',
    },
  },
  {
    title: `Multivariate Linear Regression, Gradient Descent in JavaScript`,
    description: `The article guides you through implementing linear regression with gradient descent in a multivariate training set in JavaScript. It shows the vectorized implementation of the algorithm and performs feature scaling by using standardization before applying the learning algorithm.`,
    values: {
      articleType: ARTICLE_TYPES.tutorial,
      articleLink: 'https://www.robinwieruch.de/multivariate-linear-regression-gradient-descent-javascript/',
    },
  },
  {
    title: `Linear Regression with Normal Equation in JavaScript`,
    description: `The article guides you through implementing normal equation as alternative to gradient descent to solve a regression problem in JavaScript. You should learn about gradient descent before diving into this topic.`,
    values: {
      articleType: ARTICLE_TYPES.tutorial,
      articleLink: 'https://www.robinwieruch.de/multivariate-linear-regression-normal-equation-javascript/',
    },
  },
  {
    title: `Logistic Regression with Gradient Descent in JavaScript`,
    description: `The article guides you through implementing a logistic regression with gradient descent algorithm in JavaScript to solve a classification problem. You should read the article about linear regression with gradient descent before diving into logistic regression.`,
    values: {
      articleType: ARTICLE_TYPES.tutorial,
      articleLink: 'https://www.robinwieruch.de/logistic-regression-gradient-descent-classification-javascript/',
    },
  },
  {
    title: `Neural Networks in JavaScript with deeplearn.js`,
    description: `The article guides you through the implementation of a neural network in JavaScript with Google's deeplearn.js library. In general, it should show how machine learning can be achieved in JavaScript.`,
    values: {
      articleType: ARTICLE_TYPES.tutorial,
      articleLink: 'https://www.robinwieruch.de/neural-networks-deeplearnjs-javascript',
    },
  },
  {
    title: `A Web Developer\'s Guide to Machine Learning in JavaScript`,
    description: `The article guides you through implementing Machine Learning in JavaScript. The article can be used as introduction to machine learning in JavaScript and as entry point to a whole blog post series.`,
    values: {
      articleType: ARTICLE_TYPES.discussion,
      articleLink: 'https://www.robinwieruch.de/machine-learning-javascript-web-developers',
    },
  },
].reverse();
// Recent Last, Oldest First

export const BLOG_MAIN = {
  header: 'Blog',
  paragraph: 'Insightful articles about machine learning in JavaScript to bring you up to speed.',
};

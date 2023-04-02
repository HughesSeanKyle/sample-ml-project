const tf = require('@tensorflow/tfjs-node');
const fs = require('fs');
const path = require('path');

const dataDir = './data';
const trainDir = path.join(dataDir, 'train');
const validationDir = path.join(dataDir, 'validation');

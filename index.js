const tf = require('@tensorflow/tfjs-node');
const fs = require('fs');
const path = require('path');

// Load your data
const dataDir = './data';
const trainDir = path.join(dataDir, 'train');
const validationDir = path.join(dataDir, 'validation');

// Define the model
const model = tf.sequential();
model.add(tf.layers.flatten({ inputShape: [224, 224, 3] }));
model.add(tf.layers.dense({ units: 128, activation: 'relu' }));
model.add(tf.layers.dense({ units: 2, activation: 'softmax' }));

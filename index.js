const tf = require('@tensorflow/tfjs-node');
const IMAGE_SIZE = 224;

// Load training data
const trainData = tf.data.generator(function* () {
  for (let i = 0; i < 8; i++) { // Use first 8 images for training
    const path = `path/to/training/folder/image-${i}.jpg`;
    const buffer = await require('fs').promises.readFile(path);
    const decodedImage = tf.node.decodeImage(buffer);
    const resizedImage = tf.image.resizeBilinear(decodedImage, [IMAGE_SIZE, IMAGE_SIZE]);
    const normalizedImage = resizedImage.div(255.0);
    const label = i < 4 ? 0 : 1; // First 4 images are cats, rest are dogs
    yield [normalizedImage, label];
  }
});

// Load validation data
const validationData = tf.data.generator(function* () {
  for (let i = 8; i < 10; i++) { // Use last 2 images for validation
    const path = `path/to/validation/folder/image-${i}.jpg`;
    const buffer = await require('fs').promises.readFile(path);
    const decodedImage = tf.node.decodeImage(buffer);
    const resizedImage = tf.image.resizeBilinear(decodedImage, [IMAGE_SIZE, IMAGE_SIZE]);
    const normalizedImage = resizedImage.div(255.0);
    const label = i < 9 ? 0 : 1; // 9th image is cat, 10th is dog
    yield [normalizedImage, label];
  }
});

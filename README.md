# sample-ml-project

## Topics

### Defining the Model

1. Neural networks: The code is using a neural network, which is a machine learning model inspired by the structure of the human brain. Neural networks consist of layers of interconnected nodes, which process and transform input data to produce output data.

   - Visualize neural networks [`here`](https://playground.tensorflow.org/)

2. Layers: The code is adding layers to the neural network using the tf.layers API. Layers are the building blocks of neural networks, and each layer applies a specific mathematical operation to the input data.

3. Flatten layer: The code is using a flatten layer to transform the 3D tensor input (an image) into a 1D tensor. This is necessary because the subsequent layers in the neural network expect a 1D tensor as input.

4. Dense layer: The code is using dense layers to perform the bulk of the computation in the neural network. Dense layers are fully connected layers, which means that each node in one layer is connected to every node in the next layer.

5. Units: The units parameter in the dense layers specifies the number of nodes in the layer. This parameter affects the complexity and capacity of the neural network.

6. Activation functions: The code is using the relu and softmax activation functions in the dense layers. Activation functions are applied to the output of each node in a layer, and they introduce nonlinearity into the neural network.

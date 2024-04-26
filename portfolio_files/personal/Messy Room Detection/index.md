#### Utilizes convolutional neural network to determine whether a room is tidy or not.

This was a Dicoding task. I already knew how to build a model to solve this; so it was a breeze. OpenCV was used to preprocess and expand the data set. The CNN (Convolutional Neural Network) wasn't too complex, a simple one was good enough. The output is obviously a float which we can then place a truth threshold. I think I remember giving a 80% truth threshold, anything lower means the room is messy.

[Repository](https://github.com/TNBruh/messy-room-detector)
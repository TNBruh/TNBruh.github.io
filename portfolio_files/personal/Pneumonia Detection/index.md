#### Uses convolutional neural network to determine if an x-ray image of someone’s lung has pneumonia.

This was a task for the Asia University AI Winter Program. The approach is relatively similar to my messy room detection model. Which is the following: 

`OpenCV was used to preprocess and expand the data set. The CNN (Convolutional Neural Network) wasn't too complex, a simple one was good enough. The output is obviously a float which we can then place a truth threshold. I think I remember giving a 80% truth threshold, anything lower means the room is messy.`

I wanted to build something more impressive. But time was tight and I was practically brainstorming alone.

[Repository](https://github.com/TNBruh/pneumonia-detector)
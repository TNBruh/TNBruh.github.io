#### Scrapes dogecoin value history of a certain site and predicts using recurrent neural network whether its value will rise or drop.

Back when the hype around DogeCoin and other cryptocurrencies were still warm, my online friends talked about it. We joked that I could make a DogeCoin Forecaster. So I took that joke to a new level by making it real. Although, I will admit, this isn't for practical use. It is only trained on DogeCoin history. A lot of factors could come into play when it comes to changing the value of a cryptocurrency.

Now, to get this data, I had to build a scraper. My go-to tool to make one is Selenium because it's what I'm used to. After the data is scraped, they will get preprocessed so that the model can learn from it.

[Repository](https://github.com/TNBruh/dogecoin-scraper-RNN)
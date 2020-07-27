# ReWorth Coding Challenge.
### Edgar Santiago


> Fast learning approach
>
> Involves React components, API integration and data display.

## Packages used
- Chart.js
- Axios
- React-Markdown
- SweetAlert
- FontAwesome

## Development process

These are the steps I followed to complete the challenge:

- It had been some time since I had developed in React, so I did some research on new practices and new features, mainly about the ```functions over classes``` approach, I consulted with friends on some issues I was having and finally, I took a crash course in advanced react along with some videos on Youtube.

- I started to plan all the components that I'd need for the final app. Also, I did some research on the company, this lead me to a [video](https://vimeo.com/404406126) published by Raphael on vimeo, which gave me a general look and feel of what you were, maybe, expecting.

- I adapted several assets from that video, including the gif loader.

- I tried to create a familiar and pleasant UI experience.

- Once I had finished the main task, I decided to implement a small dashboard with 2 graphs, this is because, in one of the interviews, John asked me if I had some examples of data transforming and displaying.

- I searched online for some open data and stumbled upon a JSON file containing the population stats from Switzerland, which I then uploaded to a test api service so that I could fetch the information.


## Setting it up

This project uses the bare minimum for deployment, so a ```npm install``` & ```npm start```   should do the trick.


```{.bash}
cd fullstack-challenge
npm install
```

After that start the development server

```{.bash}
npm start
```


## Code notes

I followed some common practices I found online along with my personal coding style, I like to divide the codebase as much as possible.

There are 2 main folders inside ```src/ui```, ```components``` and ``views``, the first one contains all the parts used in the app with their respective stylesheet, 
the latter contains the assembled views, logic and styles in some cases.

The main ``App`` component contains an instance of ``ReactRouterDom`` and it uses the ``Switch`` component for defining routes, each route 
has an external component declared except for the ``404`` route which has a function defined within the same file.

#### Routes
```
 / -> defaults to "about" 
 /about
 /offers
 /metrics
```

## Final thoughts

Even though the challenge was simple in a technical way, it presented a somewhat formidable challenge for me in another level.

I had a lot of fun re-learning some front end concepts, it had been some time since I had a challenge (learn a lot in a short period of time), and this simple test gave me one. 

As Bear Grylls correctly puts it, I had to [improvise, adapt and overcome](https://www.meme-arsenal.com/memes/14bfd841d1b56eb71dda535bbc9dfc3b.jpg).

Thank you for the opportunity

-ES.


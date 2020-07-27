import ReactMarkdown from "react-markdown";
import LeftCol from "../../components/Menu";
import Breadcrumbs from "../../components/Breadcrumbs";


const About=()=>{

    const markdown = `
# ReWorth Coding Challenge: fullstack
### Edgar Santiago

![Build](https://github.com/appuntos/fullstack-challenge/workflows/Build/badge.svg?branch=master)

> Little coding challenge for our hiring process.
> Involves React components and API integration tasks.

## Packages used
- Chart.js
- Axios
- React-Markdown
- SweetAlert
- FontAwesome

## Development process
As ive mentioned on one of the interviews, I like to be thorough in any project,

These are the steps I followed to complete the challenge:

    - As it had been a lot since I've developed in React, I did some research on new practices and new features, consulted with friends on some issues I was having and finally, taking a crash course in advanced react.

    - I started to plan all the components that I'd need for the final app, and did some research on the company, this lead me to a [video](https://vimeo.com/404406126) published by Raphael on vimeo, which gave me a general look and feel of what you were, maybe, expecting.

    - I adapted several assets, including the messy loader gif, from that video.

    - I tried to create a familiar and pleasant UI experience.

## Puntos?

I took a more dashboardy approach, so, tables

I completed the task required for the challenge, but as I'm aiming towards a more backend position, I g

## final thoughts
 i had a lot of fun relearning some front end concepts 


## Getting started

To get stated clone project and install dependencies.
  `;
    return (
        <>
            <LeftCol />

            <div className="right_col">
                <Breadcrumbs>
                    <li className="breadcrumb-item active">About</li>
                </Breadcrumbs>

                <div className="content_container">
                    <div className="section_title">
                        About
                    </div>

                    <div className="section_content">

                        <ReactMarkdown source={markdown} />
                    </div>
                </div>
            </div>



        </>

    );


}


export default About;
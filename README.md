## Nasa Image Search

An application used to aide users with searching NASA Image and Video Library API by allowing them to use a "Google" similar UI. The application was built with React, JavaScript, and vanilla CSS. This project was done as an application to Shopifiy Frontend Internship [wish me luck :)]. 

Access the website [here](https://ghaith-chrit.github.io/Nasa-Image-Search/) 

## Project Status

Even though the project is done. Future updates may occur. New features may include adding advanced search to change the API endpoint used

## Project Screen Shot(s)  

### Landing/Main Page
![image](https://user-images.githubusercontent.com/76979568/148487774-3480573c-e07a-4476-96a5-bf189a6c962b.png)

### Search Result Page
![image](https://user-images.githubusercontent.com/76979568/148487949-b8f2bc5d-6bb8-4ba0-b220-da9941a2b09e.png)

### Favourite Images Page
![image](https://user-images.githubusercontent.com/76979568/148488020-e5fe4c49-676a-4c29-8c47-d4c8b95f1b75.png)

## Installation and Setup Instructions

To install this repository, you will need NPM which comes with NodeJS now.

### Node
- #### Node installation on Windows

  Instructions can be found on the [official Node.js website](https://nodejs.org/) and download the installer.

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

### Clone down this repository

- `git clone https://github.com/Ghaith-Chrit/Nasa-Image-Search.git`

### Installation:

- `npm install`  

### To Start Server:

- `npm start`  

### To Visit App:

- `localhost:3000`  

## Explanation of some part of the code

The code shown below is inside an `<article>` tag with class name of `result` (Check SearchResult.jsx and Result.jsx).

```
<div className='headerContainer'>
    <h1 className='resultHeader'>{data?.data[0].title}</h1>
    <h2 className='resultSubheader'>Nasa ID: {data?.data[0].nasa_id}</h2>
    <h2 className='resultDate'>Date: {new Date(data?.data[0].date_created).toDateString()}</h2>
</div>
    <div className='imgContainer'>
        <img src={data?.links[0].href} alt='The picture provided by Nasa.' />
    </div>
    <p className='description'>{data?.data[0].description}</p>
```

Here is the style of the `result` class (Check Result.css).

```
.result {
    width: 90%;
    height: 90%;
    background-color: #232626c4;
    border-radius: 20px;
    border: 1px solid #b0aeb6;
    padding: 20px;
    display: flex;
    flex-direction: column;
    color: #fff;
    text-align: center;
    overflow-y: auto;
    font-family: Verdana, Tahoma, Helvetica, sans-serif;
}

.result * {
    margin: auto;
}
```

A reasonable question to ask here is why not just add these following styles to the `result` class and remove the styles of `margin: auto` for the children of `result`. 

### Like this

```
.result {
    width: 90%;
    height: 90%;
    background-color: #232626c4;
    border-radius: 20px;
    border: 1px solid #b0aeb6;
    padding: 20px;
    display: flex;
    flex-direction: column; /* NEW */
    justify-content: center; /* NEW */
    align-items: center;
    color: #fff;
    text-align: center;
    overflow-y: auto;
    font-family: Verdana, Tahoma, Helvetica, sans-serif;
}
```

The answer is simply because when the flex item is becomes larger than its container. In an ideal world, there won't be any issues. However, up until now, the flex item overflows the container and the top becomes inaccessible.

> From [W3.org](https://www.w3.org/TR/css-align-3/#overflow-values).
>
>When the alignment subject is larger than the alignment container, it will overflow. Some alignment modes, if honored in this situation, may cause data loss: for example, if the contents of a sidebar are centered, when they overflow they may send part of their boxes past the viewport’s start edge, which can’t be scrolled to.

### Solution

- Use `margin: auto` to center the children. (Solution used in the application)

- Use `safe`

  ```
   justify-content: safe center;
   align-self: safe center;
  ```
  
  However, up to my knowledge, this is not supported by all browsers yet.

### Enjoy

<details>
  <summary>Easter egg</summary>
  Throttle your connection to check the loading animation!
</details>

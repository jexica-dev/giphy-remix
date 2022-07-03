# Project Overview

## Giphy Remix

[Deployed](https://website.com/)

## Project Description


Experimenting the use of multiple external API's from [Giphy](https://developers.giphy.com/), and [Studio Ghibli](https://ghibliapi.herokuapp.com), this project is using vanilla HTML/CSS/JavaScript. 


## API and Data Sample

```

async function fetchGhibliData() {
  try {
    const url = BASE_URL3;
    let response = await axios.get(url);
    let data = response.data;
    createDropList(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

function createDropList(ghibliFilm) {
  if (ghibliFilm) {
    ghibliFilm.forEach((ghibliFilm) => {
      let titleGhibli = ghibliFilm.title;

      let title = ghibliFilm.title.replace(/'+/g, "");
      let listElements = `
      <a onclick='renderGifs("${title}", )'
      id="drop-item">${titleGhibli}</a>`;
      document
        .querySelector("#myDropdown")
        .insertAdjacentHTML("beforeend", listElements);
    });
  } else {
    null;
  }
}


```

## Wireframes

![MVP Sketch](https://i.imgur.com/vssHzr4.png)



#### MVP

- Using Giphy's and Studio Ghibli's data to create a collage of dancing gifs of ghibli characters.
- Using the Fetch API for fetching resources: HTTP Requests, Responses, and Headers, along with a fetch() method for initiating asynchronous resource requests. (communicate with servers through the HTTP protocol)
- Render the API images and Ghibli information on the page.


#### PostMVP

- Allow users to save an image of the project, host or save it online.
- Using JS's embedded Canvas and HTML Drag and Drop API, the project will add Giphy's gifs of Ghibli characters onto the canvas.


## Project Schedule

<!-- This schedule will be used to keep track of your progress throughout the week and align with our expectations. -->


| Day      | Deliverable                                                     | Status   |
| -------- | --------------------------------------------------------------- | -------- |
|  June 26 | Prompt / Wireframes / Priority Matrix / Timeframes              | Complete |
|  June 26 | Pseudocode / actual code                                        | Complete |
|  June 26 | Initial Clickable Model                                         | Complete |
|  June 26 | MVP                                                             | Complete |



## Timeframes



| Component        | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------- | :------: | :------------: | :-----------: | :---------: |
|   Canvas Setup   |    H     |      1hr       |      Xhrs     |    Xhrs     |
|   Adding Form    |    H     |      1hr       |      Xhrs     |    Xhrs     |
|    API Config    |    H     |      1hr       |      Xhrs     |    Xhrs     |
|   JS behaviors   |    H     |      1hr       |      Xhrs     |    Xhrs     |
|   CSS Styling    |    M     |      1hr       |      Xhrs     |    Xhrs     |
|      Total       |    -     |     5hrs       |      Xhrs     |    Xhrs     |

## Code Snippet


```


CODE SNIPPET

```

## Change Log

<!-- Use this section to document what changes were made and the reasoning behind those changes. -->

```




```

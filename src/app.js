const DOMAIN_GHIBLI = "https://ghibliapi.herokuapp.com/films/";
const BASE_URL3 = `${DOMAIN_GHIBLI}`;

const DOMAIN_GIF = "https://api.giphy.com/v1/gifs/search";
const DOMAIN_GIF2 = "https://api.giphy.com/v1/stickers/search";
const GIPHY_KEY = "XYuFRDRMdMVB9BgNLF6YhEAsyfbzXty5";
const BASE_URL = `${DOMAIN_GIF}?api_key=${GIPHY_KEY}&q=`;
const BASE_URL2 = `${DOMAIN_GIF2}?api_key=${GIPHY_KEY}&q=`;

let TITLE_TEST;

function createDropList(ghibliFilm) {
  if (ghibliFilm) {
    ghibliFilm.forEach((ghibliFilm) => {
      let titleGhibli = ghibliFilm.title;
      TITLE_TEST = titleGhibli;
      let title = ghibliFilm.title.replace(/'+/g, "");
      let listElements = `
      <a onclick='renderGifs("${title}", )'
      id="drop-item">${titleGhibli}</a>`;
      document
        .querySelector("#myDropdown")
        .insertAdjacentHTML("beforeend", listElements);
    });
    console.log(TITLE_TEST);
  } else {
    null;
  }
}

function createTxtObj(ghibliFilm) {
  if (ghibliFilm) {
    // console.log(ghibliFilm);
    let title = ghibliFilm.title;
    let body = ghibliFilm.description;
    let listElements = `
      <div class="ghibli-container">
        <h1 class="ghibli-title">${title}</h1>
        <p class="ghibli-body">${body}</p>
      </div>`;
    document
      .querySelector("#text-container")
      .insertAdjacentHTML("beforeend", listElements);
  } else {
    null;
  }
}

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

fetchGhibliData();

function dropMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterMenu() {
  let input = document.getElementById("myInput");
  let filter = input.value.toUpperCase();
  let div = document.getElementById("myDropdown");
  let a = div.getElementsByTagName("a");
  for (let i = 0; i < a.length; i++) {
    let txtValue = a[i].textContent || a[i].innerText;

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

function createGifObj(gifs) {
  gifs.forEach((gif, index) => {
    if (Math.random() > 0.5) {
      let gifElements = `
      <div id="gif${index}" class="gif-block">
      <img class="gif" src="${gif.images.downsized_medium.url}" />
    </div>`;
      document
        .querySelector("#gif-container")
        .insertAdjacentHTML("beforeend", gifElements);
    }
  });
}

function createStickyObj(sticky) {
  sticky.forEach((sticky, index) => {
    if (Math.random() > 0.5) {
      let stickyElements = `
      <div id="sticky${index}" class="sticky-block">
      <img class="sticky" src="${sticky.images.downsized_medium.url}" />
    </div>
      `;
      document
        .querySelector("#sticky-container")
        .insertAdjacentHTML("beforeend", stickyElements);
    }
  });
}

async function renderGifs(title) {
  const ghibliTitle1 = "ghibli " + title + " anime";
  const ghibliTitle2 = "ghibli " + title;

  let gifContainer = document.querySelector("#gif-container");
  gifContainer.innerHTML = "";

  let stickyContainer = document.querySelector("#sticky-container");
  stickyContainer.innerHTML = "";

  let textContainer = document.querySelector("#text-container");
  textContainer.innerHTML = "";

  const resSticky = await axios.get(`${BASE_URL2}${ghibliTitle2}`);

  const resGiphy = await axios.get(`${BASE_URL}${ghibliTitle1}`);

  const resGhibli = await axios.get(`${BASE_URL3}`);

  if (resGhibli) {
    let res = resGhibli.data;
    console.log(res);
    console.log(title);
    const ghibliFilm = res.forEach((el) => {
      if (el.title.replace(/'+/g, "") == title) {
        console.log(el);
        createTxtObj(el);
        document.getElementById("myDropdown").classList.toggle("hide");
      }
    });
  } else {
    console.log("loading!");
  }

  createStickyObj(resSticky.data.data);
  createGifObj(resGiphy.data.data);
}

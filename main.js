import "modern-css-reset";
import "./assets/styles/style.css";
import "phosphor-icons";
import Masonry from "masonry-layout";

/**
 * globals
 */
const searchbox = document.querySelector(".searchbox form");
const savedPicBox = document.querySelector(".saved_pics");
const searchPicBox = document.querySelector(".search_pics");
let searchedPics = [];
let savedPics = [];
let msnry;

/**
 * methods
 */

/**
 *
 */
const renderSaved = () => {};

/**
 *
 */
const renderSearched = () => {
  searchPicBox.innerHTML = searchedPics.reduce((htmlString, searchedPic, i) => {
    return (
      htmlString +
      `
      <div class="pic" style="width: ${searchedPic.images.fixed_width.width}px" data-index="${i}">
        <h3>${searchedPic.title}</h3>
        <img src="${searchedPic.images.fixed_width.url}" alt="${searchedPic.title}" height="${searchedPic.images.fixed_width.height}" width="${searchedPic.images.fixed_width.width}">
      </div>
    `
    );
  }, "");
  msnry = new Masonry(searchPicBox, {
    // options
    itemSelector: ".pic",
    gutter: 10,
  });
  initSearchedEvents()
};

/**
 *
 */
const initSavedEvents = () => {};

/**
 *
 */
const initSearchedEvents = () => {
  const searchPicBoxItems = searchPicBox.querySelectorAll(".pic")
  for (const searchPicBoxItem of searchPicBoxItems) {
    searchPicBoxItem.addEventListener("click", (ev) => {
      const index = +searchPicBoxItem.dataset.index
      console.log(searchedPics[index]);
    })
  }
};

/**
 *
 */
const initSearchBlockEvents = () => {
  searchbox.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const value = ev.currentTarget.elements.search.value;
    searchPics(value);
  });
  searchbox.addEventListener("reset", (ev) => {
    searchbox.reset();
    searchedPics = [];
    renderSearched();
  });
};

/**
 *
 */
const searchPics = async (value) => {
  const url =
    "https://api.giphy.com/v1/gifs/search?api_key=UtuKhPQIF6QLKjo5GLsj70dDKXQKF7Sf&q=" +
    value;
  const data = await fetch(url)
    .then((d) => d.json())
    .then((d) => d);
  console.log(data);
  searchedPics = data.data;
  renderSearched();
};

/**
 *
 */
window.addEventListener("load", () => {
  renderSaved();
  initSearchBlockEvents();
});

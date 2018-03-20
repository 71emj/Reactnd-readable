import curry from "lodash.curry";
import { post, comment, author, category } from "./Boiler";

export function eq(item1, item2) {
  return item1 === item2;
}

export function toTitleCase(word) {
  return word.replace(/\b\w/, char => char.toUpperCase());
}

/** @func create-url-query-string-from-object
*/
export function stringifyQuery(queryObj) {
  const queryStr = Object
    .entries(queryObj)
    .reduce(
      (query, entry) => query + `&${entry[0]}=${entry[1].replace(/\s/g, "+")}`, "")
    .substring(1);
  console.log(queryStr);
  return "?" + queryStr;
}

/** @func generate-lorem-image-url
*/
export function dummyAvatar(name) {
  const username = name + "" || "Anonymous";
  const baseImageUrl = "https://dummyimage.com/200x200";
  const initials = "&text=" + username.trim()[0].toLowerCase();
  const colors = "/97cccf/ff006f";
  return baseImageUrl + colors + initials;
}

/** @func display-time-string-from-unix
*/
export function parseTimestamp(unix) {
  const now = Date.now();
  const unixToMin = unix => unix / 1000 | 0;
  const timeDiff = unixToMin(now) - unixToMin(unix);
  const hour = 60 * 60;
  if (timeDiff < 24 * hour) {
    return timeDiff <= hour ? "Just now" : `${~~(timeDiff / hour)} hours ago`;
  }
  const convert = new Date(unix);
  return convert.toUTCString().match(/^([\w\s,]+)\s\d{2}:/)[1];
}

/** @func vote-handler
*/
export function voteArticle({ voteScore, target, vote }) {
  return evt => {
    const voteType = ~evt.target.dataset["value"] ? "upVote" : "downVote";
    const update = { ...target, voteScore: voteType };
    return vote(update);
  }
}

/** @func helper-function-to-create-data-model-template
*   @func api-to-easily-utilize-createDataModel-function
*/
function createDataModel(model, template, name) {
  if (model[name]) { // assuming every new data is set through this function
    return { ...model };
  }
  const updatedField = template(name);
  return { ...model, [name]: updatedField };
}

export function modelAPI(models) {
  const dataModel = curry(createDataModel);
  return Object.freeze({
    Comment: dataModel(models.Comment)(comment),
    Author: dataModel(models.Author)(author),
    Post: dataModel(models.Post)(post),
    Category: dataModel(models.Category)(category)
  });
}

import curry from "lodash.curry";
import { post, comment, author, category } from "./Boiler";

export function eq(item1, item2) {
  return item1 === item2;
}

export function dummyAvatar(name) {
  const username = name + "" || "Anonymous";
  const baseImageUrl = "https://dummyimage.com/200x200";
  const initials = "&text=" + username.trim()[0].toLowerCase();
  const colors = "/97cccf/ff006f";
  return baseImageUrl + colors + initials;
}

export function toTitleCase(word) {
  return word.replace(/\b\w/, char => char.toUpperCase());
}

export function parseTimestamp(unix) {
  const now = Date.now();
  const unixToMin = unix => unix / 1000 | 0;
  const timeDiff = unixToMin(now) - unixToMin(unix);
  // set a guard, if within 24 hour show hour timestamp
  const hour = 60 * 60;
  if (timeDiff < 24 * hour) {
    console.log(timeDiff);
    return timeDiff <= hour ? "Just now" : `${~~timeDiff * hour} hours ago`;
  }
  const convert = new Date(unix);
  return convert.toUTCString().match(/^([\w\s,]+)\s\d{2}\:/)[1];
}

export function voteArticle({ voteScore, target, vote }) {
  return evt => {
    const value = ~~voteScore + ~~evt.target.dataset["value"];
    const update = { ...target, voteScore: value };
    return vote(update);
  }
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

function createDataModel(model, template, name) {
  if (model[name]) { // assuming every new data is set through this function
    return { ...model };
  }
  const updatedField = template(name);
  return { ...model, [name]: updatedField };
}

import {produce} from "immer";

let book = {title: "Bible"};

function publish(book) {
    return produce(book, draftBook => {
        draftBook.isPublished = true;
    })
}

console.log(book);

console.log(publish(book));


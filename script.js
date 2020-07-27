// Create a messagebox
let textbox = document.querySelector("input");
textbox.addEventListener("keydown", enterInput); // Press entr message shows insdie the chatbox
/***************************** */
// Clicking the "I feel lonely" button should make an API request

//* It should create a new message in the chatbox, from "Fact"

let clickbutton = document.querySelector("button");
clickbutton.addEventListener("click", displayJoke);

function addMsg() {
  let a = document.querySelector("#chatbox");

  let m = document.createElement("div");
  //give a class and id
  m.className = "message";
  m.id = a.childElementCount + 1;
  // let t = document.createElement("span");

  /***************************** */
  // Create time <span> tag inside div
  let t = document.createElement("span");
  t.innerHTML = showTime();
  m.appendChild(t);
  /***************************** */
  //Create sender <span>
  let s = document.createElement("span");
  s.className = "sender";
  s.innerHTML = senderNameRandom();
  m.appendChild(s);
  /***************************** */
  //create text <span>
  let meg = document.createElement("span");
  let x = document.querySelector("input");
  meg.innerHTML = x.value;
  m.appendChild(meg);

  /***************************** */
  //add delete <span>

  let del = document.createElement("span");
  del.className = "delete";
  del.innerHTML = "❌";
  //* Clicking an X by the message should delete the message.
  del.addEventListener("click", deleteMeg);

  m.appendChild(del);
  /***************************** */

  a.appendChild(m); //can be trouble
}
//****************************************************** */

//random joke endpoint: https://api.icndb.com/jokes/random.

function displayJoke() {
  fetch(`https://api.icndb.com/jokes/random`)
    .then((response) => r.jason())
    .then((data) => {
      let ans = data.value.joke;

      //* It should create a new message in the chatbox, from "Fact"
      let x = doucment.querySelector("#chatbox");
    });
}

function senderNameRandom() {
  let nam = ["Me", "Myself", "I"];
  let r = Math.floor(Math.random() * 3);
  return nam[r];
}

function showTime() {
  let tim = new Date();
  let h = tim.getHours();
  let m = tim.getMinutes();

  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }

  ans = h + ":" + m;
  return ans; //12:20
}

function deleteMeg() {
  let a = document.querySelector("#chatbox");
  a.removeChild(event.path[1]);
}

function enterInput() {
  if (event.key == "Enter") {
    event.preventDefault();
    addMsg();
    let s = document.querySelector("input");
    s.value = "";
  }
}

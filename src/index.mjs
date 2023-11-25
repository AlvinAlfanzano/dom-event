import "./styles.css";

const app = document.getElementById("app");

const judul = document.createElement("h3");
judul.innerText = "Click this box";
const btn1 = document.createElement("button");
const text = document.createElement("h1");
const note = document.createElement("h3");
btn1.classList.add("btn1");
btn1.onclick = () => {
  text.hidden = false;
  note.hidden = false;
  text.innerText = "Learn Dom Event";
  note.innerText = "Double click the box";
  judul.hidden = true;
};
btn1.ondblclick = () => {
  text.hidden = true;
  note.hidden = true;
  judul.hidden = false;
};

app.appendChild(judul);
app.appendChild(btn1);
app.appendChild(text);
app.appendChild(note);

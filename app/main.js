let options = {
  valueNames: ["name", "city"],
  item:
    '<li><span class="name"></span>&nbsp;&nbsp;<span class="city"></span></li>',
};

let values = [
  { name: "Jonny", city: "Stockholm" },
  { name: "Jonas", city: "Berlin" },
  { name: "Ahmed", city: "Abuja" },
  { name: "Jane", city: "Lagos" },
];

let hackerList = new List("hacker-list", options, values);

const btnClicked = document.getElementById("btn-clicked");

btnClicked.addEventListener("click", function (e) {
  e.preventDefault();

  const data = { username: "nothing" };

  fetch("http://localhost:8081/", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

const btnClicked1 = document.getElementById("btn1");
const btnClicked2 = document.getElementById("btn2");

btnClicked1.addEventListener("click", function (e) {
  e.preventDefault();

  const comp1 = document.getElementById("comp1").style.display;

  if (comp1 === "block") {
    document.getElementById("comp1").style.display = "none";
    document.getElementById("comp2").style.display = "block";
  } else {
    document.getElementById("comp1").style.display = "block";
    document.getElementById("comp2").style.display = "none";
  }
});

btnClicked2.addEventListener("click", function (e) {
  e.preventDefault();

  const comp2 = document.getElementById("comp2").style.display;

  if (comp2 === "none") {
    document.getElementById("comp2").style.display = "block";
    document.getElementById("comp1").style.display = "none";
  } else {
    document.getElementById("comp2").style.display = "none";
    document.getElementById("comp1").style.display = "block";
  }
});

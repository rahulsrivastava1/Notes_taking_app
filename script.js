window.onload = function () {
  const submitBtn = document.querySelector("#submitBtn");
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const text = document.querySelector("#text-input").value;
    const div = document.createElement("div");
    div.setAttribute("class", "card col-sm-3 mx-4 my-3");
    div.innerText = text;
    const parent = document.querySelector(".row");
    parent.appendChild(div);
  });
};

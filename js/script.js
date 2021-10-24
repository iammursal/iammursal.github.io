/*! MurshalAkhtar v0.0.1 | (c) 2021 Murshal Akhtar Ansari | MIT License | http://link-to-your-git-repo.com */
const $ = (e) => document.querySelector(e);
const slideUp = (e) => (
  e.classList.remove("a-slideDown"), e.classList.add("a-slideUp")
);
const slideDown = (e) => (
  e.classList.remove("a-slideUp"), e.classList.add("a-slideDown")
);
const toggle = (e) =>
  e.classList.contains("d-none")
    ? e.classList.remove("d-none")
    : e.classList.add("d-none");

function readMore(e) {
  prevEl = e.previousElementSibling;
  if (e.innerHTML != "Read Less") {
    toggle(prevEl);
    e.innerHTML = "Read Less";
  } else {
    toggle(prevEl);
    e.innerHTML = "Read More";
  }
}

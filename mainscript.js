const atoms = document.querySelector(".atoms");
var atomCount = 0;

function make_atom() {
  alert("hi",atomCount);
  atomCount += 1;
  atoms.innerHTML = "Atoms: "+=atomCount.ToString();
}

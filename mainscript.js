const atoms = document.getElementById("atoms");
var atomCount = 0;

function make_atom() {
  alert(atomCount)
  atomCount += 1;
  atoms.innerHTML = "Atoms: {atomCount}";
}

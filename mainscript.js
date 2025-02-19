atomCount = 0;
function make_atom() {
  atomCount += 1;
  document.getElementById("atoms").innerHTML = "Atoms: "+atomCount.ToString();
}

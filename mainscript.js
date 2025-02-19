atomCount = 0;
function make_atom() {
  alert("hi",atomCount);
  atomCount += 1;
  document.getElementById("atoms").innerHTML = "Atoms: "+=atomCount.ToString();
}

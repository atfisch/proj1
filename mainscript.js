atomCount = 0;
document.getElementById('atombtn').onclick() {
  alert("hi",atomCount);
  atomCount += 1;
  document.getElementById("atoms").innerHTML = "Atoms: "+=atomCount.ToString();
}

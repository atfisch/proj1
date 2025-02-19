atomCount = 0;
document.getElementById("atombtn").addEventListener('click', function() {
  alert("hi",atomCount);
  atomCount += 1;
  document.getElementById("atoms").innerHTML = "Atoms: "+=atomCount.ToString();
});

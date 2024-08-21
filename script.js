async function runLoop() {
  const loopCount = parseInt(document.getElementById("loopCount").value);
  const output = document.getElementById("output");
  const progressdiv = document.getElementById("progressdiv");
  const progress = document.getElementById("progress");
  const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
  output.innerHTML = "";
  progressdiv.style = "display:flex";
  progress.max = loopCount;

  for (let i = 1; i <= loopCount; i++) {
    progress.value = i;
    const numberDiv = document.createElement("div");
    numberDiv.className = `number ${i % 2 === 0 ? "even" : "odd"}`;
    numberDiv.textContent = i;
    output.appendChild(numberDiv);
    await sleep(100);
  }
  progressdiv.style = "display:none";
  output.style = "display:flex";
}

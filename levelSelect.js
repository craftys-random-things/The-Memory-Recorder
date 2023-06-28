window.addEventListener("load", function () {
  async function runTyping() {
    const container1 = document.getElementById("box1");
    await typewriter("<< PICK A MEMORY.", container1, 100);
    await document
      .getElementById("lvl001")
      .addEventListener("click", function () {
        switchPages("warning.html");
      });
    await show(document.getElementById("lvl001"));
    await show(document.getElementById("lvl002"));
  }
  runTyping();
});

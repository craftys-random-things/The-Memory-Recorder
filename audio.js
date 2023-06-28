window.addEventListener("load", function () {
  async function runTyping() {
    await typewriter(
      "<< THIS PROJECT MAKES EXTENSIVE USE OF AUDIO IMMERSEMENT. HEADPHONES ARE RECOMMENDED FOR FULL EFFECT. PLEASE TURN YOUR SOUND ON.",
      document.getElementById("box2"),
      50
    );
    await show(document.getElementById("alsocont"));
    document.getElementById("alsocont").addEventListener("click", function () {
      switchPages("001.html");
    });
  }
  runTyping();
});

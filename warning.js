window.addEventListener("load", function () {
  async function runTyping() {
    const container = document.querySelector(".box");
    const head = document.getElementById("head");
    const back = document.getElementById("back");
    const proceede = document.getElementById("continue");
    await typewriter("<< WARNING", head, 50);
    await typewriter(
      "<< THE FOLLOWING CONTAINS SLIGHTLY GRAPHIC MENTIONS OF SELF-HARM, SUICIDE, DEPRESSION, AND OCD. IT DEPICTS THESE MENTAL ILLNESSES WITH STRONG AND RAW FEELINGS. VIEWER DISCRETION IS ADVISED.",
      container,
      50
    );
    await show(back);
    await show(proceede);
    await back.addEventListener("click", function () {
      switchPages("index.html");
    });
    await proceede.addEventListener("click", function () {
      switchPages("audio.html");
    });
  }
  runTyping();
});

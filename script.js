let x1 = "";
let y1 = "";

let m = 1;
let n = 1;

$(".b1").click(function () {
  if ($(".one").val() !== "") {
    let name1 = $(".one").val();
    x1 = name1;

    let p1 = $("<div>").text(name1);
    $(".one").replaceWith(p1);
    $(p1).addClass("big");

    $(".b1").remove();

    m = 2;
  }
});

$(".b2").click(function () {
  if ($(".two").val() !== "") {
    let name2 = $(".two").val();
    y1 = name2;

    let p2 = $("<div>").text(name2);
    $(".two").replaceWith(p2);
    p2.addClass("big");

    $(".b2").remove();

    n = 2;
  }
});

$(".playB").click(function () {
  if (m !== 2 || n !== 2) {
    $(".title").text("Enter Player Names!");
    return;
  }

  $(".title").text("Rolling... 🎲");

  // 🟢 Add shake class to both dice
  $(".img1, .img2").addClass("shake");

  // Animate dice rolling for ~1 second
  let rollCount = 0;
  const rollInterval = setInterval(() => {
    let temp1 = Math.floor(Math.random() * 6) + 1;
    let temp2 = Math.floor(Math.random() * 6) + 1;

    $(".img1").attr("src", "./assets/dice" + temp1 + ".png");
    $(".img2").attr("src", "./assets/dice" + temp2 + ".png");

    rollCount++;
    if (rollCount >= 10) { // ~1 second
      clearInterval(rollInterval);

      // Final actual roll
      let a = Math.floor(Math.random() * 6) + 1;
      let b = Math.floor(Math.random() * 6) + 1;

      $(".img1").attr("src", "./assets/dice" + a + ".png");
      $(".img2").attr("src", "./assets/dice" + b + ".png");

      // 🟢 Remove shake after animation finishes
      $(".img1, .img2").removeClass("shake");

      if (a > b) {
        $(".title").text(x1 + " Won! 🎉");
      } else if (b > a) {
        $(".title").text(y1 + " Won! 🎉");
      } else {
        $(".title").text("It's a Draw! 😄");
      }
    }
  }, 100);
});


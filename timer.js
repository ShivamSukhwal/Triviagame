let barWidth = 0;
function progress() {
  $(".progress").text(count + "%");
  count += 20;
  growBar(barWidth);
}

function growBar() {
  barWidth += 10;
  if (barWidth <= 100) {
    $(".bar").css({ width: barWidth + "%" });
    // console.log(barWidth)
  }
}

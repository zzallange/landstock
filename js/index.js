$(function () {
  $(".offering-info .offering-schedule").click(function () {
    $(".pop-schedule").show();
  });
  $(".pop-schedule .btn_more-agree").click(function () {
    $(".pop-schedule").hide();
  });

  $(".visual-content").hide();
  $(".tabFirst").show();

  $(".visual-menu a").click(function (e) {
    e.preventDefault();
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    var idx = $(".visual-menu a").index(this);
    $(".visual-content").hide();
    $(".visual-content").eq(idx).show();
  });
});

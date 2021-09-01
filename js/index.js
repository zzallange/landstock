$(function () {
  $(".offering-info .offering-schedule").click(function () {
    $(".pop-schedule").show();
  });
  $(".pop-schedule .btn_more-agree").click(function () {
    $(".pop-schedule").hide();
  });

  //공시더보기 - offering-more
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

  //거래건물-상세 trading-info
  $(".trading-cont").hide();
  $(".tab-first").show();

  $(".trading-menu a").click(function (e) {
    e.preventDefault();
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    var idx = $(".trading-menu a").index(this);
    $(".trading-cont").hide();
    $(".trading-cont").eq(idx).show();
  });

  //거래건물-시세: 실시간,일별
  $(".quote-cont").hide();
  $(".cont-first").show();

  $(".quote-menu a").click(function (e) {
    e.preventDefault();
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    var idx = $(".quote-menu a").index(this);
    $(".quote-cont").hide();
    $(".quote-cont").eq(idx).show();
  });

  //거래건물 - 호가 pop
  $(".trading-cont .chart-thumb").click(function () {
    $(".pop-chart").show();
  });
  $(".pop-chart").click(function () {
    $(this).hide();
  });

  //매수 / 매도 / 주문
  $(".pop-trading .tab-cont").hide();
  $(".pop-trading .tab-cont:first-child").show();

  $(".pop-trading .tab-menu a").click(function (e) {
    e.preventDefault();
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    $(".btm-trading").addClass("active");
    var idx = $(".pop-trading .tab-menu a").index(this);
    $(".pop-trading .tab-cont").hide();
    $(".pop-trading .tab-cont").eq(idx).show();
    $(".pop-trading").addClass("active");
    $(".dim").addClass("on");
  });

  $(".dim").click(function () {
    $(this).removeClass("on");
    $(".pop-trading").removeClass("active");
  });
});

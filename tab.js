var 버튼 = $(".tab-button");
var 텍스트 = $(".tab-content");

/* for (let i = 0; i < $(".tab-button").length; i++) {
  버튼.eq(i).on("click", function () {
    탭열기(i);
  });
} */

$(".list").click(function (e) {
  탭열기(e.target.dataset.id);
});

function 탭열기(num) {
  버튼.removeClass("orange");
  버튼.eq(num).addClass("orange");
  텍스트.removeClass("show");
  텍스트.eq(num).addClass("show");
}

/* $(".tab-button")
  .eq(1)
  .on("click", function () {
    $(".tab-button").removeClass("orange");
    $(".tab-button").eq(1).addClass("orange");
    $(".tab-content").removeClass("show");
    $(".tab-content").eq(1).addClass("show");
  });

$(".tab-button")
  .eq(2)
  .on("click", function () {
    $(".tab-button").removeClass("orange");
    $(".tab-button").eq(2).addClass("orange");
    $(".tab-content").removeClass("show");
    $(".tab-content").eq(2).addClass("show");
  });
 */

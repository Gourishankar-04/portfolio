$(document).ready(function () {
  // Smooth navigation with fade-out effect
  $("nav a").on("click", function (event) {
      event.preventDefault();
      let link = $(this).attr("href");
      $("main").fadeOut(500, function () {
          window.location.href = link;
      });
  });

  // Hover effect for navigation links
  $("nav a").hover(
      function () {
          $(this).css("color", "#ff5733");
      },
      function () {
          $(this).css("color", "#fff");
      }
  );
});

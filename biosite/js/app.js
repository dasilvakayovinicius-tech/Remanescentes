(function () {
  "use strict";

  function applyLinks() {
    var map = {
      "link-whatsapp": CONFIG.links.whatsapp,
      "link-site": CONFIG.links.site,
      "link-biblia": CONFIG.links.biblia,
      "popup-primary": CONFIG.links.biblia,
      "social-instagram": CONFIG.social.instagram,
      "social-youtube": CONFIG.social.youtube,
      "social-tiktok": CONFIG.social.tiktok
    };
    Object.keys(map).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.setAttribute("href", map[id]);
    });
  }

  function hideLoader() {
    var loader = document.getElementById("loader");
    if (!loader) return;
    loader.classList.add("hidden");
    document.body.style.overflow = "";
  }

  function revealSequence() {
    var targets = document.querySelectorAll("[data-reveal]");
    targets.forEach(function (el, i) {
      var delay = parseInt(el.getAttribute("data-reveal"), 10) || i * 90;
      setTimeout(function () {
        el.classList.add("is-visible");
      }, delay);
    });
  }

  function init() {
    applyLinks();
    document.body.style.overflow = "hidden";

    window.setTimeout(function () {
      hideLoader();
      revealSequence();
    }, 900);
  }

  document.addEventListener("DOMContentLoaded", init);
})();

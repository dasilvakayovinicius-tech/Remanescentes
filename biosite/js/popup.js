(function () {
  "use strict";

  function alreadySeen() {
    try {
      return localStorage.getItem(CONFIG.popup.storageKey) === "1";
    } catch (e) {
      return false;
    }
  }

  function markSeen() {
    try {
      localStorage.setItem(CONFIG.popup.storageKey, "1");
    } catch (e) {
      /* localStorage indisponível — segue sem persistir */
    }
  }

  function openPopup() {
    var overlay = document.getElementById("popup-overlay");
    if (!overlay) return;
    overlay.classList.add("visible");
    overlay.setAttribute("aria-hidden", "false");
  }

  function closePopup() {
    var overlay = document.getElementById("popup-overlay");
    if (!overlay) return;
    overlay.classList.remove("visible");
    overlay.setAttribute("aria-hidden", "true");
    markSeen();
  }

  function init() {
    if (alreadySeen()) return;

    window.setTimeout(function () {
      openPopup();
    }, CONFIG.popup.delayMs);

    var overlay = document.getElementById("popup-overlay");
    var closeBtn = document.getElementById("popup-close");
    var primaryBtn = document.getElementById("popup-primary");

    if (closeBtn) {
      closeBtn.addEventListener("click", closePopup);
    }
    if (primaryBtn) {
      primaryBtn.addEventListener("click", markSeen);
    }
    if (overlay) {
      overlay.addEventListener("click", function (e) {
        if (e.target === overlay) closePopup();
      });
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();

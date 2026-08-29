/**
 * Tuition estimate calculator. Fully client-side — reads the daily rate off
 * the selected <option>'s data-rate, combines it with the chosen
 * days-per-week and the after-care flat fee. Explicitly framed as an
 * estimate, not a real enrollment quote, in the UI.
 */
(function () {
  "use strict";

  var WEEKS_PER_MONTH = 4.33;

  function formatMoney(n) {
    return "$" + Math.round(n).toLocaleString("en-US");
  }

  function recalc() {
    var programSelect = document.getElementById("program-select");
    if (!programSelect) return; // not on the tuition page

    var config = window.TUITION_CONFIG || { afterCareFee: 0 };
    var selectedOption = programSelect.options[programSelect.selectedIndex];
    var dailyRate = Number(selectedOption.dataset.rate);

    var daysBtn = document.querySelector("#days-picker button.selected");
    var days = daysBtn ? Number(daysBtn.dataset.days) : 5;

    var afterCareChecked = document.getElementById("aftercare-check").checked;
    var afterCareFee = afterCareChecked ? config.afterCareFee : 0;

    var monthly = dailyRate * days * WEEKS_PER_MONTH + afterCareFee;

    document.getElementById("r-rate").textContent = formatMoney(dailyRate);
    document.getElementById("r-days").textContent = String(days);
    document.getElementById("r-aftercare").textContent = formatMoney(afterCareFee);
    document.getElementById("r-total").textContent = formatMoney(monthly);
  }

  document.addEventListener("DOMContentLoaded", function () {
    var programSelect = document.getElementById("program-select");
    if (!programSelect) return;

    programSelect.addEventListener("change", recalc);
    document.getElementById("aftercare-check").addEventListener("change", recalc);

    document.querySelectorAll("#days-picker button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        document.querySelectorAll("#days-picker button").forEach(function (b) {
          b.classList.remove("selected");
        });
        btn.classList.add("selected");
        recalc();
      });
    });

    recalc();
  });
})();

(function () {
  var card = null;
  var showTimer = null;
  var hideTimer = null;
  var isOverCard = false;

  // Logo mapping by item id
  var LOGO_MAP = {
    'radarr':   'https://logo.clearbit.com/radarr.com',
    'loreal':   'https://logo.clearbit.com/loreal.com',
    'peaktew':  'https://logo.clearbit.com/peaktew.com',
    'invigilo': 'https://logo.clearbit.com/invigilo.ai'
  };

  function getCard() {
    if (!card) {
      card = document.getElementById('thc');
      card.addEventListener('mouseenter', function () {
        isOverCard = true;
        clearTimeout(hideTimer);
      });
      card.addEventListener('mouseleave', function () {
        isOverCard = false;
        scheduleHide();
      });
    }
    return card;
  }

  function buildContent(item) {
    var c = getCard();
    var inner = c.querySelector('.thc-inner');
    var html = '';

    var titleText = (item.title || '').replace(/\n/g, ' ');
    var logoSrc = LOGO_MAP[item.id] || '';
    var years = (item.details && item.details.years) || '';

    // Header: name + duration + logo
    html += '<div class="thc-header">';
    html += '<div class="thc-title-block">';
    html += '<div class="thc-name">' + titleText + '</div>';
    if (years) html += '<div class="thc-duration">' + years + '</div>';
    html += '</div>';
    if (logoSrc) {
      html += '<img class="thc-logo" src="' + logoSrc + '" onerror="this.style.display=\'none\'" alt="logo" />';
    }
    html += '</div>';

    // Optional image (hoverImage takes priority, then first in images array)
    var imgSrc = (item.details && item.details.hoverImage)
      || (item.details && item.details.images && item.details.images[0]);
    if (imgSrc) {
      html += '<img class="thc-img" src="' + imgSrc + '" alt="" />';
    }

    // Summary text
    var summary = item.details && item.details.summary;
    if (summary) {
      html += '<p class="thc-summary">' + summary + '</p>';
    } else if (!summary && item.description) {
      // fallback for annotation items that use .description
      html += '<p class="thc-summary">' + item.description + '</p>';
    }

    // Key contributions / bullets
    var bullets = item.details && item.details.bullets;
    if (bullets && bullets.length) {
      html += '<div class="thc-section-label">what i did</div>';
      html += '<ul class="thc-list">';
      bullets.forEach(function (b) { html += '<li>' + b + '</li>'; });
      html += '</ul>';
    }

    // Results
    var results = item.details && item.details.results;
    if (results && results.length) {
      var resultsLabel = (item.details && item.details.resultsLabel) || 'results';
      html += '<div class="thc-section-label">' + resultsLabel + '</div>';
      html += '<ul class="thc-list">';
      results.forEach(function (r) { html += '<li>' + r + '</li>'; });
      html += '</ul>';
    }

    // Tech stack / tools
    var tools = item.details && item.details.tools;
    if (tools && tools.length) {
      html += '<div class="thc-tools">';
      tools.forEach(function (t) { html += '<span class="thc-tool">' + t + '</span>'; });
      html += '</div>';
    }

    inner.innerHTML = html;
  }

  function positionCard(triggerEl) {
    var c = getCard();
    var rect = triggerEl.getBoundingClientRect();
    var gap = 10;

    // Temporarily make visible to measure real height
    c.style.visibility = 'hidden';
    c.style.opacity = '0';
    c.style.display = 'block';
    var cardW = c.offsetWidth;
    var cardH = c.offsetHeight;
    c.style.display = '';
    c.style.visibility = '';
    c.style.opacity = '';

    // Center horizontally over trigger
    var left = rect.left + (rect.width / 2) - (cardW / 2);

    // Prefer above, fall back to below
    var top;
    if (rect.top - cardH - gap > 10) {
      top = rect.top - cardH - gap;
    } else {
      top = rect.bottom + gap;
    }

    // Clamp to viewport
    var vw = window.innerWidth;
    if (left < 10) left = 10;
    if (left + cardW > vw - 10) left = vw - cardW - 10;

    c.style.left = left + 'px';
    c.style.top = top + 'px';
  }

  function show(item, el) {
    var c = getCard();
    buildContent(item);
    positionCard(el);
    c.classList.add('thc-visible');
  }

  function hide() {
    if (card && !isOverCard) {
      card.classList.remove('thc-visible');
    }
  }

  function scheduleHide() {
    clearTimeout(hideTimer);
    hideTimer = setTimeout(hide, 180);
  }

  window.showTimelineHover = function (item, el) {
    clearTimeout(hideTimer);
    clearTimeout(showTimer);
    showTimer = setTimeout(function () { show(item, el); }, 80);
  };

  window.hideTimelineHover = function () {
    clearTimeout(showTimer);
    scheduleHide();
  };
})();

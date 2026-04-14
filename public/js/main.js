(function () {
  function renderSideQuests() {
    var grid = document.getElementById('side-quests-grid');
    SIDE_QUESTS_DATA.forEach(function (quest) {
      var btn = document.createElement('button');
      btn.className = 'side-quest-card';
      btn.dataset.id = quest.id;

      var coverHTML;
      if (quest.coverImage) {
        coverHTML = '<div class="card-cover"><img src="' + quest.coverImage + '" alt="' + quest.title + '" loading="lazy" onerror="this.parentElement.innerHTML=\'<div class=\\\'card-color-placeholder\\\' style=\\\'background:' + (quest.coverColor || '#E2E8F0') + '\\\'></div>\'"></div>';
      } else {
        coverHTML = '<div class="card-cover"><div class="card-color-placeholder" style="background:' + (quest.coverColor || '#E2E8F0') + '"></div></div>';
      }

      var descHTML = quest.description
        ? '<p class="card-description">' + quest.description + '</p>'
        : '';

      var ctaHTML = quest.cta
        ? '<span class="card-cta">' + quest.cta + '</span>'
        : '<span class="card-cta">View more</span>';

      btn.innerHTML = coverHTML +
        '<div class="card-body">' +
        '<h3 class="card-title">' + quest.title + '</h3>' +
        descHTML +
        ctaHTML +
        '</div>';

      btn.addEventListener('click', function () {
        window.openModal(quest);
      });
      grid.appendChild(btn);
    });
  }

  function initContactCard() {
    var btn = document.getElementById('contact-btn');
    var card = document.getElementById('contact-card');
    if (!btn || !card) return;

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var isOpen = card.classList.contains('open');
      card.classList.toggle('open', !isOpen);
      card.setAttribute('aria-hidden', isOpen ? 'true' : 'false');
    });

    document.addEventListener('click', function () {
      card.classList.remove('open');
      card.setAttribute('aria-hidden', 'true');
    });

    card.addEventListener('click', function (e) { e.stopPropagation(); });
  }

  function initNavScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  function renderWorkflows() {
    var grid = document.getElementById('workflows-grid');
    if (!grid || typeof WORKFLOWS_DATA === 'undefined') return;
    WORKFLOWS_DATA.forEach(function (wf) {
      var btn = document.createElement('button');
      btn.className = 'side-quest-card';
      btn.dataset.id = wf.id;

      var imgStyle = 'width:100%;height:100%;object-fit:cover;' + (wf.coverPosition ? 'object-position:' + wf.coverPosition + ';' : '');
      var coverHTML = wf.coverImage
        ? '<div class="card-cover"><img src="' + wf.coverImage + '" alt="' + wf.title + '" loading="lazy" style="' + imgStyle + '" onerror="this.parentElement.innerHTML=\'<div class=\\\'card-color-placeholder\\\' style=\\\'background:' + (wf.coverColor || '#E2E8F0') + '\\\'></div>\'"></div>'
        : '<div class="card-cover"><div class="card-color-placeholder" style="background:' + (wf.coverColor || '#E2E8F0') + '"></div></div>';

      btn.innerHTML = coverHTML +
        '<div class="card-body">' +
        '<h3 class="card-title">' + wf.title + '</h3>' +
        '</div>';

      btn.addEventListener('click', function () {
        window.openModal(wf);
      });
      grid.appendChild(btn);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderWorkflows();
    renderSideQuests();
    initNavScroll();
    initContactCard();
  });
})();

(function () {
  var overlay  = document.getElementById('modal-overlay');
  var panel    = document.getElementById('modal-panel');
  var content  = document.getElementById('modal-content');
  var closeBtn = document.getElementById('modal-close');
  var currentBlogItem = null;

  // ── Pill color classes → background for Tools section ──
  var pillBgMap = {
    'pill-teal':    '#C5E9ED',
    'pill-orange':  '#FFF0DC',
    'pill-pink':    '#FDEAEC',
    'pill-green':   '#D4F4D8',
    'pill-peach':   '#FDEADC',
    'pill-outline': '#F1F5F9'
  };

  function openModal(item) {
    if (item.customModal === 'blog' && item.blogPosts) {
      currentBlogItem = item;
      content.innerHTML = buildBlogGridHTML(item);
      attachBlogCardListeners(item);
    } else if (item.customModal === 'speaking' && item.speakingEntries) {
      currentBlogItem = null;
      content.innerHTML = buildSpeakingHTML(item);
    } else if (item.customModal === 'failures' && item.failureEntries) {
      currentBlogItem = null;
      content.innerHTML = buildFailuresHTML(item);
    } else if (item.customModal === 'clients' && item.clients) {
      currentBlogItem = null;
      content.innerHTML = buildClientsHTML(item);
    } else if (item.customModal === 'workflow') {
      currentBlogItem = null;
      content.innerHTML = buildWorkflowHTML(item);
    } else {
      currentBlogItem = null;
      content.innerHTML = buildHTML(item);
      attachGalleryListeners();
    }
    overlay.classList.remove('modal-hidden');
    requestAnimationFrame(function () {
      overlay.classList.add('modal-open');
    });
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    panel.scrollTop = 0;
    panel.focus();
  }

  function closeModal() {
    currentBlogItem = null;
    overlay.classList.remove('modal-open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(function () {
      overlay.classList.add('modal-hidden');
    }, 300);
  }

  // ════════════════════════════════════════
  // EXPERIENCE / PROJECT MODAL
  // ════════════════════════════════════════
  function buildHTML(item) {
    var d = item.details || {};
    var colorClass = item.colorClass || 'pill-outline';
    var toolsBg    = pillBgMap[colorClass] || '#F1F5F9';

    // ── A. HEADER: title pill + years ──
    var headerHTML =
      '<div class="modal-header">' +
        '<div class="modal-title-pill ' + esc(colorClass) + '">' + esc(item.title) + '</div>' +
        (d.years ? '<p class="modal-years">' + esc(d.years) + '</p>' : '') +
      '</div>';

    // ── B. ROLE SUMMARY ──
    var summaryHTML = '';
    if (d.summary || d.text || d.bullets) {
      var paras = '';
      // Use `summary` if present, otherwise fall back to `text`
      if (d.summary) {
        paras += '<p>' + esc(d.summary) + '</p>';
      } else if (d.text) {
        paras += '<p>' + esc(d.text) + '</p>';
      }
      if (d.bullets && d.bullets.length) {
        d.bullets.forEach(function (b) {
          paras += '<p>' + esc(b) + '</p>';
        });
      }
      if (paras) {
        summaryHTML =
          '<p class="modal-section-label">Role Summary</p>' +
          '<div class="modal-summary">' + paras + '</div>' +
          '<div class="modal-divider"></div>';
      }
    }

    // ── C. VISUAL PROOF (gallery) ──
    var galleryHTML = '';
    var images = d.images || (d.media ? d.media.filter(function (m) { return m.type !== 'video'; }).map(function (m) { return typeof m === 'string' ? m : m.src; }) : []);
    var galleryItems = '';

    // Show up to 6 images; always render at least 3 placeholder slots
    var slots = Math.max(images.length, 3);
    for (var i = 0; i < slots; i++) {
      if (images[i]) {
        galleryItems += '<div class="gallery-item" data-src="' + esc(images[i]) + '"><img src="' + esc(images[i]) + '" alt="" loading="lazy"></div>';
      } else {
        galleryItems += '<div class="gallery-item placeholder">image</div>';
      }
    }
    galleryHTML =
      (d.hideGalleryLabel ? '' : '<p class="modal-section-label">Visual Proof</p>') +
      '<div class="modal-gallery">' + galleryItems + '</div>' +
      '<div class="modal-divider"></div>';

    // ── D. RESULTS & IMPACT ──
    var resultsHTML = '';
    if (d.results && d.results.length) {
      var items = d.results.map(function (r) {
        return '<li>' + esc(r) + '</li>';
      }).join('');
      resultsHTML =
        '<p class="modal-section-label">Results & Impact</p>' +
        '<div class="modal-results"><ul>' + items + '</ul></div>' +
        '<div class="modal-divider"></div>';
    }

    // ── E. TOOLS & SKILLS ──
    var toolsHTML = '';
    if (d.tools && d.tools.length) {
      var tags = d.tools.map(function (t) {
        return '<span class="tool-tag">' + esc(t) + '</span>';
      }).join('');
      toolsHTML =
        '<div class="modal-tools-section" style="background:' + toolsBg + '">' +
          '<p class="modal-section-label">Tools Used</p>' +
          '<div class="modal-tools-grid">' + tags + '</div>' +
        '</div>';
    } else {
      // placeholder tools section with bg color
      toolsHTML =
        '<div class="modal-tools-section" style="background:' + toolsBg + '">' +
          '<p class="modal-section-label">Tools Used</p>' +
          '<p style="font-family:\'DM Sans\',sans-serif;font-size:13px;color:#94A3B8;font-style:italic;">Coming soon</p>' +
        '</div>';
    }

    // ── F. LINKS ──
    var linksHTML = '';
    if (d.links && d.links.length) {
      var linkItems = d.links.map(function (l) {
        return '<a href="' + esc(l.url) + '" target="_blank" rel="noopener noreferrer">' + esc(l.label) + '</a>';
      }).join('');
      linksHTML = '<div class="modal-links">' + linkItems + '</div>';
    }

    // ── VIDEO EMBEDS ──
    var videoItems = d.media ? d.media.filter(function (m) { return m.type === 'video'; }) : [];
    var videosHTML = videoItems.length
      ? '<div style="display:flex;flex-direction:column;gap:12px;margin-bottom:24px;">' +
          videoItems.map(function (v) {
            return '<iframe width="100%" height="220" src="' + esc(v.src) + '" frameborder="0" allowfullscreen style="border-radius:12px;"></iframe>';
          }).join('') +
        '</div>'
      : '';

    return headerHTML + summaryHTML + galleryHTML + resultsHTML + videosHTML + toolsHTML + linksHTML;
  }

  // ── SPEAKING MODAL ──
  function buildSpeakingHTML(item) {
    var entries = item.speakingEntries.map(function (e) {
      var mediaHTML = '';
      if (e.type === 'images' && e.images) {
        var imgs = e.images.map(function (src) {
          return '<img src="' + esc(src) + '" alt="" style="flex:1;width:0;min-width:0;border-radius:10px;object-fit:cover;max-height:220px;">';
        }).join('');
        mediaHTML = '<div style="display:flex;gap:10px;margin-bottom:0;">' + imgs + '</div>';
      } else if (e.type === 'images-split' && e.items) {
        var cols = e.items.map(function (item) {
          return '<div style="flex:1;width:0;min-width:0;">' +
            '<img src="' + esc(item.src) + '" alt="" style="width:100%;height:200px;border-radius:10px;object-fit:cover;display:block;">' +
            '<p style="font-family:\'DM Sans\',sans-serif;font-size:12px;color:#94A3B8;margin:6px 0 0;line-height:1.4;">' + esc(item.caption) + '</p>' +
          '</div>';
        }).join('');
        mediaHTML = '<div style="display:flex;gap:10px;margin-bottom:0;">' + cols + '</div>';
      } else if (e.type === 'video-image') {
        mediaHTML = '<div style="display:flex;gap:10px;margin-bottom:0;">' +
          '<iframe src="' + esc(e.videoSrc) + '" frameborder="0" allowfullscreen style="flex:1;width:0;min-width:0;height:200px;border-radius:10px;"></iframe>' +
          '<img src="' + esc(e.imageSrc) + '" alt="" style="flex:1;width:0;min-width:0;height:200px;border-radius:10px;object-fit:cover;object-position:top;">' +
        '</div>';
      } else if (e.type === 'video') {
        mediaHTML = '<iframe width="100%" height="280" src="' + esc(e.src) + '" frameborder="0" allowfullscreen style="border-radius:12px;margin-bottom:14px;display:block;"></iframe>';
      }
      var captionHTML = e.type === 'images-split'
        ? (e.link ? '<div style="text-align:right;margin-top:4px;"><a href="' + esc(e.link) + '" target="_blank" rel="noopener noreferrer" style="font-family:\'DM Sans\',sans-serif;font-size:12px;color:#94A3B8;text-decoration:none;">' + esc(e.linkLabel || 'See more') + ' ↗</a></div>' : '')
        : '<div style="display:flex;align-items:center;gap:10px;margin-top:10px;">' +
            '<p style="font-family:\'DM Sans\',sans-serif;font-size:13px;color:#64748B;line-height:1.5;margin:0;flex:1;">' + esc(e.caption) + '</p>' +
            (e.link ? '<a href="' + esc(e.link) + '" target="_blank" rel="noopener noreferrer" style="flex-shrink:0;font-family:\'DM Sans\',sans-serif;font-size:12px;color:#94A3B8;text-decoration:none;white-space:nowrap;">' + esc(e.linkLabel || 'See more') + ' ↗</a>' : '') +
          '</div>';
      return '<div style="margin-bottom:28px;">' +
        mediaHTML +
        captionHTML +
      '</div>';
    });
    return entries.join('<div style="height:1px;background:#E2E8F0;margin-bottom:28px;"></div>');
  }

  // ── FAILURES MODAL ──
  function buildFailuresHTML(item) {
    var entries = item.failureEntries.map(function (f) {
      return '<div style="margin-bottom:40px;">' +
        '<h3 style="font-family:\'DM Sans\',sans-serif;font-size:18px;font-weight:700;color:#0F172A;margin-bottom:16px;">' + esc(f.title) + '</h3>' +
        '<div style="display:flex;gap:20px;align-items:flex-start;">' +
          (f.video.indexOf('youtube.com') !== -1 || f.video.indexOf('youtu.be') !== -1
            ? '<iframe src="' + esc(f.video) + '" frameborder="0" allowfullscreen style="width:45%;flex-shrink:0;border-radius:12px;aspect-ratio:9/16;"></iframe>'
            : '<video src="' + esc(f.video) + '" controls style="width:45%;flex-shrink:0;border-radius:12px;"></video>') +
          '<div style="flex:1;display:flex;flex-direction:column;gap:10px;">' +
            '<div style="background:#F8FAFC;border-radius:10px;padding:12px 14px;">' +
              '<p style="font-family:\'DM Sans\',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#94A3B8;margin-bottom:5px;">What I did</p>' +
              '<p style="font-family:\'DM Sans\',sans-serif;font-size:13px;color:#334155;line-height:1.5;">' + esc(f.whatIDid) + '</p>' +
            '</div>' +
            '<div style="background:#FEF2F2;border-radius:10px;padding:12px 14px;">' +
              '<p style="font-family:\'DM Sans\',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#EF4444;margin-bottom:5px;">What failed</p>' +
              '<p style="font-family:\'DM Sans\',sans-serif;font-size:13px;color:#334155;line-height:1.5;">' + esc(f.whatFailed) + '</p>' +
            '</div>' +
            '<div style="background:#F0FDF4;border-radius:10px;padding:12px 14px;">' +
              '<p style="font-family:\'DM Sans\',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#22C55E;margin-bottom:5px;">What I\'d do differently</p>' +
              '<p style="font-family:\'DM Sans\',sans-serif;font-size:13px;color:#334155;line-height:1.5;">' + esc(f.whatNext) + '</p>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';
    });
    return '<p class="modal-section-label" style="margin-bottom:24px;">Failures</p>' +
      entries.join('<div style="height:1px;background:#E2E8F0;margin-bottom:40px;"></div>');
  }

  // ── Click gallery image → lightbox ──
  function attachGalleryListeners() {
    var items = content.querySelectorAll('.gallery-item[data-src]');
    items.forEach(function (el) {
      el.addEventListener('click', function () {
        openLightbox(el.dataset.src);
      });
    });
  }

  function openLightbox(src) {
    var lb = document.createElement('div');
    lb.id = 'img-lightbox';
    var img = document.createElement('img');
    img.src = src;
    lb.appendChild(img);
    lb.addEventListener('click', function () { document.body.removeChild(lb); });
    document.body.appendChild(lb);
  }

  // ════════════════════════════════════════
  // CLIENT SHOWCASE MODAL (Newa / Women in AI)
  // ════════════════════════════════════════
  function buildClientsHTML(item) {
    var descHTML = item.description
      ? '<p class="clients-modal-desc">' + esc(item.description) + '</p>'
      : '';

    var sectionsHTML = (item.clients || []).map(function (client) {
      // Logo
      var logoHTML = client.logoSrc
        ? '<img src="' + esc(client.logoSrc) + '" alt="' + esc(client.name) + ' logo" class="client-logo">'
        : '<div class="client-logo-placeholder"></div>';

      // Stats badge
      var statsHTML = client.stats
        ? '<div class="client-stats">' + esc(client.stats) + '</div>'
        : '';

      // Image gallery
      var galleryHTML = '';
      if (client.images && client.images.length) {
        var imgs = client.images.map(function (src) {
          return '<div class="client-gallery-item" data-src="' + esc(src) + '">' +
            '<img src="' + esc(src) + '" alt="" loading="lazy">' +
            '</div>';
        }).join('');
        galleryHTML = '<div class="client-gallery">' + imgs + '</div>';
      } else {
        // placeholder row
        galleryHTML =
          '<div class="client-gallery">' +
            '<div class="client-gallery-item placeholder"></div>' +
            '<div class="client-gallery-item placeholder"></div>' +
            '<div class="client-gallery-item placeholder"></div>' +
          '</div>';
      }

      var nameHTML = client.url
        ? '<a href="' + esc(client.url) + '" target="_blank" rel="noopener noreferrer" class="client-name client-name-link">' + esc(client.name) + ' <span class="client-name-arrow">↗</span></a>'
        : '<h3 class="client-name">' + esc(client.name) + '</h3>';

      return '<div class="client-section" style="background:' + esc(client.bgColor || '#F8FAFC') + '">' +
        '<div class="client-section-header">' +
          nameHTML +
          logoHTML +
        '</div>' +
        statsHTML +
        galleryHTML +
      '</div>';
    }).join('');

    return '<div class="clients-modal-title">' + esc(item.title) + '</div>' +
      descHTML +
      '<div class="clients-list">' + sectionsHTML + '</div>';
  }

  // ════════════════════════════════════════
  // BLOG GRID VIEW
  // ════════════════════════════════════════
  function buildBlogGridHTML(item) {
    var postsHTML = item.blogPosts.map(function (post, i) {
      var imgInner = post.thumbnail
        ? '<img src="' + esc(post.thumbnail) + '" alt="" loading="lazy">'
        : '';
      return '<button class="blog-post-card" data-blog-index="' + i + '">' +
        '<div class="blog-card-img">' + imgInner + '</div>' +
        '<div class="blog-card-body">' +
          '<h3 class="blog-card-title">' + esc(post.title) + '</h3>' +
          '<span class="blog-card-meta">' + esc(post.date) + (post.rating ? ' &middot; ' + post.rating : '') + '</span>' +
        '</div>' +
        '</button>';
    }).join('');

    return '<h2>' + esc(item.title) + '</h2>' +
      '<p class="modal-body-text" style="color:#64748B;">Click on any post to read the full review.</p>' +
      '<div class="blog-posts-grid">' + postsHTML + '</div>';
  }

  function attachBlogCardListeners(item) {
    content.querySelectorAll('.blog-post-card').forEach(function (card) {
      card.addEventListener('click', function () {
        showBlogPost(item.blogPosts[parseInt(card.dataset.blogIndex)], item);
      });
    });
  }

  // ── SINGLE BLOG POST ──
  function showBlogPost(post, parentItem) {
    var heroHTML = post.thumbnail
      ? '<img src="' + post.thumbnail + '" alt="" class="blog-post-hero" loading="lazy">'
      : '';
    content.innerHTML =
      '<button class="blog-back-btn">&larr; Back to all posts</button>' +
      heroHTML +
      '<h2>' + esc(post.title) + '</h2>' +
      '<p class="modal-years">' + esc(post.date) + (post.rating ? ' &middot; ' + post.rating : '') + '</p>' +
      '<div class="blog-post-body">' + post.body + '</div>';

    panel.scrollTop = 0;
    content.querySelector('.blog-back-btn').addEventListener('click', function () {
      content.innerHTML = buildBlogGridHTML(parentItem);
      attachBlogCardListeners(parentItem);
      panel.scrollTop = 0;
    });
  }

  // ── WORKFLOW MODAL ──
  var toolLogoMap = {
    'Claude':      'https://logo.clearbit.com/anthropic.com',
    'Azure':       'https://logo.clearbit.com/azure.microsoft.com',
    'WhisperFlow': 'https://logo.clearbit.com/wisprflow.com',
    'HubSpot':     'https://logo.clearbit.com/hubspot.com',
    'n8n':         'https://logo.clearbit.com/n8n.io',
    'Telegram':    'https://logo.clearbit.com/telegram.org',
    'Apollo':      'https://logo.clearbit.com/apollo.io',
    'Lemlist':     'https://logo.clearbit.com/lemlist.com',
    'Buffer':      'https://logo.clearbit.com/buffer.com',
    'LinkedIn':    'https://logo.clearbit.com/linkedin.com',
    'Reddit':      'https://logo.clearbit.com/reddit.com'
  };

  function buildWorkflowHTML(item) {
    var imgHTML = '';
    if (item.video) {
      var isYouTube = item.video.indexOf('youtube.com') !== -1 || item.video.indexOf('youtu.be') !== -1;
      imgHTML = isYouTube
        ? '<iframe width="100%" height="340" src="' + esc(item.video) + '" frameborder="0" allowfullscreen style="border-radius:12px;margin-bottom:20px;display:block;"></iframe>'
        : '<video src="' + esc(item.video) + '" controls playsinline style="width:100%;border-radius:12px;margin-bottom:20px;background:#000;display:block;"></video>';
    } else {
      var imgSrc = item.modalImage || item.coverImage;
      imgHTML = imgSrc
        ? '<img src="' + esc(imgSrc) + '" alt="' + esc(item.title) + '" style="width:100%;border-radius:12px;object-fit:contain;margin-bottom:20px;background:#F8FAFC;">'
        : '';
    }

    var labelStyle = 'font-family:Inter,system-ui,sans-serif;font-size:13px;font-weight:600;color:#475569;margin-bottom:6px;';

    var toolsHTML = '';
    if (item.tools && item.tools.length) {
      var chips = item.tools.map(function(t) {
        var logo = toolLogoMap[t] || ('https://logo.clearbit.com/' + t.toLowerCase().replace(/\s+/g,'') + '.com');
        return '<div style="display:flex;align-items:center;gap:6px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:20px;padding:5px 12px 5px 8px;">' +
          '<img src="' + logo + '" alt="' + t + '" style="width:16px;height:16px;border-radius:3px;object-fit:contain;" onerror="this.style.display=\'none\'">' +
          '<span style="font-size:12px;font-weight:500;color:#334155;">' + t + '</span>' +
          '</div>';
      }).join('');
      toolsHTML = '<div class="modal-divider"></div>' +
        '<div>' +
          '<p style="' + labelStyle + '">Tools Used</p>' +
          '<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:8px;">' + chips + '</div>' +
        '</div>';
    }

    var lineStyle = 'font-family:Inter,system-ui,sans-serif;font-size:13px;line-height:1.6;color:#334155;margin:0;';
    var boldStyle = 'font-weight:700;color:#0F172A;';

    return '<h2>' + esc(item.title) + '</h2>' +
      imgHTML +
      '<div style="display:flex;flex-direction:column;gap:5px;margin-top:8px;">' +
        '<p style="' + lineStyle + '"><span style="' + boldStyle + '">Objective —</span> ' + esc(item.objective) + '</p>' +
        '<p style="' + lineStyle + '"><span style="' + boldStyle + '">What I did —</span> ' + esc(item.whatIDid) + '</p>' +
        '<p style="' + lineStyle + '"><span style="' + boldStyle + '">Results —</span> ' + esc(item.results) + '</p>' +
        toolsHTML +
      '</div>';
  }

  // ── HELPERS ──
  function esc(str) {
    if (typeof str !== 'string') return str || '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;')
      .replace(/\n/g, '<br>');
  }

  overlay.addEventListener('click', function (e) { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !overlay.classList.contains('modal-hidden')) closeModal();
  });
  closeBtn.addEventListener('click', closeModal);

  window.openModal  = openModal;
  window.closeModal = closeModal;
})();

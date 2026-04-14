(function () {
  var START = TIMELINE_CONFIG.startYear;
  var END   = TIMELINE_CONFIG.endYear;

  // ── Vertical layout constants (px relative to #timeline-container top) ──
  var NEWA_LABEL_Y   = -25;
  var EDU_LABEL_Y    = 10;
  var EDU_LINE_Y     = 26;
  var EDU_DROP_Y     = 46;
  var ANNOT_ABOVE_Y  = 52;
  var BAR_TOP        = 78;
  var BAR_H          = 18;
  var BAR_BOTTOM     = BAR_TOP + BAR_H;   // 96
  var TICK_H         = BAR_H + 12;
  var YEAR_LABEL_Y   = BAR_BOTTOM + 10;   // 106
  var WORK_LABEL_Y   = BAR_BOTTOM + 32;   // 128
  var ANNOT_BELOW_Y  = 195;

  function yearToPercent(year) {
    return ((year - START) / (END - START)) * 100;
  }

  // ── BASE BAR (grey background for the full track) ──
  function renderBaseBar() {
    var c = document.getElementById('timeline-axis');
    var b = document.createElement('div');
    b.style.cssText = 'position:absolute;left:0;right:0;top:' + BAR_TOP + 'px;height:' + BAR_H + 'px;background:#EEF2F7;border-radius:4px;z-index:1;';
    c.appendChild(b);
  }

  // ── COLORED WORK SEGMENTS ──
  function renderSegments() {
    var c = document.getElementById('timeline-axis');
    TIMELINE_DATA.forEach(function (item) {
      if (item.itemType !== 'work' && !item.hasBar) return;
      var lp = yearToPercent(item.startYear);
      var rp = yearToPercent(item.endYear);
      var s  = document.createElement('div');
      var bg = item.barPattern === 'checkered'
        ? 'repeating-linear-gradient(45deg,' + (item.barColor || '#1A3A5C') + ',' + (item.barColor || '#1A3A5C') + ' 3px,rgba(255,255,255,0.5) 3px,rgba(255,255,255,0.5) 7px)'
        : (item.barColor || '#CBD5E1');
      var z = item.hasBar ? 3 : 2;
      s.style.cssText = 'position:absolute;left:' + lp + '%;width:' + (rp - lp) + '%;top:' + BAR_TOP + 'px;height:' + BAR_H + 'px;background:' + bg + ';border-radius:3px;z-index:' + z + ';cursor:default;';
      s.title = item.title;
      (function(it) {
        s.addEventListener('mouseenter', function() { window.showTimelineHover(it, s); });
        s.addEventListener('mouseleave', function() { window.hideTimelineHover(); });
      })(item);
      c.appendChild(s);
    });
  }

  // ── TICK MARKS ──
  function renderTicks() {
    var c = document.getElementById('timeline-axis');
    for (var y = 2020; y <= 2026; y++) {
      var t = document.createElement('div');
      t.style.cssText = 'position:absolute;left:' + yearToPercent(y) + '%;transform:translateX(-50%);width:1.5px;top:' + (BAR_TOP - 6) + 'px;height:' + TICK_H + 'px;background:rgba(15,23,42,0.2);z-index:5;';
      c.appendChild(t);
    }
  }

  // ── YEAR LABELS ──
  function renderYearLabels() {
    var c = document.getElementById('timeline-axis');
    for (var y = 2020; y <= 2026; y++) {
      var l = document.createElement('span');
      l.style.cssText = 'position:absolute;left:' + yearToPercent(y) + '%;top:' + YEAR_LABEL_Y + 'px;transform:translateX(-50%);font-family:"Inter",system-ui,sans-serif;font-size:10px;font-weight:600;color:#94A3B8;white-space:nowrap;letter-spacing:0.04em;pointer-events:none;';
      l.textContent = y;
      c.appendChild(l);
    }
  }

  // ── EDUCATION BRACKETS (above bar) ──
  function renderEducationBrackets() {
    var c = document.getElementById('timeline-brackets');
    TIMELINE_DATA.forEach(function (item) {
      if (item.itemType !== 'education') return;
      var lp    = yearToPercent(item.startYear);
      var rp    = yearToPercent(item.endYear);
      var dropH = EDU_DROP_Y - EDU_LINE_Y;

      var wrap = document.createElement('div');
      wrap.style.cssText = 'position:absolute;left:' + lp + '%;width:' + (rp - lp) + '%;top:0;height:100%;pointer-events:none;';

      // Label
      var lbl = document.createElement('span');
      lbl.style.cssText = 'position:absolute;left:50%;top:' + EDU_LABEL_Y + 'px;transform:translateX(-50%);font-family:"Inter",system-ui,sans-serif;font-size:9.5px;font-weight:600;color:#64748B;white-space:nowrap;letter-spacing:0.03em;cursor:pointer;pointer-events:auto;';
      lbl.textContent = item.title;
      (function(it) {
        lbl.addEventListener('mouseenter', function() { window.showTimelineHover(it, lbl); });
        lbl.addEventListener('mouseleave', function() { window.hideTimelineHover(); });
      })(item);

      // Horizontal line
      var hLine = document.createElement('div');
      hLine.style.cssText = 'position:absolute;left:0;right:0;top:' + EDU_LINE_Y + 'px;height:1.5px;background:#94A3B8;';

      // Left vertical drop
      var lDrop = document.createElement('div');
      lDrop.style.cssText = 'position:absolute;left:0;top:' + EDU_LINE_Y + 'px;width:1.5px;height:' + dropH + 'px;background:#94A3B8;';

      // Right vertical drop
      var rDrop = document.createElement('div');
      rDrop.style.cssText = 'position:absolute;right:0;top:' + EDU_LINE_Y + 'px;width:1.5px;height:' + dropH + 'px;background:#94A3B8;';

      wrap.appendChild(lbl);
      wrap.appendChild(hLine);
      wrap.appendChild(lDrop);
      wrap.appendChild(rDrop);
      c.appendChild(wrap);
    });
  }

  // ── WORK EXPERIENCE LABELS (clickable, below/above bar) ──
  function renderWorkLabels() {
    var c = document.getElementById('timeline-items');
    TIMELINE_DATA.forEach(function (item) {
      if (item.itemType !== 'work') return;
      var mp  = yearToPercent((item.startYear + item.endYear) / 2) + (item.labelOffset || 0);
      var btn = document.createElement('button');
      btn.className = 'timeline-work-label';
      btn.style.left  = mp + '%';
      btn.style.top   = WORK_LABEL_Y + 'px';
      btn.style.color = item.labelColor || '#475569';
      btn.style.borderBottom = '1px solid ' + (item.labelColor || '#475569');
      btn.textContent = item.title.replace('\n', ' ');
      btn.dataset.id  = item.id;
      (function(it) {
        btn.addEventListener('mouseenter', function() { window.showTimelineHover(it, btn); });
        btn.addEventListener('mouseleave', function() { window.hideTimelineHover(); });
      })(item);
      c.appendChild(btn);
    });
  }

  // ── ANNOTATION LABELS + ARROWS ──
  function renderAnnotations() {
    var c = document.getElementById('timeline-items');
    TIMELINE_DATA.forEach(function (item) {
      if (item.itemType !== 'annotation') return;
      var xp      = yearToPercent((item.startYear + item.endYear) / 2);
      var isAbove = item.position !== 'below';
      var labelY  = isAbove
        ? (item.hasBar ? NEWA_LABEL_Y : ANNOT_ABOVE_Y)
        : ANNOT_BELOW_Y;

      // Label button
      var lbl = document.createElement('button');
      lbl.className = 'timeline-annotation-label';
      lbl.style.left = xp + '%';
      lbl.style.top  = labelY + 'px';
      if (item.hasBar) {
        lbl.style.borderBottom = '1px dashed #94A3B8';
        lbl.style.paddingBottom = '1px';
      }
      lbl.textContent = item.title;
      (function(it) {
        lbl.addEventListener('mouseenter', function() { window.showTimelineHover(it, lbl); });
        lbl.addEventListener('mouseleave', function() { window.hideTimelineHover(); });
      })(item);
      c.appendChild(lbl);

      // Straight arrow
      var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', '2');
      svg.style.cssText = 'position:absolute;pointer-events:none;overflow:visible;z-index:3;left:calc(' + xp + '% - 1px);';

      if (isAbove) {
        var arrowH = BAR_TOP - labelY - 20;
        if (arrowH < 8) arrowH = 8;
        svg.setAttribute('height', arrowH + '');
        svg.style.top = (labelY + 18) + 'px';
        svg.innerHTML =
          '<defs><marker id="ah-' + item.id + '" markerWidth="5" markerHeight="5" refX="1" refY="2.5" orient="auto">' +
            '<path d="M0,0 L5,2.5 L0,5 Z" fill="#94A3B8"/>' +
          '</marker></defs>' +
          '<line x1="1" y1="0" x2="1" y2="' + arrowH + '" stroke="#94A3B8" stroke-width="1.2" marker-end="url(#ah-' + item.id + ')"/>';
      } else {
        var arrowH2 = labelY - BAR_BOTTOM - 14;
        if (arrowH2 < 8) arrowH2 = 8;
        svg.setAttribute('height', arrowH2 + '');
        svg.style.top = (BAR_BOTTOM + 6) + 'px';
        svg.innerHTML =
          '<defs><marker id="ah-' + item.id + '" markerWidth="5" markerHeight="5" refX="1" refY="2.5" orient="auto-start-reverse">' +
            '<path d="M0,0 L5,2.5 L0,5 Z" fill="#94A3B8"/>' +
          '</marker></defs>' +
          '<line x1="1" y1="' + arrowH2 + '" x2="1" y2="0" stroke="#94A3B8" stroke-width="1.2" marker-start="url(#ah-' + item.id + ')"/>';
      }
      c.appendChild(svg);
    });
  }

  // ── CURRENT YEAR PIN ──
  function renderPin() {
    var pin = document.getElementById('timeline-pin');
    pin.style.cssText = 'position:absolute;left:' + yearToPercent(TIMELINE_CONFIG.currentYear) + '%;top:' + (BAR_TOP - 24) + 'px;transform:translateX(-50%);pointer-events:none;z-index:6;';
    pin.innerHTML =
      '<svg width="16" height="22" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M10 0C4.477 0 0 4.477 0 10c0 7.5 10 18 10 18S20 17.5 20 10C20 4.477 15.523 0 10 0z" fill="#E53935"/>' +
        '<circle cx="10" cy="10" r="4" fill="white"/>' +
      '</svg>';
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderBaseBar();
    renderSegments();
    renderTicks();
    renderYearLabels();
    renderEducationBrackets();
    renderWorkLabels();
    renderAnnotations();
    renderPin();
  });
})();

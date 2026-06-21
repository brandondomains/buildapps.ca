(function(){
  // Mobile menu
  const burger = document.getElementById('burger');
  const mobilePanel = document.getElementById('mobilePanel');
  if (burger && mobilePanel) {
    burger.addEventListener('click', () => {
      const expanded = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', String(!expanded));
      mobilePanel.style.display = expanded ? 'none' : 'block';
    });
  }

  // Smooth jump to search
  document.getElementById('scrollSearch')?.addEventListener('click', () => {
    document.getElementById('searchArea')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(() => document.getElementById('searchInput')?.focus(), 350);
  });

  // Toast
  function toast(message){
    const t = document.createElement('div');
    t.textContent = message;
    t.style.position = 'fixed';
    t.style.left = '50%';
    t.style.bottom = '22px';
    t.style.transform = 'translateX(-50%)';
    t.style.padding = '10px 12px';
    t.style.borderRadius = '999px';
    t.style.border = '1px solid rgba(15,23,42,.12)';
    t.style.background = 'rgba(255,255,255,.92)';
    t.style.boxShadow = '0 18px 40px rgba(15,23,42,.14)';
    t.style.zIndex = '999';
    t.style.fontSize = '13px';
    document.body.appendChild(t);
    setTimeout(() => { t.style.opacity = '0'; t.style.transition = 'opacity .35s ease'; }, 1400);
    setTimeout(() => t.remove(), 1900);
  }
  window.toast = toast;

  // Search + filters (demo)
  const input = document.getElementById('searchInput');
  const resultsPill = document.getElementById('resultsPill');
  const filterButtons = Array.from(document.querySelectorAll('.fbtn'));
  let activeFilter = 'all';

  function allItems(){
    return Array.from(document.querySelectorAll('[data-tags]'));
  }
  function setVisible(el, yes){ el.style.display = yes ? '' : 'none'; }

  function runFilter(){
    const query = (input?.value || '').trim().toLowerCase();
    const items = allItems();
    let shown = 0;

    items.forEach(el => {
      const tags = (el.getAttribute('data-tags') || '').toLowerCase();
      const cat  = (el.getAttribute('data-cat') || '').toLowerCase();
      const matchesQuery = !query || tags.includes(query);
      const matchesFilter = (activeFilter === 'all') || cat.includes(activeFilter);
      const ok = matchesQuery && matchesFilter;
      setVisible(el, ok);
      if (ok) shown++;
    });

    if (!resultsPill) return;
    if (!query && activeFilter === 'all') {
      resultsPill.textContent = 'Search: off';
    } else {
      const qText = query ? `“${query}”` : '—';
      resultsPill.textContent = `Filter: ${activeFilter.toUpperCase()} • Search: ${qText} • ${shown} match${shown === 1 ? '' : 'es'}`;
    }
  }

  input?.addEventListener('input', runFilter);
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = (btn.getAttribute('data-filter') || 'all').toLowerCase();
      runFilter();
    });
  });

  // Reveal on scroll
  const revealEls = Array.from(document.querySelectorAll('.reveal'));
  if (revealEls.length){
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => { if (en.isIntersecting) en.target.classList.add('in'); });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
  }

  // Mock newsletter
  document.querySelectorAll('form[data-mock-subscribe]').forEach(f => {
    f.addEventListener('submit', (e) => {
      e.preventDefault();
      toast('Thanks — you’re subscribed (mock).');
    });
  });

  // Year
  const y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());
})();

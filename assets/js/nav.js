// /assets/js/nav.js
(function () {
    const btn = document.getElementById('svc-btn');
    const panel = document.getElementById('svc-panel');

    if (!btn || !panel) return;

    const open = () => {
        panel.classList.remove('hidden');
        btn.setAttribute('aria-expanded', 'true');
    };
    const close = () => {
        panel.classList.add('hidden');
        btn.setAttribute('aria-expanded', 'false');
    };
    const toggle = () => (panel.classList.contains('hidden') ? open() : close());

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggle();
    });
    panel.addEventListener('click', (e) => e.stopPropagation());
    document.addEventListener('click', close);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') close();
    });

    // Close on noticeable scroll so it never gets "stuck" open
    let lastY = window.scrollY;
    window.addEventListener('scroll', () => {
        if (Math.abs(window.scrollY - lastY) > 40) close();
        lastY = window.scrollY;
    }, {passive: true});
})();
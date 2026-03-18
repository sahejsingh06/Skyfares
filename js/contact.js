// Form Handling
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const statusEl = document.getElementById('form-status');

  if (!form || !statusEl) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);

    // Initial Status
    statusEl.textContent = "Sending...";
    statusEl.className = "text-center text-sm font-medium text-brand-600 mt-4";
    statusEl.classList.remove('hidden');

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        statusEl.textContent = "Thanks! Your inquiry has been sent.";
        statusEl.className = "text-center text-sm font-medium text-emerald-500 mt-4";
        form.reset();
      } else {
        statusEl.textContent = "Oops! There was a problem. Please try again or WhatsApp us.";
        statusEl.className = "text-center text-sm font-medium text-red-500 mt-4";
      }
    } catch (error) {
      statusEl.textContent = "Oops! Something went wrong. Please try again or WhatsApp us.";
      statusEl.className = "text-center text-sm font-medium text-red-500 mt-4";
    }
  });
});
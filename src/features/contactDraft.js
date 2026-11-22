export function installContactDraft() {
  function setup() {
    const form = document.querySelector('form.vts-7rfox');
    if (!form) return;
    form.id = 'project-inquiry';
    const names = form.querySelectorAll('input[name="Name"]');
    if (names[0]) names[0].name = 'First Name';
    if (names[1]) names[1].name = 'Last Name';
    const service = form.querySelector('select');
    if (service) service.name = 'Service';
  }
  setup();
  const observer = new MutationObserver(setup);
  observer.observe(document.body,{childList:true,subtree:true});
  const saveDraft = event => {
    const form = event.target;
    if (!form.matches('form.vts-7rfox')) return;
    event.preventDefault(); event.stopImmediatePropagation();
    if (!form.reportValidity()) return;
    const draft = Object.fromEntries(new FormData(form));
    localStorage.setItem('vision-tech-studio-inquiry-draft', JSON.stringify(draft));
    let status = form.querySelector('[role="status"]');
    if (!status) {status = document.createElement('p');status.setAttribute('role','status');status.style.cssText='font-family:Urbanist,sans-serif;color:#004eef;line-height:1.5';form.append(status);}
    status.textContent = 'Your enquiry draft is saved on this device. Online submission is not connected yet; no message has been sent.';
  };
  document.addEventListener('submit', saveDraft, true);
  return () => { observer.disconnect(); document.removeEventListener('submit', saveDraft, true); };
}

const prompt = document.getElementById('prompt');
const style = document.getElementById('style');
const format = document.getElementById('format');
const duration = document.getElementById('duration');
const mood = document.getElementById('mood');
const previewTitle = document.getElementById('preview-title');
const previewText = document.getElementById('preview-text');
const previewDescription = document.getElementById('preview-description');
const previewStyle = document.getElementById('preview-style');
const previewDuration = document.getElementById('preview-duration');
const previewFormat = document.getElementById('preview-format');
const previewImage = document.getElementById('preview-image');
const examples = [
  'Une ville futuriste au coucher du soleil, vue aérienne, lumière dorée, mouvement lent et ambiance cinématique.',
  'Une forêt tropicale au lever du jour, brume légère, lumière douce, caméra en mouvement et ambiance rêveuse.',
  'Un flacon de parfum élégant sur un fond sombre, lumière studio, gros plan et style publicité premium.'
];
const backgrounds = [
  'linear-gradient(135deg,#d9b677,#a87758 42%,#344256 75%,#172337)',
  'linear-gradient(135deg,#9bd1c4,#568a78 45%,#344256 78%,#172337)',
  'linear-gradient(135deg,#b4a2d4,#7d6aab 45%,#344256 78%,#172337)',
  'linear-gradient(135deg,#f0c183,#bd7558 45%,#344256 78%,#172337)'
];
function makeConcept() {
  const description = prompt.value.trim();
  if (!description) {
    prompt.focus();
    prompt.setCustomValidity('Écrivez une description pour créer votre aperçu.');
    prompt.reportValidity();
    return;
  }
  prompt.setCustomValidity('');
  const title = description.split(/[,.!?]/)[0].trim();
  previewTitle.textContent = title.length > 50 ? `${title.slice(0, 47)}…` : title;
  previewText.textContent = description;
  previewDescription.textContent = `Concept ${style.value.toLowerCase()}, ambiance ${mood.value.toLowerCase()}, conçu au format ${format.value}. Ceci est un aperçu visuel, pas une vidéo générée.`;
  previewStyle.textContent = style.value;
  previewDuration.textContent = duration.value;
  previewFormat.textContent = format.value;
  previewImage.style.background = backgrounds[Math.floor(Math.random() * backgrounds.length)];
}
document.getElementById('generate').addEventListener('click', makeConcept);
document.getElementById('example').addEventListener('click', () => {
  prompt.value = examples[Math.floor(Math.random() * examples.length)];
  prompt.setCustomValidity('');
  prompt.focus();
});
document.getElementById('start-generation').addEventListener('click', () => {
  document.getElementById('studio').scrollIntoView({ behavior: 'smooth' });
  prompt.focus({ preventScroll: true });
});

export function setCurrentStory(base, script) {
  window.sessionStorage.setItem('currentStory', JSON.stringify({
    base,
    script
  }));
}

export function getCurrentStory() {
  return JSON.parse(window.sessionStorage.getItem('currentStory'));
}

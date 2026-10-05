'use client';
import { useSyncExternalStore } from 'react';

// One shared Korean-voice lookup for every button on the page.
// Voices load asynchronously (always on iOS Safari, often on Chrome), so we
// listen for `voiceschanged` and also poll briefly, since some iOS versions
// never fire the event. Buttons render nothing until a ko-KR voice exists.

let voice = null;
const listeners = new Set();
let started = false;

// Higher-quality voices first; then the first ko-KR voice; then any Korean voice.
const PREFERRED = ['premium', 'enhanced', 'google'];

function findVoice() {
  const lang = (v) => v.lang.replace('_', '-').toLowerCase();
  const all = window.speechSynthesis.getVoices();
  const koKR = all.filter((v) => lang(v) === 'ko-kr');
  const next =
    PREFERRED.map((word) => koKR.find((v) => v.name.toLowerCase().includes(word))).find(Boolean) ||
    koKR[0] ||
    all.find((v) => lang(v).startsWith('ko')) ||
    null;
  if (next !== voice) {
    voice = next;
    listeners.forEach((l) => l());
  }
  return voice;
}

function start() {
  if (started || typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  started = true;
  if (findVoice()) return;
  window.speechSynthesis.addEventListener?.('voiceschanged', findVoice);
  let tries = 0;
  const poll = setInterval(() => {
    if (findVoice() || ++tries > 20) clearInterval(poll);
  }, 250);
}

function subscribe(listener) {
  listeners.add(listener);
  start();
  return () => listeners.delete(listener);
}

function speak(text) {
  const synth = window.speechSynthesis;
  // Cancelling right before speak() can swallow the new utterance on iOS,
  // so only cancel when something is actually playing.
  if (synth.speaking || synth.pending) synth.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'ko-KR';
  if (voice) u.voice = voice;
  u.rate = 0.9;
  synth.speak(u);
}

export default function SpeakButton({ text }) {
  const available = useSyncExternalStore(subscribe, () => !!voice, () => false);
  if (!available) return null;
  return (
    <button type="button" className="speak" aria-label={`Play ${text}`} title={`Play ${text}`} onClick={() => speak(text)}>
      <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true">
        <path d="M4 2.5v11l9.5-5.5z" fill="currentColor" />
      </svg>
    </button>
  );
}

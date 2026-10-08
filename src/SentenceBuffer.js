/** Start playback on a sentence boundary, with a bound for replies that contain no punctuation. */
export class SentenceBuffer {
  constructor() { this.text = ''; }
  append(delta) {
    this.text += delta;
    const ready = [];
    while (this.text.length) {
      let end = -1;
      for (let i = 0; i < this.text.length; i++) {
        const char = this.text[i];
        const decimal = char === '.' && /\d/.test(this.text[i - 1] || '') && (i === this.text.length - 1 || /\d/.test(this.text[i + 1] || ''));
        if (/[。！？!?;；\n]/.test(char) || char === '.' && !decimal) { end = i + 1; break; }
        if (i >= 24 && /[,，:：]/.test(char)) { end = i + 1; break; }
      }
      if (end < 0 && this.text.length >= 100) {
        end = this.text.lastIndexOf(' ', 85);
        if (end < 24) end = 80;
      }
      if (end < 0) break;
      const sentence = this.text.slice(0, end).trim();
      this.text = this.text.slice(end);
      if (sentence) ready.push(sentence);
    }
    return ready;
  }
  flush() { const text = this.text.trim(); this.text = ''; return text ? [text] : []; }
}

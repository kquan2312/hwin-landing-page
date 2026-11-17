export function normalizeText(value = "") {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

export function findAnswer(question, faqs = []) {
  const normalized = normalizeText(question);
  if (!normalized) return null;
  let best = null;
  for (const faq of faqs) {
    let score = 0;
    for (const keyword of faq.keywords || []) {
      const key = normalizeText(keyword);
      if (!key) continue;
      if (normalized.includes(key)) score = Math.max(score, key.split(" ").length * 3 + 2);
      else {
        const matchedWords = key.split(" ").filter((word) => normalized.split(" ").includes(word)).length;
        score = Math.max(score, matchedWords);
      }
    }
    if (!best || score > best.score) best = { faq, score };
  }
  return best && best.score >= 3 ? best.faq : null;
}

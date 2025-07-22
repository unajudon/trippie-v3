// pages/api/log-trippie.ts
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const scriptURL = 'https://script.google.com/macros/s/AKfycbxpBvUb0y_TaG-gRd7Pb8uTlMylJSaZ2-jUnsWDGjkK_DIiyex3P5vyoyOLgb8LKSWDKg/exec';

  const { TrippieType, MBTI, Score, Browser } = req.body;

  const form = new URLSearchParams();
  form.append('TrippieType', TrippieType || 'Unknown');
  form.append('MBTI', MBTI || 'Unknown');
  form.append('Score', Score || '0');
  form.append('Browser', Browser || 'Unknown');

  try {
    const response = await fetch(scriptURL, {
      method: 'POST',
      body: form,
    });

    const text = await response.text();
    return res.status(200).json({ success: true, message: text });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
}

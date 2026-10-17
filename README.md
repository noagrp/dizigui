# 弟子规

A structured, reusable reader and explanation dataset for the traditional Chinese primer 《弟子规》.

## Content architecture

- `data/dizigui.json` — source metadata, chapter metadata, original text, plain-language explanations, vocabulary notes and cultural / modern reading notes
- `src/dizigui-engine.js` — reusable chapter, navigation and full-text search engine
- `index.html` — reader UI only
- `manifest.webmanifest` / `sw.js` — PWA support

The JSON is intentionally independent from the website so other projects can reuse the material without parsing HTML.

## Base text

V1 follows the chapter order and main text on Chinese Wikisource's 《弟子规》 page, attributed there to Qing author 李毓秀. The source page also records several textual variants. This project uses the page's main reading rather than silently merging variant readings.

Source: https://zh.wikisource.org/wiki/%E5%BC%9F%E5%AD%90%E8%A6%8F

## Editorial rule

The explanation should first explain what the original sentence actually says. Historical context, traditional values, and modern cautions belong in the cultural note. Generic repeated moral statements should be avoided; notes should add information specific to the passage.

Original text is kept in Traditional Chinese. Explanations and notes are newly written in Simplified Chinese.

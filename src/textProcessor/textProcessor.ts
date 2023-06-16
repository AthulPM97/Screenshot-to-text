import * as Tesseract from "tesseract.js";

Tesseract.recognize(
  "https://imgv3.fotor.com/images/blog-cover-image/How-to-Make-Text-Stand-Out-And-More-Readable.jpg",
  "eng"
  // { logger: m => console.log(m) }
).then(({ data: { text } }) => {
  console.log(text);
});

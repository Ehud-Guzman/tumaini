// Generates favicon.ico, Apple touch icon and PWA icons from src/app/icon.svg.
// Run with: npm run icons
import fs from "node:fs";
import sharp from "sharp";

const svg = fs.readFileSync("src/app/icon.svg");
const png = (size, opts = {}) =>
  sharp(svg, { density: 512 }).resize(size, size).png(opts).toBuffer();

// favicon.ico: PNG-compressed entries at 16, 32 and 48 px.
async function ico(sizes) {
  const images = await Promise.all(sizes.map((s) => png(s)));
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(sizes.length, 4);
  let offset = 6 + 16 * sizes.length;
  const entries = images.map((img, i) => {
    const e = Buffer.alloc(16);
    e.writeUInt8(sizes[i] >= 256 ? 0 : sizes[i], 0);
    e.writeUInt8(sizes[i] >= 256 ? 0 : sizes[i], 1);
    e.writeUInt16LE(1, 4); // planes
    e.writeUInt16LE(32, 6); // bits per pixel
    e.writeUInt32LE(img.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += img.length;
    return e;
  });
  return Buffer.concat([header, ...entries, ...images]);
}

fs.writeFileSync("src/app/favicon.ico", await ico([16, 32, 48]));

// Apple touch icon: opaque brand background, mark inset (iOS rounds the corners).
await sharp({ create: { width: 180, height: 180, channels: 4, background: "#b4491f" } })
  .composite([{ input: await sharp(svg, { density: 512 }).resize(150, 150).png().toBuffer(), left: 15, top: 15 }])
  .png().toFile("src/app/apple-icon.png");

// PWA / manifest icons and a general-purpose logo PNG.
fs.writeFileSync("public/icon-192.png", await png(192));
fs.writeFileSync("public/icon-512.png", await png(512));
fs.writeFileSync("public/logo.png", await png(512));
console.log("icons written");

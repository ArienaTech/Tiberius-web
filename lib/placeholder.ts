export function placeholderImg(label: string, width = 400, height = 300) {
  const bg = "0A1224";
  const fg = "D6B15E";
  return `https://placehold.co/${width}x${height}/${bg}/${fg}?text=${encodeURIComponent(label)}&font=roboto`;
}

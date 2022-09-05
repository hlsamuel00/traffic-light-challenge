export default function standard(count) {
  const colors = ["green", "yellow", "red"];
  return colors[count % colors.length];
}

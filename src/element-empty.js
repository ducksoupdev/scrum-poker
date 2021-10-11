export function elementEmpty (el) {
  while (el.firstChild) el.removeChild(el.firstChild)
}

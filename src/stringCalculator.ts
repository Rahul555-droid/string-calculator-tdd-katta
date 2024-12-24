export function add(numbers: string): number {
  if (numbers === "") return 0;

  let delimiter = /[\n,]/;
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    const rawDelimiter = parts[0].slice(2); // Extract custom delimiter
    const escapedDelimiter = rawDelimiter.replace(
      /[.*+?^${}()|[\]\\]/g,
      "\\$&"
    ); // really crazy edge case
    delimiter = new RegExp(escapedDelimiter);
    numbers = parts[1];
  }

  const numArray = numbers.split(delimiter).map(Number);
  const negatives = numArray.filter((num) => num < 0);

  if (negatives.length) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
  }

  return numArray.reduce((sum, num) => sum + num, 0);
}

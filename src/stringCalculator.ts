    export function add(numbers: string): number {
    if (numbers === "") return 0;
  
    let delimiter = /[\n,]/;
    if (numbers.startsWith("//")) {
      const parts = numbers.split("\n");
      const rawDelimiter = parts[0].slice(2);
      delimiter = parseDelimiters(rawDelimiter);
      numbers = parts[1];
    }
  
    const numArray = numbers.split(delimiter).map(Number);
    const negatives = numArray.filter((num) => num < 0);
  
    if (negatives.length) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }
  
    return numArray
      .filter((num) => num <= 1000)
      .reduce((sum, num) => sum + num, 0);
  }
  
  function parseDelimiters(rawDelimiter: string): RegExp {
    if (rawDelimiter.startsWith("[")) {
      const delimiters = rawDelimiter
        .slice(1, -1)
        .split("][")
        .map((delim) => delim.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")); // really breaking edge case.
      return new RegExp(delimiters.join("|"));
    }
    return new RegExp(rawDelimiter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  }

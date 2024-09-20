function toCamelCase(str) {
  // Memisahkan kata berdasarkan tanda hubung atau garis bawah
  return str
    .split(/[-_]/)
    .map((word, index) => {
      if (index === 0) {
        return word.charAt(0) + word.slice(1);
      }
      // Kata-kata berikutnya selalu dikapitalisasi
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
}

// Contoh penggunaan
console.log(toCamelCase("the-stealth-warrior")); // "theStealthWarrior"

// เริ่มเขียนโค้ดตรงนี้
function multiplicationTable(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      result += i * j + "\t";
    }
    result += "\n";
  }
  return result;
}

console.log(multiplicationTable(5));

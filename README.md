
# 🔟 Useful Array Functions (NPM Package)

> A lightweight utility package that extends JavaScript arrays with 10 commonly needed, high-performance operations. Perfect for developers looking to simplify array manipulation.

![npm](https://img.shields.io/npm/v/10_array_useful_functions?color=green)
![GitHub](https://img.shields.io/github/license/PyhtonDeveloperNishu/10_Useful_Array_functions_in_package)
![GitHub Repo stars](https://img.shields.io/github/stars/PyhtonDeveloperNishu/10_Useful_Array_functions_in_package?style=social)

---

## 📦 Installation

```bash
npm install 10_array_useful_functions
```

---

## 🚀 Usage

```js
const {
  sum,
  unique,
  average,
  max,
  min,
  chunk,
  flatten,
  compact,
  groupBy,
  countBy
} = require('10_array_useful_functions');

const arr = [1, 2, 3, 4, 5];

console.log(sum(arr));                 // 15
console.log(unique([1, 2, 2, 3]));     // [1, 2, 3]
console.log(average(arr));            // 3
console.log(max(arr));                // 5
console.log(min(arr));                // 1
console.log(chunk(arr, 2));           // [[1, 2], [3, 4], [5]]
console.log(flatten([1, [2, [3]]]));  // [1, 2, 3]
console.log(compact([0, 1, false, 2, '', 3])); // [1, 2, 3]
console.log(groupBy(['one', 'two', 'three'], x => x.length)); // { '3': ['one', 'two'], '5': ['three'] }
console.log(countBy([1.1, 2.5, 2.8], Math.floor)); // { '1': 1, '2': 2 }
```

---

## 🔧 Available Functions

| Function              | Description                                 |
|-----------------------|---------------------------------------------|
| `sum(arr)`            | Returns the sum of array elements           |
| `unique(arr)`         | Returns a new array with unique values      |
| `average(arr)`        | Returns the average of all numbers          |
| `max(arr)`            | Returns the maximum number                  |
| `min(arr)`            | Returns the minimum number                  |
| `chunk(arr, size)`    | Breaks array into chunks of given size      |
| `flatten(arr)`        | Flattens nested arrays into a single array  |
| `compact(arr)`        | Removes all falsy values                    |
| `groupBy(arr, cb)`    | Groups elements based on a callback function|
| `countBy(arr, cb)`    | Counts elements based on a callback function|

---

## 📁 Project Structure

```
.
├── index.js               # Main module with all 10 functions
├── package.json           # NPM metadata and scripts
├── README.md              # Project documentation
└── .github/
    └── workflows/
        └── publish.yml    # GitHub Action for auto publish
```

---

## 👨‍💻 Author

**Nishu Kumar**

- 🔗 [GitHub](https://github.com/PyhtonDeveloperNishu)
- 🔗 [NPM Package](https://www.npmjs.com/package/10_array_useful_functions)

---

## 📜 License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).

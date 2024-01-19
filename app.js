// Ma'lumotni Local Storage ga saqlash
// localStorage.setItem("ism", "John");
// localStorage.setItem("yosh", "25");

// Ma'lumotni olish
// var ism = localStorage.getItem("ism");
// var yosh = localStorage.getItem("yosh");

// console.log("Ism:", ism);
// console.log("Yosh:", yosh);

// IndexedDB yaratish
// var db;
// var request = indexedDB.open("mynotes", 1);

// request.onupgradeneeded = function (event) {
//   db = event.target.result;
//   var objectStore = db.createObjectStore("mynotes", {
//     keyPath: "id",
//     autoIncrement: true,
//   });
//   objectStore.createIndex("ism", "ism", { unique: false });
//   objectStore.createIndex("yosh", "yosh", { unique: false });
// };

// request.onsuccess = function (event) {
//   db = event.target.result;

//   // Ma'lumot qo'shish
//   var transaction = db.transaction(["mynotes"], "readwrite");
//   var objectStore = transaction.objectStore("mynotes");
//   objectStore.add({ ism: "John", yosh: 25 });

//   // Ma'lumotni olish
//   var getObjectStore = db.transaction(["mynotes"]).objectStore("mynotes");
//   var getRequest = getObjectStore.get(1);

//   getRequest.onsuccess = function (event) {
//     var result = event.target.result;
//     console.log("Ism:", result.ism);
//     console.log("Yosh:", result.yosh);
//   };
// };

// Web SQL yaratish
// var db = openDatabase("mydb", "1.0", "My Database", 2 * 1024 * 1024);

// Ma'lumot qo'shish
// db.transaction(function (tx) {
//   tx.executeSql(
//     "CREATE TABLE IF NOT EXISTS mytable (id INTEGER PRIMARY KEY, ism TEXT, yosh INTEGER)"
//   );
//   tx.executeSql("INSERT INTO mytable (ism, yosh) VALUES (?, ?)", ["John", 25]);
// });

// Ma'lumotni olish
// db.transaction(function (tx) {
//   tx.executeSql("SELECT * FROM mytable", [], function (tx, results) {
//     var len = results.rows.length;
//     for (var i = 0; i < len; i++) {
//       console.log("Ism:", results.rows.item(i).ism);
//       console.log("Yosh:", results.rows.item(i).yosh);
//     }
//   });
// });

// Ma'lumotni Cookies ga saqlash
// document.cookie = "ism=John; expires=Thu, 01 Jan 2025 00:00:00 UTC; path=/";
// document.cookie = "yosh=25; expires=Thu, 01 Jan 2025 00:00:00 UTC; path=/";

// Ma'lumotni olish
// var cookies = document.cookie.split("; ");
// for (var i = 0; i < cookies.length; i++) {
//   var parts = cookies[i].split("=");
//   console.log(parts[0] + ":", parts[1]);
// }

// Ma'lumotni Session Storage ga saqlash
// sessionStorage.setItem("ism", "John");
// sessionStorage.setItem("yosh", "25");

// Ma'lumotni olish
// var ism = sessionStorage.getItem("ism");
// var yosh = sessionStorage.getItem("yosh");

// console.log("Ism:", ism);
// console.log("Yosh:", yosh);

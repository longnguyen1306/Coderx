/**
 * Tạo một đối tượng student gồm các property name, sex, age
 * Example:
  name: "CodersX",
  sex: "Male",
  age: 1
 * Viết hàm showInfo trả về object đó
*/
//
// var student = {
//   name: "CodersX",
//   sex: "Male",
//   age: 1
// }
//
// function showInfo(obj) {
//   // viết code ở đây
//   return obj;
// }
//
// console.log(showInfo(typeof student.name));
// -----------------------------------------------
/**
 * Viết hàm xoá thuộc tính (prop) khỏi object student
 * Trả về object đã được xoá
 * Example:
 *  removeProp("name") = { class: “VI”, rollno: 12 }
*/

// function removeProp(prop) {
//     var student = {
//             name : "David Rayy",
//             class : "VI",
//             rollno : 12
//         }
//   // chỉ viết code ở dưới dòng này.
//    delete student[prop];
//    return student;
// }
//
// console.log(removeProp("name"));
// /---------------------------------------------------------
/**
 * Viết hàm countProperty để in ra độ dài của một đối tượng
 * @param {object}
 * @return {number}
 *
 * Example:
 * var student = {
 *      name: "Jerry",
 *      age: 14,
 *      role: "student"
 *  }
 * lengthObj(student); // length: 3
}
*/
// var student = {
//       name: "Jerry",
//       age: 14,
//       role: "student"
//    }
// function countProperty(obj) {
//   // viết code ở đây
//   return Object.keys(obj).length;
// }
// console.log(countProperty(student));
// ----------------------------------------------------------
/**
 * Viết hàm xây dựng Shape để tạo các đối tượng hình học có các thuộc tính sau:
 *  {
 *    color: String,
 *    shape: String,
 *    fill: boolean
 *  }
*/
//
// function Shape(color, shape, fill) {
//   // Your code here
//     this.color = color,
//     this.shape = shape,
//     this.fill = fill
// }
//
// var shape1 = new Shape("red", "rectangle", true);
// var shape2 = new Shape("orange", "triangle", false);
// var shape3 = new Shape("tomato", "circle", true);
//
// console.log(shape1)
// console.log(shape2)
// console.log(shape3)

// --------------------------------------------------------------
/*
  Viết hàm xây dựng các đối tượng student có các thuộc tính sau:
  - name: String,
  - level: String,
  - school: String

  Trong đó, thuộc tính school là thuộc tính dùng chung, có giá trị là "CodersX".
*/

// function Student(name, level) {
//   this.name = name,
//   this.level = level
// }
// Student.prototype.school = "CodersX";
// hs1 = new Student('Long', 10);
// console.log(hs1);
// console.log(hs1.school);

// -----------------------------------------------------------------------
/*
  Viết hàm xây dựng các đối tượng student gồm các thuộc tính:
    diemToan: Number,
    diemLy: Number,
    diemHoa: Number
    average: [function];

    average là hàm tính điểm trung bình 3 môn.
    average là thuộc tính dùng chung.

  Output:
    student1.average() = 7
    student2.average() = 8
*/

// function Student(diemToan, diemLy, diemHoa) {
//   // Viết code ở đây
//   this.diemToan = diemToan,
//   this.diemLy = diemLy,
//   this.diemHoa = diemHoa
// }
//
// Student.prototype.average = function() {
//   // Viết code ở đây
//     var diemTb =  (this.diemToan + this.diemLy + this.diemHoa) / Object.keys(this).length;
//     return Math.ceil(diemTb);
// }
//
// var student1 = new Student(6, 7, 7);
// var student2 = new Student(8, 9, 6);
// // console.log(student1);
// // console.log(student2);
// console.log(student1.average());
// console.log(student2.average());
//
// var array = [5, 6, 9];
//
// function max(arr) {
//   // your code here
//   var m = arr[0];
//   for ( var i=0;i<arr.length;i++ ) {
//     if(m <  arr[i]) {
//       m = arr[i];
//     }
//   }
//   return m;
// }
//
// console.log(max(array));


// function isTruthy(x) {
//   // your code here!
//   if(x == false || x == 0 || x == NaN || x == String || x == null || x == undefined) {
//     return false;
//   } else {
//     return true;
//   }
// }
//
// console.log(isTruthy( [] ));


/**
 * Viết hàm xếp hạng theo điểm số theo công thức sau:
 * [0-5): C
 * [5-7): B
 * [7-10]: A
 */
// function grade(score) {
//   // your code here!
//   if(score <= 5) {
//     return 'C';
//   } else if(score > 5 && score <= 7) {
//     return 'B';
//   } else if(score > 7 && score <= 10) {
//     return 'A';
//   }
// }
//
// console.log(grade(6));

/**
 * Sử dụng switch case và map để chuyển đổi array các chữ thành các số tương ứng theo quy tắc:
 * 'A' hoặc 'a' -> 1
 * 'B' hoặc 'b' -> 2
 *  còn lại -> 0
 */

// function transform(arr) {
//   // your code here
//   var m = arr.map(function(a) {
//     switch (a) {
//      case 'A':
//         return 1;
//         break;
//      case 'a':
//        return 1;
//        break;
//      case 'B':
//         return 2;
//         break;
//      case 'b':
//        return 2;
//        break;
//      default:
//       return 0;
//     }
//   });
//   return m;
// }
//
// console.log(transform(['A', 'b', 'a', 'B', 'd']));
// ---------------------------------------------------------------------
/**
 * Sử dụng vòng lặp while tính tổng các số lẻ nhỏ hơn x.
 */

function sum(x) {
  var i = 1;
  // viết code ở đây.
  var tong = 0;
  while(i < x) {

    if(i % 2 !== 0){
      console.log(i);
      // tong += i;

    }
    ++i;
  }
  // return tong;
}

console.log(sum(5));

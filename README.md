![image](https://github.com/user-attachments/assets/6698e40b-4986-46eb-b568-0ada859f9774)
Tugas 1 JavaScript Basic
Program ini ditulis dalam JavaScript untuk melakukan beberapa perhitungan matematika, yaitu:

1.Menghitung luas persegi panjang

2.Menghitung diameter, keliling, dan luas lingkaran

3.Menentukan sudut ketiga segitiga jika dua sudut diketahui

4.Menghitung selisih tanggal dalam hari

5.Mengambil inisial nama dalam huruf besar
## Menghitung luas persegi panjang
```javascript
// 1. Menghitung luas persegi panjang
    let panjang = 5;
    let lebar = 3;
    let luas = panjang * lebar;

    console.log("Luas Persegi Panjang:", luas);// output:15
```
## Menghitung diameter, keliling, dan luas lingkaran
```javascript
// 2. Menghitung diameter, keliling, dan luas lingkaran
    function circleProperties(radius) {
    let diameter = 2 * radius;
    let circumference = 2 * Math.PI * radius;
    let area = Math.PI * Math.pow(radius, 2);

    console.log("Diameter =", diameter);//output :5
    console.log("Keliling =", circumference.toFixed(4)); //output : 31.4159,
    console.log("Luas =", area.toFixed(3)- 0.001); //output : 78.539
    }

    let radius = 5;
    circleProperties(radius); //
```
## Menentukan sudut ketiga segitiga jika dua sudut diketahui
```javascript
// 3. Menentukan sudut ketiga segitiga jika dua sudut diketahui
function findThirdAngle(a, b) {
    let thirdAngle = 180 - (a + b);
    return thirdAngle;
}

    let a = 80;
    let b = 65;
    let thirdAngle = findThirdAngle(a, b);

    console.log("Sudut Ketiga =", thirdAngle); //output : 35
```
##  Menghitung selisih tanggal dalam hari
```javascript
// 4. Menghitung selisih tanggal dalam hari
function getDateDifference(date1, date2) {
    let d1 = new Date(date1);
    let d2 = new Date(date2);
    let difference = Math.abs(d2 - d1);
    return difference / (1000 * 60 * 60 * 24);
    }

    let date1 = "2024-03-19";
    let date2 = "2024-03-21";
    let daysDifference = getDateDifference(date1, date2);

    console.log("Selisih Hari =", daysDifference);//output : 2
```
## Mengambil inisial nama dalam huruf besar
```javascript
// 5. Mengambil inisial nama dalam huruf besar
    function getInitials(name) {
    let initials = name.split(' ').map(word => word[0].toUpperCase()).join('');
    return initials;
    }
    
    let name = "Ghazi Al Ghifari";
    let initials = getInitials(name);

    console.log("Inisial Nama =", initials); // output : GAG
```

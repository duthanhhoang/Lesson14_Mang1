let arr = ["Chí","Đỉnh","Dương","Hiếu"]

//Thêm phần tử
//Cuối
function addItem(){
    //Thêm cuối 
    // arr[2] = "Loan";
    // arr[arr.length] = "Quân";
    // arr.push("San");

    //Thêm đầu
    // for (let i = arr.length; i > 0; i--) {
    //     arr[i] = arr[i-1]
    // }
    // arr[0] = "Thành";

    // arr.unshift("Thành")

    //Thêm bất kì
    // for (let i = arr.length; i > 1; i--) {
    //     arr[i] = arr[i-1]
    // }
    // arr[2] = "Loan";
    arr.splice(2,1,"Loan","Loan")

    console.log(arr);
}

function deleteItem() {
    //Xoá cuối
    // arr.length--;
    // let item = arr.pop(); //Xoá phần cuối mảng, trả về phần tử đã xoá

    //Xoá đầu
    // for (let i = 0; i < arr.length-1; i++) {
    //     arr[i]=arr[i+1];
    // }
    // arr.length--;
    // arr.shift();

    //Xoá bất kì
    // arr.splice(2,1);
    arr[6] = "Thức";
    console.log(arr);
    // console.log(item);

}

deleteItem();
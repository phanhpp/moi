//Bai 1
var s =0;
const tinhTong = (n) => {
    
 for (i = 1; i <= n; i++){
     s+= i^2;
 }
 console.log(s);
}
tinhTong(9)

//bai3:
var tich = 0;
const tinhNhan = (N)=> {
    var tich = 1;
for ( i = 2; i <N; i++){
    if (isPrimeNumber(i) == true){
        tich *= i;
    }
   
}
  console.log(tich)
 function isPrimeNumber(n) {
    if( n <2){
        return false;
    }
    d = Math.sqrt(n);
    for ( j = 2; j <= d; j++) {
        if (n%j == 0){
            return false;
        }
    }
    return true;

   
}

}
tinhNhan(100)



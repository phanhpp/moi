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
 tich = 1;
function tichChinh(N) {
    for ( i = 1; i <= N; i++){
    d= Math.sqrt(i);
    if ( parseInt(d)== d){ 
        console.log(i);
        tich *= i;

    }
} console.log(tich);
}
tichChinh(26)


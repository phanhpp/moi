

export const duTuoi = n => {
    if (n <= 18 ){
        return 'chua du tuoi';
    } else {
        return 'du tuoi'
    }
}

export const kiemTra = (k,m) =>{
    
    t = k/m*m;
    if ( t< 18.5){
        return 'thieu can';
    } else if ( t == 18.5){
        return 'binh thuong';
    } else {
        return 'beo phi'
    }

}

export class person {
    constructor (name, age){
        this.name = name;
        this.age = age;
    }
    setName (name){
        this.name = name;
        
    }
    getName (){
        return this.name;
    }
}

export class BMI {
    constructor (cao, nang){
        this.cao = cao;
        this.nang = nang ;
    }
    setCao (cao){
        this.cao = cao;
    }
    setNang ( nang){
        this.nang = nang;
    }
    getCao (){
        return this.cao;
    }
    getNang(){
        return this.nang;
    }
    getBMI (){
        return this.cao/this.nang
    }
}


export class phanSo {
    constructor(tu,mau){
        this.tu = tu;
        this.mau = mau;
    }
    setTu (tu){
        this.tu = tu;
    }
    gettu(){
        return this.tu;
    }
    setMau (mau){
        this.mau = mau;
    }
    getMau(){
        return this.mau;
    }
    getTong(){
        return this.tu+this.mau;
    } 
    getphanSo(){
        return this.tu/this.mau;
    }
}

export class soPhuc {
    constructor(thuc, ao,a,b,c){
        this.thuc= thuc;
        this.ao=ao;
        this.a = a;
        this.b=b;
        this.c =c;
        
    }
    setThuc(thuc){
        this.thuc =thuc;
    }
    getThuc(){
        return this.thuc;
    }
    setAo(ao){
        this.ao= ao;
    }
    getAo(){
        return this.ao;
    }
    getsoPhuc(){
        return this.thuc+ '+'+this.ao + 'i';
    }  
    
}

export  const soChia= (a,b)=>{
    let a= new soPhuc;
    let b = new soPhuc
    var c;
    var tongbp;
    tongpb= parseInt(b.thuc*b.thuc +b.ao*b.ao);
    c.thuc = (a.thuc*a.ao +b.thuc*b.ao)/tongbp;
    c.ao = (a.ao*b.thuc - a.thuc*b.ao)/tongbp;
    return c;
  }


 









let ATeste = [1,2,3,4,5,6,7,8,9]

let a = (x) => {
    x.forEach(element => {
        if (element % 2 !=0) {
            console.log(element + " é Impar");
        } else
        {
            console.log(element + " é par");
        }
    });

}

a(ATeste);
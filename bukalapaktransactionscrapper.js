let listBeli = []; 
let prosesNo = 1;
let sedangProses = false;
let cetak = false;
let hasilCetak = "<table>";
let valValue = {};

let ainter = setInterval(function(){
    if (!sedangProses && document.querySelector('html').classList.length==0){
        sedangProses = true;

        document.querySelectorAll('.c-panel').forEach(function(value,index){
            listBeli.push({
                code:value.querySelectorAll('.u-fg--black')[0]?value.querySelectorAll('.u-fg--black')[0].innerText:'',
                datetime:value.querySelectorAll('.u-txt--small')[0]?value.querySelectorAll('.u-txt--small')[0].innerText:'',
                name:value.querySelectorAll('.u-fg--black')[2]?value.querySelectorAll('.u-fg--black')[2].innerText:'',
                price:value.querySelectorAll('.u-fg--black')[1]?value.querySelectorAll('.u-fg--black')[1].querySelector('.amount').innerText:'',
                status:value.querySelectorAll('.u-txt--base')[3]?value.querySelectorAll('.u-txt--base')[3].innerText:''
            });
            valValue = listBeli[listBeli.length-1];
            hasilCetak = hasilCetak+"<tr>";
            hasilCetak = hasilCetak+"<td>"+valValue.code+"</td>"+"<td>"+valValue.datetime+"</td>"+"<td>"+valValue.name+"</td>"+"<td>"+valValue.price+"</td>"+"<td>"+valValue.status+"</td>";
            hasilCetak = hasilCetak+"</tr>";
            if (index==document.querySelectorAll('.c-panel').length-1){
                sedangProses = false;
                prosesNo++;
                console.log('Processing...' + prosesNo);
            }
        });
    }
    if (!sedangProses && document.querySelectorAll('a[rel*="next"].c-pagination__btn').length==1 && document.querySelector('html').classList.length==0){
        document.querySelectorAll('a[rel*="next"].c-pagination__btn')[0].click();
    }
    if (document.querySelectorAll('a[rel*="next"].c-pagination__btn').length==0){
        clearInterval(ainter);
        hasilCetak = hasilCetak+"</table>";
        console.log(hasilCetak);
    }
},1000);


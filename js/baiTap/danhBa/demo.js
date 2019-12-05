var str = 'freetuts.net la blog chia se kien thuc lap trinh mien phi';
var arr = [{name: 'long', phone:'122'}, {name:'hai', phone: '2222'}, {name:'lan', phone:'00000'}];

str = 'A';
// str.search();
var newre = new RegExp( str, 'gi');

for (a of arr) {
    if(a.name.search(newre) !== -1) {
        console.log(a)
    } else {
        console.log('cc');
    }
}


console.log('vị trí - '+str.search(/ch*/));
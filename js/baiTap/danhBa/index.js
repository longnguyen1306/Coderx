var readlineSync = require('readline-sync');
var fs = require('fs');
var file = 'data.json';
var contacts = [];

var fileContent = fs.readFileSync(file, 'utf8');
var contacts = JSON.parse(fileContent);

function themDanhBa(){
    var name = readlineSync.question('Ten cua ban: ');
    var phone = readlineSync.question('So dien thoai: ');
    var contact = {
        name: name,
        phone: phone
    };
    contacts.push(contact);
    var content = JSON.stringify(contacts);
    fs.writeFileSync(file, content);
    
}


function showContact() {
    for ( contact of contacts ) {
        console.log("Tên: " + contact.name + " / " + "Số điện thoại: " + contact.phone);
    }
}


function xoaDanhBa() {
    var nameDel = readlineSync.question('Ten can xoa: ');
    console.log('----------------------------------------');
    for (i=0;i<contacts.length;i++) {
        
        if(contacts[i].name === nameDel) {
            contacts.splice(i,1);
            break;
        }
    }
    fs.writeFileSync(file, JSON.stringify(contacts));
    showContact();
}

function suaDanhBa() {
    var namEdit = readlineSync.question('Ten can sua: ');
    console.log('----------------------------------------');   

    console.log(namEdit)
}


function menu() {
    console.log('----------------------------------------');
    console.log('1./Them Danh Ba');
    console.log('2./Sua Danh Ba');
    console.log('3./Tim Danh Ba');
    console.log('4./Xoa Danh Ba');
    console.log('5./Hien Thi Danh Ba');
    console.log('6./Thoat');
    var option = readlineSync.question('> ');
    console.log('----------------------------------------');

    switch (option) {
        case '1':
            //Them danh ba
            themDanhBa();
            showContact();
            menu();
            break;
        case '2':
            //Sua danh ba
            suaDanhBa();
            break;
        case '3':
            //Tim danh ba
            console.log(option);
            break;
        case '4':
            //Xoa danh ba
            xoaDanhBa();
            menu();
            break;
        case '5':
            //hien thi danh ba
            showContact();
            menu();
            break;
        case '6':
            //thoat
            break;
        default:
            menu();
    }
}
function main() {
    menu();
}
main();
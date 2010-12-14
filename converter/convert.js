// 
//  convert.js
//  numtext
//  
//  Created by Mohamad Ariau Akbar on 2010-12-14.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
// 

function checkRatus(num){
	var ratus;
	  switch (num) {
		case '1':
            ratus = "seratus";
            break;
        case '2':
            ratus = "duaratus";
            break;
        case '3':
            ratus = "tigaratus";
            break;
        case '4':
            ratus = "empatratus";
            break;
        case '5':
            ratus = "limaratus";
            break;
        case '6':
            ratus = "enamratus";
            break;
        case '7':
            ratus = "tujuhratus";
            break;
        case '8':
            ratus = "delapanratus";
			break;
		case '9':
			ratus = "sembilanratus";
            break;
        default:
        }
	return ratus;
}

function checkPuluh(num){
	var puluh;
	  switch (num) {
		
		case '0':
			puluh = "";
			break;
		case '1':
            puluh = "sepuluh";
            break;
        case '2':
            puluh = "duapuluh";
            break;
        case '3':
            puluh = "tigapuluh";
            break;
        case '4':
            puluh = "empatpuluh";
            break;
        case '5':
            puluh = "limapuluh";
            break;
        case '6':
            puluh = "enampuluh";
            break;
        case '7':
            puluh = "tujuhpuluh";
            break;
        case '8':
            puluh = "delapanpuluh";
            break;
		case '9':
			puluh = "sembilanpuluh";
			break;
        default:
        }
	return puluh;
}

function checkSatuan(num) {
	var satu;
	  switch (num) {

		case '0':
			satu = "";
			break
        case '1':
            satu = "satu";
            break;
        case '2':
            satu = "dua";
            break;
        case '3':
            satu = "tiga";
            break;
        case '4':
            satu = "empat";
            break;
        case '5':
            satu = "lima";
            break;
        case '6':
           	satu = "enam";
            break;
        case '7':
            satu = "tujuh";
            break;
        case '8':
            satu = "delapan";
            break;
		case '9':
			satu = "sembilan";
			break;
        default:
        }
	return satu;
}

function checkBelas(num){
	var belas;
	switch (num){
		case '1':
			belas = "sebelas";
			break;
		case '2':
			belas = "duabelas";
			break;
		case '3':
			belas = "tigabelas";
			break;
		case '4':
			belas = "empatbelas";
			break;
		case '5':
			belas = "limabelas";
			break;
		case '6':
			belas = "enambelas";
			break;
		case '7':
			belas = "tujuhbelas";
			break;
		case '8':
			belas = "delapanbelas";
			break;
		case '9':
			belas = "sembilanbelas";
			break;
		default:
	}
	return belas;
}

function convert() {

    var angka = document.getElementById('masukkan_angka').value;
    var print = document.getElementById('print');
    var text = [];

	if( angka.length < 1 || angka.length > 3){
		alert("angka harus dalam tiga digit "+angka+" > 999");
		return false;
	}else if( parseInt(angka) < 1){
		alert("angka harus positif "+angka+" < 0");
		return false;
	}else if(isNaN(angka) === true){
		alert("Input data harus berupa angka!");
		return false;
	}
	
	if (angka.length === 3) { // ratusan
		for (var i = 0; i < angka.length; i++) {
			if (i == 0) { // array #0
				var num = angka[i];
				var ratusan = checkRatus(num);
              	text[i] = ratusan;
            } else if (i == 1) { // array #1
				var num = angka[i];
				var puluhan = checkPuluh(num);
				text[i] = puluhan;   
            } else if (i == 2) { // array #2
				var num = angka[i];
				var satuan = checkSatuan(num);
				text[i] = satuan;
            } //endif
        }// endfor
		document.write("Decimal: ")
		for (var i=0; i < angka.length; i++) {
			document.write(angka[i]);
		};
		document.write("<br/>")
		document.write("Terbilang: ")
		for (var i = 0; i < text.length; i++) {
            document.writeln(text[i]);
        };
    } else if (angka.length === 2){ //puluhan
		for (var i=0; i < angka.length; i++) {
			if(angka[i] == 1 && angka[i+1] <= 9 && angka[i+1] >= 1){ // if the format is ex: 15, 16 , 18
				var num = angka[i+1];
				var belasan = checkBelas(num);
				text[i] = belasan;
				i++; // increment so we don't need to check the remaining value
			}
			else if(i == 0){
				var num = angka[i];
				var puluhan = checkPuluh(num);
				text[i] = puluhan;
			} else if(i == 1) {
				var num = angka[i];
				var puluhan = checkSatuan(num);
				text[i] = puluhan;
			} // endif
		} // endfor
		document.write("Decimal: ")
		for (var i=0; i < angka.length; i++) {
			document.write(angka[i]);
		};
		document.write("<br/>")
		document.write("Terbilang: ")
		for (var i = 0; i < text.length; i++) {
            document.writeln(text[i]);
        };
	} else { // satuan
		
		for (var i=0; i < angka.length; i++) {
			var num = angka[i];
			var satuan = checkSatuan(num);
			text[i] = satuan;
		};
		document.write("Decimal: ")
		for (var i=0; i < angka.length; i++) {
			document.write(angka[i]);
		};
		document.write("<br/>")
		document.write("Terbilang: ")
		for (var i = 0; i < text.length; i++) {
            document.writeln(text[i]);
        };
	}
}
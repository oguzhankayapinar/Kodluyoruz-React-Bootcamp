/* Cookielerin tanımıyla başlayalım. 
Cookie : Cookie (çerez), kullanıcının bilgisayarında web tarayıcılar aracılığıyla saklanan ve en fazla 4 KB boyutunda olan metin (txt) dosyalarıdır. 

JavaScript ile cookie oluşturmak için document nesnesi kullanılır. */

document.cookie= "firstName=oguzhan"  // Tarayıcı kapatıldığı zaman silinmektedir.

/*Javascript çerez oluşturma sırasında “express” veya “max-age” olarak 2 ayrı süre belirtme seçeneği bulunmakta. Belirli bir tarih ve saate kadar çerezin aktif kalması isteniyorsa “express” özelliğinin kullanılması gerekirken, belirli bir süre kadar aktif kalması istenirse “max-age” özelliğinin kullanılması gerekir.

Örneğin, aşağıdaki ifadeyle sitenin bütün dizininde çalışacak, 29 Eylül 2022 Cuma günü saat 13'e kadar tarayıcıda aktif olacak “name” isminde bir cookie oluşturup, değerini ise ‘Kodluyoruz’ olarak tanımlamış oluyoruz.   */

document.cookie = "name=Kodluyoruz; expires=Friday, 29 Jun 2022 13:00:00 UTC;";

/* Tarih belirlemek yerine şu an ki tarihten itibaren 2 gün boyunca aktif kalacak bir çerez tanımlamak isteseydik aşağıdaki gibi kullanmamız gerekecekti. 2 günlük zamanı ise saniye cinsinden belirtmeliyiz. */

document.cookie = "name=OK; max-age="+60*60*24*2;

/* Javascript Cookie Oluşturma, Düzenleme ve Silme Fonksiyonu SET */

function setCookie(c_name,value,exdays){ //cookie oluşturma 
	var exdate=new Date();
	exdate.setTime(exdate.getTime() + exdays);
	var c_value=escape(value) + ((exdays==null) ? "" : "; path=/; expires="+exdate.toUTCString());
	document.cookie=c_name + "=" + c_value;
}


/* Javascript Cookie Okuma Fonksiyonu  GET */

function getCookie(c_name){ 
	var i,x,y,ARRcookies=document.cookie.split(";"); 
	for (i=0;i<ARRcookies.length;i++){ 
		x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("=")); 
		y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1); 
		x=x.replace(/^s+|s+$/g,""); 
		if (x==c_name){ 
			return unescape(y); 
		} 
	} 
}

/*Session Storage: Bir web tarayıcısında key/value değerlerini yalnızca bir oturum süresi için tarayıcıya kaydedebilmesine izin veren bir özelliktir. Yani tarayıcı sekmesi kapatıldığında veriler de kaybolur.*/

sessionStorage.setItem('name','Oguzhan Kayapinar')
sessionStorage.getItem('name')

/* setItem ile  değer ataması yapılırken, getItem ile atadığımız değeri kullanırız.*/
 # **HTTP Metotları ( Http Request Methods)**
 HTTP, web browser ile web server arasında iletişim kurmamızı sağlayan bir protokoldür.

 ![get](https://miro.medium.com/max/720/0*THWBAYXk0OnwfsAd.png)

 **1-) GET**: Bu metod sunucudan veri almak için kullanılır. GET ve POST metodları en sık kullanılan metodlar olup sunucudaki kaynaklara erişmek için kullanılırlar.GET metodu ile sorgu metinleri URL içinde gönderilebilir. Bunun en önemli faydası kullanıcıların bookmark edebilmeleri ve aynı sorguyu içeren istekleri daha sonra gönderebilmelerini sağlaması ve tarayıcıda önceki sorguların “geri” tuşu ile veya tarayıcı geçmişinden çağrılarak aynı sayfalara ulaşabilmeleridir. Güvenlik açısından URL’lerin ekranda görüntüleniyor olması ve URL’in hedefine ulaşıncaya kadar ve hedef sunucu üzerinde iz kayıtlarında görülebilmesi gönderilen parametrelerin gizlilik ihtiyacı varsa sıkıntı yaratabilir. Bu nedenlerle hassas isteklerin GET ile gönderilmemelidir.

 ![post](https://miro.medium.com/max/1400/1*dyvMu7Et3arLTlSMESn06Q.jpeg)

**2-)POST:** Bu metod ile sunucuya veri yazdırabilirsiniz. Bu metodla istek parametreleri hem URL içinde hem de mesaj gövdesinde gönderilebilir. Sadece mesaj gövdesinin kullanımı yukarıda sayılan riskleri engelleyecektir. Tarayıcılar geri butonuna basıldığında POST isteğinin mesaj gövdesinde yer alan parametreleri tekrar göndermek isteyip istemedimizi sorarlar. Bunun temel nedeni bir işlemi yanlışlıkla birden fazla yapmayı engellemektir. Bu özellik ve de güvenlik gerekçeleriyle bir işlem gerçekleştirileceğinde POST metodunun kullanılması önerilir.

**3-)PUT:** Bu metod ile servis sağlayıcı üzerindeki bir kaynağı güncelleyebilirsiniz. Hangi kaynağı güncelleyecekseniz o kaynağın id’sini göndermek zorunludur.

**4-)HEAD:** GET metoduyla benzer işleve sahiptir ancak geri dönen yanıtta mesaj gövdesi bulunmaz (yani başlıklar ve içerikleri GET metoduyla aynıdır). Bu nedenle GET mesajı gönderilmeden önce bir kaynağın var olup olmadığını kontrol etmek için kullanılabilir.

**5-)DELETE:** Bu metod ile sunucudaki herhangi bir veriyi silebilirsiniz.

**6-)CONNECT:** Bir proxy sunucu üzerinden başka bir sunucuya bağlanmak ve proxy sunucuyu bir tünel gibi kullanmak için kullanılır.

**7-)OPTIONS:** Bu metod belli bir kaynak için kullanılabilecek HTTP metodlarını sunucudan sorgulamak için kullanılır.

**8-)TRACE:** Teşhis amaçlı kullanılan bir metoddur. Sunucu bu metodla gelen istek mesajının içeriğini aynen yanıt gövdesinde geri göndermelidir. Bu yöntemle sunucu ile istemci arasında bir vekil sunucu varsa bu sunucunun ve yaptığı değişikliklerin tespiti mümkün olabilir.

**9-)PATCH:** Bu metod bir kaynağa istediğiniz küçük çaplı değişimi yapmanızı sağlar.

**10-)SEARCH:** Bir dizinin altındaki kaynakları sorgulamak için kullanılır.
-------------------------------------------

# **Javascript Fetch Kullanımı**

![fetch](https://miro.medium.com/max/720/1*njAl81TCznOuPX3jJTqrAQ.jpeg)

Fetch API, tıpkı Ajax gibi veri alma, veri gönderme işlemlerinde kullanılan asenkron bir yapıdır. Fetch ile yapılan işlemler bize resolved, rejected şeklinde yani promise yapısı ile döndüğü için fetch kullanımını daha iyi anlayabilmek için promise yapısını bilmemiz gerekir.

Fetch API window içinde bulunan bir metottur. Bu yazıda text dosyasından, JSON ve Rest APIden nasıl veri alabileceğimizi göreceğiz.

![](https://miro.medium.com/max/640/1*cSkxCTAPMbaQJj5H613eKQ.jpeg)

fetch fonksiyonu ile nereden bilgi almak istediğimizi yazdık.(Fetch bize promise döndüğü için then ve catch kullanmamız gerektiğini hatırlayalım.)Oluşan promise içindeki veriyi response.text ile return ettik ve ekrana yazdırdık.example.txt içinde OGUZHAN yazdığını düşünürsek response.text OGUZHAN olarak ekrana basılır.

## JSON File Verisi Alma

![](https://miro.medium.com/max/640/1*SZTXRYJd5M3-dEZ6opxBgw.jpeg)
 
## REST APIden Veri Alma

Burada diğer iki örnekten farklı olarak example.txt veya example.json yerine kullanacağımız APInin endpointini yazıyoruz.

![](https://miro.medium.com/max/640/1*6ZyqKGXTNYeCeZ0sUBExBA.jpeg)

Genel olarak kullanımları bu şekilde, fetch fonksiyonuna veri almak istediğimiz yeri yazıyoruz ve promise döndüğü için then ile alıyoruz.

--------------------------------------------
 # **HTTP Durum Kodları (Status Codes) Nedir?** 

 Kullanıcılar bir web sitesini ziyaret etmek istediklerinde iki taraflı bir iletişim ortaya çıkar. Bu iletişimin bir tarafında tarayıcı bulunurken diğer tarafta sunucu yer alır. Bu iletişim kullanıcının bir web sayfasına giriş yapmak istemesiyle başlar. Bir web sayfasına giriş yapan kullanıcı aslında tarayıcı aracılığıyla ilgili web sayfasının yer aldığı sunucuya sayfayı görüntülemek için bir istek gönderir. Sunucu ise bu isteğe üç haneli bir durum kodu ile yanıt verir. Sunucunun tarayıcıya verdiği üç haneli cevaplar HTTP durum kodları ya da HTTP status codes olarak adlandırılır. İlgili durum kodları bazen bir hata olduğunu bildirirken bazen de sayfanın herhangi bir sorun olmadan açıldığını ifade edebilir. Bu nedenle HTTP durum kodlarının daima hata olarak değerlendirilmesi doğru değildir. 

# **HTTP Durum Kodu Sınıfları**

 *1xx:* Tarayıcı tarafından gönderilen isteğin sunucuya ulaştığını ve işlemin başladığını bildiren bilgilendirme kodlarını ifade eden durum kodlarıdır.

*2xx:* Tarayıcı tarafından gönderilen isteğin sunucuya ulaştığını, anlaşıldığını ve başarılı olduğunu ifade eden durum kodlarıdır.

*3xx:* Erişilmek istenen kaynağın başka bir kaynağa taşındığını ve bir yönlendirmenin söz konusu olduğunu ifade eden durum kodlarıdır.

*4xx:* İsteğin yerine getirilemediğini, ilgili web sayfasına ya da web sitesine ulaşılamadığını ifade eden durum kodlarıdır.

*5xx:* Tarayıcı tarafından gönderilen isteğin başarıyla sunucuya ulaştığını fakat sunucu tarafındaki sorunlar nedeniyle isteğin yerine getirilemediğini ifade eden durum kodlarıdır.

## **1xx Durum Kodları**
100: Tarayıcının sunucuya gönderdiği istek başlığının sunucu tarafından alındığını ve istek gövdesinin de alınmaya hazır olduğu anlamına gelir.

101: Tarayıcının sunucudan protokol değiştirmesini istediği ve sunucunun da bu isteği kabul ettiği anlamına gelir.

103: Son istek iletisinden önce bazı yanıt başlıklarını döndürdüğü anlamına gelir.

##  **2xx Durum Kodları**
200: Tarayıcı ve sunucu tarafında her şeyin yolunda olduğu anlamına gelen ideal durum kodudur.

201: Sunucu tarafından isteğin yerine getirildiği ve yeni bir kaynak oluşturulduğu anlamına gelir.

202: Sunucunun tarayıcıdan gelen isteği kabul ettiği ve işleme koyduğu anlamına gelir. İstek olumlu ya da olumsuz sonuçlanabilir.

203: Kaynak sunucudan 200 durum kodu alınmasına rağmen işlem sırasında kaynağın yanıtı değiştirdiği anlamına gelir.

204: Sunucunun isteği başarıyla işlediği fakat herhangi bir içerik döndürmeyeceğini ifade eder.

205: 204 durum kodu gibi isteğin başarıyla işlendiği fakat herhangi bir içeriğin döndürülmeyeceği anlamına gelir. Ancak tarayıcının belge görünümünü sıfırlaması gerekir.

206: Tarayıcının durdurulmuş indirmelere devam etmesini ve indirmeleri birden fazla akışa ayırmasını sağlayan durum kodudur.

##  **3xx Durum Kodları**
300: Tarayıcının isteğini yerine getirmek için sunucunun birden fazla olası kaynağa sahip olduğu ve bu kaynaklar arasında seçim yapması gerektiği anlamına gelir.

301: Bir web sayfası ya da bir kaynağın kalıcı olarak farklı bir kaynağa taşındığını ifade eden durum kodudur.

302: Bir web sayfası ya da bir kaynağın geçici olarak farklı bir kaynağa taşındığını ifade eden durum kodudur.

303: POST, PUT ya da DELETE aracılığıyla tarayıcının talep ettiği kaynağın bulunduğu anlamına gelir. GET kullanarak kaynağı almak için farklı bir URL’ye istekte bulunulması gerekir.

304: Tarayıcıya önbelleğinde depolanan kaynakların değişmediğini belirten durum kodudur.

307: Bir kaynağın geçici olarak farklı bir kaynağa taşındığını ifade eden durum kodudur. 302 durum kodundan farklı olarak HTTP yönetiminin değişmesine izin vermez.

308: Bir kaynağın kalıcı olarak farklı bir kaynağa taşındığını ifade eden durum kodudur. 301 durum kodundan farklı olarak HTTP yönetiminin değişmesine izin vermez.

##  **4xx Durum Kodları**
400: Sunucunun tarayıcıdaki hata nedeniyle isteği işleyemediği anlamına gelen durum kodudur.

401: Kullanıcının erişmek istediği kaynak için geçerli kimlik doğrulama bilgilerine sahip olmadığında döndürülen durum kodudur.

402: Ödeme gerektiği ve gelecekte kullanılmak üzere rezerve edildiği anlamına gelen durum kodudur.

403: İlgili kaynağa erişimin yasak olduğu durumlarda döndürülen durum kodudur.

404: İstenen kaynağın sunucuda bulunmadığını ifade eden durum kodudur. En sık görülen HTTP durum kodlarının başında gelmektedir.

405: İstenilen kaynak için gerçekleştirilen istek yöntemi desteklenmediğinde döndürülen durum kodudur.

406: İstemcinin Accept Header bölümünde verilen özelliklerin karşılanmadığını ifade eden durum kodudur. 

407: Bir proxy sunucu ile kimlik doğrulaması ve yetkilendirme gereken durumlarda döndürülen durum kodudur.

408: Sunucunun isteği beklerken zaman aşımına uğraması durumunda karşılaşılan durum kodudur.

409: Bir uyuşmazlık ya da çakışma olması nedeniyle isteğin tamamlanamadığı anlamına gelen durum kodudur.

410: İstenen kaynağın kalıcı olarak o sunucuda bulunmadığı anlamına gelen durum kodudur.

411: İstenen kaynak için belirli bir uzunluk belirtilmediği anlamına gelen durum kodudur.

412: İstekte bulunan ön koşulların sunucu tarafından karşılanamadığı anlamına gelen durum kodudur.

413: Yapılan isteğin boyutunun çok büyük olması nedeniyle işlenemediği ve sunucunun isteği kabul edemediği anlamına gelir.

414: Sunucunun işleyemeyeceği kadar büyük bir sorgu dizesi olarak kodlanmış GET isteği olduğu durumlarda karşılaşılan durum kodudur.

415: Gelen isteğin sunucu tarafından desteklenmeyen bir ortam türü içerdiği anlamına gelen durum kodudur.

416: Dosyanın istenilen bir bölümünü sunucunun sağlayamaması durumunda karşılaşılan durum kodudur.

417: Sunucunun isteğin bekleme başlığı alanındaki gereksinimleri karşılayamaması durumunda karşılaşılan durum kodudur. 

422: Anlamsal hata içeren istekleri sunucunun işleyemediği anlamına gelen durum kodudur.

425: Sunucunun yeniden oynatılabilecek istekleri işleme riskini almadığı durumlarda ortaya çıkan durum kodudur.

426: İsteğin yükseltme başlığı alanındaki içerikten dolayı farklı bir protokole geçilmesi gereken durumlarda karşılaşılan durum kodudur.

428: Sunucu isteği işlemeden önce koşulların belirlenmesi gerektiği anlamına gelen durum kodudur.

429: Kullanıcı belirli  bir süre içerisinde çok fazla istek gönderdiğinde sunucu tarafından hız sınırlayıcı oluşturulduğu anlamına gelen durum kodudur.

431: Üst bilgi alanlarının büyük olması nedeniyle sunucunun isteği işleyememesi anlamında gelen durum kodudur.

##  **5xx Durum Kodları**
500: Sunucudaki sorun nedeniyle isteğin tamamlanamadığı durumlarda görülen durum kodudur.

501: Sunucunun isteği yönetemediği ya da işlevleri destekleyemediği anlamında gelen durum kodudur.

502: Sunucunun başka bir sunucuya istek gönderdikten sonra geçersiz yanıt aldığı anlamına gelen durum kodudur.

503: Sunucunun geçici olarak hizmet veremediği ve istekleri işleyemediği durumlarda görülen durum kodudur.

504: Bir isteği işlerken bir sunucunun diğer sunucudan yanıt beklerken isteğin zaman aşımına uğraması durumunda görülen durum kodudur.

505: HTTP protokol sürümünün desteklenemediği anlamında gelen durum kodudur.

511: Kullanılmak istenen ağın isteği sunucuya iletmeden önce kimlik doğrulaması yapması gerektiği durumlarda görülen durum kodudur.
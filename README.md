# Form Validator Projesi

Bu proje, modern web formları için kapsamlı bir doğrulama (validation) sistemi sunar. Bootstrap ve vanilla JavaScript kullanılarak geliştirilmiştir.

## Özellikler

- Kullanıcı adı doğrulama
- Email format kontrolü
- Şifre eşleştirme
- Telefon numarası doğrulama
- Boş alan kontrolü
- Minimum ve maksimum karakter sınırlaması
- Gerçek zamanlı geri bildirim
- Bootstrap ile görsel uyarılar

## Kullanılan Teknolojiler

- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap 5


## Kullanım

### Form Alanları

1. **Kullanıcı Adı**
   - En az 7, en fazla 15 karakter
   - Boş bırakılamaz
   - Örnek: "johndoe123"

2. **Email**
   - Geçerli email formatında olmalı
   - Boş bırakılamaz
   - Örnek: "ornek@email.com"

3. **Şifre**
   - En az 6, en fazla 12 karakter
   - Boş bırakılamaz
   - Özel karakter içerebilir
   - Örnek: "Pass123!"

4. **Şifre Tekrarı**
   - İlk girilen şifre ile birebir aynı olmalı
   - Boş bırakılamaz

5. **Telefon**
   - 10 haneli olmalı
   - Sadece rakam içermeli
   - Örnek: "5321234567"

### Hata Mesajları

Form validation sırasında şu hata mesajları görüntülenebilir:

- "Boş bırakılamaz"
- "Geçerli bir email adresi giriniz"
- "En az X karakter olmalıdır"
- "En fazla X karakter olmalıdır"
- "Parolalar eşleşmiyor"
- "Geçerli bir telefon numarası giriniz"

### Başarılı Doğrulama

- Form başarıyla doğrulandığında yeşil onay işareti görünür
- Hatalı girişlerde kırmızı uyarı işareti görünür
- Her alan gerçek zamanlı olarak kontrol edilir

### Örnek Kullanım

1. Formu açın
2. Tüm alanları kurallara uygun doldurun
3. "Gönder" butonuna tıklayın
4. Hata mesajlarını kontrol edin
5. Gerekirse düzeltmeler yapın
# Yaren Math Utils

7. Sınıf Matematik için Türkçe yardımcı fonksiyonlar kütüphanesi.

## Kurulum

```bash
npm install yaren-math-utils
```

## Kullanım

```javascript
const mathUtils = require('yaren-math-utils');

// Temel işlemler
console.log(mathUtils.topla(5, 3));        // 8
console.log(mathUtils.cikar(10, 4));       // 6
console.log(mathUtils.carp(3, 4));         // 12
console.log(mathUtils.bol(20, 4));         // 5

// Yüzde hesaplama
console.log(mathUtils.yuzdeHesapla(200, 25));  // 50 (200'ün %25'i)

// İstatistik
const sayilar = [5, 10, 15, 20, 25];
console.log(mathUtils.ortalama(sayilar));      // 15
console.log(mathUtils.medyan(sayilar));        // 15
console.log(mathUtils.mod([1, 2, 2, 3, 3, 3])); // 3

// Kesir işlemleri
const sonuc = mathUtils.kesirTopla(1, 2, 1, 3);
console.log(sonuc);  // { pay: 5, payda: 6 }

// Açı türü belirleme
console.log(mathUtils.aciTuru(45));   // "Dar açı"
console.log(mathUtils.aciTuru(90));   // "Dik açı"
console.log(mathUtils.aciTuru(120));  // "Geniş açı"

// Basit denklem çözme (ax + b = c)
// Örnek: 2x + 3 = 11 => x = 4
console.log(mathUtils.basitDenklemCoz(2, 3, 11));  // 4
```

## Fonksiyonlar

### Temel İşlemler
- `topla(a, b)` - İki sayıyı toplar
- `cikar(a, b)` - İki sayıyı çıkarır
- `carp(a, b)` - İki sayıyı çarpar
- `bol(a, b)` - İki sayıyı böler

### Yüzde ve Oran
- `yuzdeHesapla(sayi, yuzde)` - Bir sayının yüzdesini hesaplar

### İstatistik
- `ortalama(sayilar)` - Sayı dizisinin ortalamasını hesaplar
- `medyan(sayilar)` - Sayı dizisinin medyanını hesaplar
- `mod(sayilar)` - En çok tekrar eden sayıyı bulur

### Kesirler
- `kesirTopla(pay1, payda1, pay2, payda2)` - İki kesri toplar

### Geometri
- `aciTuru(derece)` - Açının türünü belirler

### Cebir
- `basitDenklemCoz(a, b, c)` - ax + b = c formatındaki denklemi çözer

## Lisans

ISC

## Yazar

Yaren

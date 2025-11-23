const mathUtils = require('./index.js');

console.log('🧪 Yaren Math Utils Test\n');

// Temel işlemler
console.log('✅ Temel İşlemler:');
console.log('topla(5, 3) =', mathUtils.topla(5, 3));
console.log('cikar(10, 4) =', mathUtils.cikar(10, 4));
console.log('carp(3, 4) =', mathUtils.carp(3, 4));
console.log('bol(20, 4) =', mathUtils.bol(20, 4));

// Yüzde
console.log('\n✅ Yüzde Hesaplama:');
console.log('200\'ün %25\'i =', mathUtils.yuzdeHesapla(200, 25));
console.log('100\'ün %50\'si =', mathUtils.yuzdeHesapla(100, 50));

// İstatistik
console.log('\n✅ İstatistik:');
const sayilar = [5, 10, 15, 20, 25];
console.log('Sayılar:', sayilar);
console.log('Ortalama =', mathUtils.ortalama(sayilar));
console.log('Medyan =', mathUtils.medyan(sayilar));
console.log('Mod [1,2,2,3,3,3] =', mathUtils.mod([1, 2, 2, 3, 3, 3]));

// Kesir
console.log('\n✅ Kesir İşlemleri:');
const kesirSonuc = mathUtils.kesirTopla(1, 2, 1, 3);
console.log('1/2 + 1/3 =', kesirSonuc.pay + '/' + kesirSonuc.payda);

// Açı
console.log('\n✅ Açı Türleri:');
console.log('45° =', mathUtils.aciTuru(45));
console.log('90° =', mathUtils.aciTuru(90));
console.log('120° =', mathUtils.aciTuru(120));

// Denklem
console.log('\n✅ Denklem Çözme:');
console.log('2x + 3 = 11 => x =', mathUtils.basitDenklemCoz(2, 3, 11));
console.log('5x - 2 = 18 => x =', mathUtils.basitDenklemCoz(5, -2, 18));

console.log('\n✅ Tüm testler başarılı!');

/**
 * Yaren Math Utils - 7. Sınıf Matematik için yardımcı fonksiyonlar
 */

/**
 * İki tam sayının toplamını hesaplar
 * @param {number} a - İlk sayı
 * @param {number} b - İkinci sayı
 * @returns {number} Toplam
 */
function topla(a, b) {
  return a + b;
}

/**
 * İki tam sayının farkını hesaplar
 * @param {number} a - İlk sayı
 * @param {number} b - İkinci sayı
 * @returns {number} Fark
 */
function cikar(a, b) {
  return a - b;
}

/**
 * İki sayının çarpımını hesaplar
 * @param {number} a - İlk sayı
 * @param {number} b - İkinci sayı
 * @returns {number} Çarpım
 */
function carp(a, b) {
  return a * b;
}

/**
 * İki sayının bölümünü hesaplar
 * @param {number} a - Bölünen
 * @param {number} b - Bölen
 * @returns {number} Bölüm
 */
function bol(a, b) {
  if (b === 0) {
    throw new Error('Bir sayı sıfıra bölünemez!');
  }
  return a / b;
}

/**
 * Bir sayının yüzdesini hesaplar
 * @param {number} sayi - Ana sayı
 * @param {number} yuzde - Yüzde değeri (örn: 25 için %25)
 * @returns {number} Yüzde değeri
 */
function yuzdeHesapla(sayi, yuzde) {
  return (sayi * yuzde) / 100;
}

/**
 * Sayı dizisinin ortalamasını hesaplar
 * @param {number[]} sayilar - Sayı dizisi
 * @returns {number} Ortalama
 */
function ortalama(sayilar) {
  if (sayilar.length === 0) {
    throw new Error('Dizi boş olamaz!');
  }
  const toplam = sayilar.reduce((acc, val) => acc + val, 0);
  return toplam / sayilar.length;
}

/**
 * Sayı dizisinin medyanını hesaplar
 * @param {number[]} sayilar - Sayı dizisi
 * @returns {number} Medyan
 */
function medyan(sayilar) {
  if (sayilar.length === 0) {
    throw new Error('Dizi boş olamaz!');
  }
  const sirali = [...sayilar].sort((a, b) => a - b);
  const orta = Math.floor(sirali.length / 2);
  
  if (sirali.length % 2 === 0) {
    return (sirali[orta - 1] + sirali[orta]) / 2;
  }
  return sirali[orta];
}

/**
 * Sayı dizisinin modunu (en çok tekrar eden) bulur
 * @param {number[]} sayilar - Sayı dizisi
 * @returns {number} Mod
 */
function mod(sayilar) {
  if (sayilar.length === 0) {
    throw new Error('Dizi boş olamaz!');
  }
  const frekans = {};
  sayilar.forEach(sayi => {
    frekans[sayi] = (frekans[sayi] || 0) + 1;
  });
  
  let maxFrekans = 0;
  let modDegeri = sayilar[0];
  
  for (const [sayi, frekansValue] of Object.entries(frekans)) {
    if (frekansValue > maxFrekans) {
      maxFrekans = frekansValue;
      modDegeri = Number(sayi);
    }
  }
  
  return modDegeri;
}

/**
 * İki kesrin toplamını hesaplar
 * @param {number} pay1 - İlk kesrin payı
 * @param {number} payda1 - İlk kesrin paydası
 * @param {number} pay2 - İkinci kesrin payı
 * @param {number} payda2 - İkinci kesrin paydası
 * @returns {object} Sonuç kesir {pay, payda}
 */
function kesirTopla(pay1, payda1, pay2, payda2) {
  const sonucPay = (pay1 * payda2) + (pay2 * payda1);
  const sonucPayda = payda1 * payda2;
  return { pay: sonucPay, payda: sonucPayda };
}

/**
 * Bir açının türünü belirler
 * @param {number} derece - Açı değeri (derece cinsinden)
 * @returns {string} Açı türü
 */
function aciTuru(derece) {
  if (derece === 0) return 'Sıfır açı';
  if (derece > 0 && derece < 90) return 'Dar açı';
  if (derece === 90) return 'Dik açı';
  if (derece > 90 && derece < 180) return 'Geniş açı';
  if (derece === 180) return 'Doğru açı';
  if (derece > 180 && derece < 360) return 'Tam açıdan büyük';
  if (derece === 360) return 'Tam açı';
  return 'Geçersiz açı';
}

/**
 * Basit denklemi çözer (ax + b = c formatında)
 * @param {number} a - x'in katsayısı
 * @param {number} b - Sabit terim
 * @param {number} c - Eşitliğin sağ tarafı
 * @returns {number} x değeri
 */
function basitDenklemCoz(a, b, c) {
  if (a === 0) {
    throw new Error('a değeri sıfır olamaz!');
  }
  return (c - b) / a;
}

module.exports = {
  topla,
  cikar,
  carp,
  bol,
  yuzdeHesapla,
  ortalama,
  medyan,
  mod,
  kesirTopla,
  aciTuru,
  basitDenklemCoz
};

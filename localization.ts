/*

  localization.ts
  This is where the localizations go. If you wish to add some translations in your language, please contact me via these methods:
  - E-mail: paytousebloxy1774@gmail.com or louiesoulenkurenai@gmail.com
  - Discord: @paytouse

  Instructions in Translating:
  - There is no need to translate Commodity, just leave it be.
  - The term "Legacy" could be voluntary, meaning that it's your choice whether to translate it or not.

*/

export function getLocalizedText(key: string, language: string): string {
  const LOCALIZED_STRINGS: Record<string, Record<string, string>> = {
    "ribbonTooltip": {
      "en": "Commodity: Calculate Vault Value",
      "ja": "Commodity：ボールトの価値を計算",
      "id": "Commodity: Kalkulasikan Nilai Berangkas",
      "tl": "Commodity: Kalkulahin ang Halaga ng Vault",
      "vi": "Commodity: Tính giá trị của ví"
    },
    "modalTitle": {
      "en": "Calculated Vault Value:",
      "ja": "計算されたボールトの価値:",
      "id": "Nilai Kalkulasi Berangkas:",
      "tl": "Kalkuladong Halaga ng Vault:",
      "vi": "Giá trị của ví đã tính được:"
    },
    "calculatingNotice": {
      "en": "Commodity (Legacy): Calculating the vault value...",
      "ja": "Commodity（レガシー）：ボールトの価値を計算中...",
      "id": "Commodity (Warisan): Menghitung nilai vault...",
      "tl": "Commodity (Legacy): Kinakalkula ang Halaga ng Vault...",
      "vi": "Commodity (cũ): Đang tính giá trị của ví..."
    },
    "calculatedTime": {
      "en": "Total CPU Time:",
      "ja": "合計CPU時間:",
      "id": "Total Waktu CPU:",
      "tl": "Kabuuang Oras ng CPU:",
      "vi": "Tổng thời gian CPU:"
    },
    "currencySetting": {
      "en": "Currency Preference",
      "ja": "通貨の設定",
      "id": "Preferensi Mata Uang",
      "tl": "Kagustuhan sa Pera",
      "vi": "Đơn vị tiền ảo"
    },
    "currencyDescription": {
      "en": "Select the preferred currency that can be used for the value calculation",
      "ja": "価値計算に使用する優先通貨を選択してください",
      "id": "Pilih preferensi mata uang yang bisa digunakan untuk perhitungan",
      "tl": "Pumili ng gustong pera na pwedeng magamit sa pagkalkula ng halaga",
      "vi": "Chọn loại đơn vị tiền ảo có thể dùng để tính giá trị của ví"
    },
    "languageSetting": {
      "en": "Language Preference",
      "ja": "言語の設定",
      "id": "Preferensi Bahasa",
      "tl": "Kagustuhan sa Wika",
      "vi": "Ngôn ngữ"
    },
    "languageDescription": {
      "en": "Select the preferred language for the plugin interface",
      "ja": "プラグインのインターフェースに使用する優先言語を選択してください",
      "id": "Pilih preferensi bahasa untuk antarmuka plugin",
      "tl": "Pumili ng gustong wika para sa interface ng plugin",
      "vi": "Chọn ngôn ngữ làm ngôn ngữ chính cho giao diện của plugin"
    }
  };

  return LOCALIZED_STRINGS[key]?.[language] || LOCALIZED_STRINGS[key]?.["en"] || key;
}

/*

  localization.ts
  This is where the localizations go. If you wish to add some translations in your language, please contact me via these methods:
  - E-mail: paytousebloxy1774@gmail.com or louiesoulenkurenai@gmail.com
  - Discord: @paytouse

*/

export function getLocalizedText(key: string, language: string): string {
  const LOCALIZED_STRINGS: Record<string, Record<string, string>> = {
    "ribbonTooltip": {
      "en": "Commodity: Calculate Vault Value",
      "ja": "Commodity：ボールトの価値を計算",
      "id": "Commodity: Kalkulasikan Nilai Berangkas",
    },
    "modalTitle": {
      "en": "Calculated Vault Value:",
      "ja": "計算されたボールトの価値:",
      "id": "Nilai Kalkulasi Berangkas:",
    },
    "calculatingNotice": {
      "en": "Commodity (Legacy): Calculating the vault value...",
      "ja": "Commodity（レガシー）：ボールトの価値を計算中...",
      "id": "Commodity (Warisan): Menghitung nilai vault...",
    },
    "calculatedTime": {
      "en": "Total CPU Time:",
      "ja": "合計CPU時間:",
      "id": "Total Waktu CPU:",
    },
    "currencySetting": {
      "en": "Currency Preference",
      "ja": "通貨の設定",
      "id": "Preferensi Mata Uang"
    },
    "currencyDescription": {
      "en": "Select the preferred currency that can be used for the value calculation",
      "ja": "価値計算に使用する優先通貨を選択してください",
      "id": "Pilih preferensi mata uang yang bisa digunakan untuk perhitungan"
    },
    "languageSetting": {
      "en": "Language Preference",
      "ja": "言語の設定",
      "id": "Preferensi Bahasa"
    },
    "languageDescription": {
      "en": "Select the preferred language for the plugin interface",
      "ja": "プラグインのインターフェースに使用する優先言語を選択してください",
      "id": "Pilih preferensi bahasa untuk plugin antarmuka"
    }
  };

  return LOCALIZED_STRINGS[key]?.[language] || LOCALIZED_STRINGS[key]?.["en"] || key;
}

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
      "id": "Commodity: Kalkulasikan Nilai Vault",
    },
    "modalTitle": {
      "en": "Calculated Vault Value:",
      "ja": "計算されたボールトの価値:",
      "id": "Nilai Kalkulasi Vault:",
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
    }
  };

  return LOCALIZED_STRINGS] || localizedStrings[key]?.["en"] || key;
}

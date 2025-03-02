/*

  options.ts
  This is a part of the main.ts file, but this adds the plugin options.
  If you're willing to add more currencies, please add some options to the dropdown.
  Once done, edit the main.ts file and add the symbol of the added currency.

*/

import { App, PluginSettingTab, Setting } from "obsidian";

export interface CommoditySettings {
  currency: string;
}

export const DEFAULT_SETTINGS: CommoditySettings = {
  currency: "USD",
};

export const CURRENCY_MULTIPLIERS: Record < string, number > = {
  "USD": 1,
  "JPY": 150,
  "PHP": 50,
  "IDR": 15000,
  "EUR": 0.9,
  "GBP": 0.8,
  "KRW": 1400,
  "CNY": 7,
  "AUD": 1.5,
  "HKD": 7.8,
  "CAD": 1.35,
  "MYR": 4.7,
  "UAH": 38
};

export class CommoditySettingsTab extends PluginSettingTab {
  plugin: any;
  
  constructor(app: App, plugin: any) {
    super(app, plugin);
    this.plugin = plugin;
  }
  
  display(): void {
    const { containerEl } = this;
    
    containerEl.empty();
    containerEl.createEl("h2", { text: "Commodity Plugin Settings" });
    
    new Setting(containerEl)
      .setName("Currency Preference")
      .setDesc("Select the preferred currency that can be used for the value calculation")
      .addDropdown(dropdown => {
        dropdown.addOptions({
          "USD": "USD - US Dollar",
          "JPY": "JPY - Japanese Yen",
          "PHP": "PHP - Philippine Peso",
          "IDR": "IDR - Indonesian Rupiah",
          "EUR": "EUR - Euro",
          "GBP": "GBP - British Pound",
          "KRW": "KRW - South Korean Won",
          "CNY": "CNY - Chinese Yuan",
          "AUD": "AUD - Australian Dollar",
          "HKD": "HKD - Hong Kong Dollar",
          "CAD": "CAD - Canadian Dollar",
          "MYR": "MYR - Malaysian Ringgit",
          "UAH": "UAH - Ukrainian Hryvnia"
        });
        
        dropdown.setValue(this.plugin.settings.currency);
        dropdown.onChange(async (value) => {
          this.plugin.settings.currency = value;
          await this.plugin.saveSettings();
        });
      });
  }
}

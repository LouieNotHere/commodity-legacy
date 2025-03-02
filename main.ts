/*

  main.ts file (used as the main file for Commodity (Legacy))
  For additional context: Commodity is a term related to Obsidian (can be the material itself or the app) and finances.
  I know it took me a long time to fix some things before publishing it as an obsidian community plugin.
  I deeply apologize for that, I am just trying to add some new things to the source code.

  This is only for the legacy version. It can differ from the non-legacy version.

*/

import { CommoditySettingsTab, DEFAULT_SETTINGS, CURRENCY_MULTIPLIERS, CommoditySettings } from "./options";
import { getLocalizedText } from "./localization";
import { App, Plugin, Modal, Vault, Notice, TFile } from "obsidian";
import { abbreviateNumber } from "./abbrNum";

export default class CommodityPlugin extends Plugin {
  settings: CommoditySettings;

  async onload() {
    console.log("Commodity Plugin (Legacy) Loaded");

    await this.loadSettings();

    this.addSettingTab(new CommoditySettingsTab(this.app, this));

    console.log(`Current currency: ${this.settings.currency}`);
    console.log(`Selected Language: ${this.settings.language}`);

    this.addRibbonIcon(
      "lucide-calculator",
      getLocalizedText("ribbonTooltip", this.settings.language),
      async () => {
        const vaultStats = await calculateVaultStats(this.app.vault);
        const vaultValue = await calculateVaultValue(vaultStats, this.settings.currency, this.app.vault);
        new VaultValueModal(this.app, vaultValue, this.settings.currency, this.settings.language).open();
      }
    );
  }

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }
}

class VaultValueModal extends Modal {
  private vaultValue: number;
  private currency: string;
  private language: string;

  constructor(app: App, vaultValue: number, currency: string, language: string) {
    super(app);
    this.vaultValue = vaultValue;
    this.currency = currency;
    this.language = language;
  }

  onOpen() {
    new Notice(getLocalizedText("calculatingNotice", this.language));

    const { contentEl } = this;
    contentEl.empty();
    contentEl.style.textAlign = "center";
    contentEl.style.fontFamily = "var(--default-font)";

    const startTime = performance.now();

    contentEl.createEl("h4", {
      text: getLocalizedText("modalTitle", this.language),
      cls: "window-header",
    });

    const currencySymbol = getCurrencySymbol(this.currency);
    const endTime = performance.now();
    const timeTaken = (endTime - startTime).toFixed(2);

    const formatter = new Intl.NumberFormat(this.language, { minimumFractionDigits: 0, maximumFractionDigits: 0 });

    const fullValue = Number(this.vaultValue.toFixed(25));
    const truncatedValue = Math.trunc(fullValue);
    var formattedValue: string = formatter.format(truncatedValue);

    var valueText: string = `${currencySymbol}${this.vaultValue.toFixed(2)}`;

    if (this.vaultValue >= 1000000) {
      valueText = `${currencySymbol}${abbreviateNumber(truncatedValue)}`;
    } else if (this.vaultValue >= 1000) {
      valueText = `${currencySymbol}${formattedValue}`;
    }

    contentEl.createEl("h1", { text: valueText, cls: "window-value" });
    contentEl.createEl("p", {
      text: `${getLocalizedText("calculatedTime", this.language)} ${timeTaken} ms`,
      cls: "window-time",
    });
  }

  onClose() {
    this.contentEl.empty();
  }
}

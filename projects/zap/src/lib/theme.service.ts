import { Inject, Injectable, Optional, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

import { NGX_ZAP_CONFIG } from './tokens/zap.tokens';
import {
  AlertConfig,
  ButtonConfig,
  ChipConfig,
  DatePickerConfig,
  DialogConfig,
  DPCalendarConfig,
  DPCalendarSelectConfig,
  GlobalConfig,
  InputConfig,
  ModalConfig,
  SelectConfig,
  TextareaConfig,
  TooltipConfig,
  ZapConfig,
  ZapTheme,
} from './interfaces';
import {
  lightTheme,
  defaultConfig,
  darkTheme,
} from './constants/default-config.constants';
import { generateComponentButtonVariables } from './theme/components/button-theme';
import { deepEqual } from './theme/utils/base-theme-utils';
import { generateColorVariables } from './theme/utils/color-utils';
import { generateComponentGlobalVariables } from './theme/components/global-theme';
import { generateFontSizeVariables } from './theme/utils/font-utils';
import { generateGlobalStylesVariables } from './theme/services/global-styles';
import { generateComponentStylesVariables } from './theme/services/component-styles';
import { generateComponentAlertVariables } from './theme/components/alert-theme';
import { generateComponentChipVariables } from './theme/components/chip-theme';
import { generateComponentDialogVariables } from './theme/components/dialog-theme';
import { generateComponentModalVariables } from './theme/components/modal-theme';
import { generateComponentInputVariables } from './theme/components/input-theme';
import { generateComponentCheckboxVariables } from './theme/components/checkbox-theme';
import { generateComponentTextareaVariables } from './theme/components/textarea-theme';
import { generateComponentSelectVariables } from './theme/components/select-theme';
import { generateComponentTooltipVariables } from './theme/components/tooltip-theme';
import { generateComponentDPVariables } from './theme/components/date-picker-theme';
import { generateComponentDPCalendarVariables } from './theme/components/dp-calendar-theme';
import { generateComponentDPCalendarSelectVariables } from './theme/components/dp-calendar-select-theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isBrowser: boolean;
  private activeTheme!: string;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: object,
    @Optional() @Inject(NGX_ZAP_CONFIG) private config: ZapConfig
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      this.applyTheme();
    }
  }

  applyTheme(customTheme?: 'light' | 'dark' | string): void {
    const root = this.document.documentElement;
    const config = this.config || defaultConfig;
    if (
      this.activeTheme !== undefined &&
      (this.activeTheme === customTheme ||
        (this.activeTheme === config.theme && !customTheme))
    ) {
      return;
    }

    this.activeTheme = config.theme || 'dark';

    if (customTheme && typeof customTheme === 'object') {
      if (
        typeof customTheme === 'object' &&
        deepEqual(
          customTheme,
          this.config.theme as unknown as Record<string, unknown>
        )
      ) {
        return;
      }
    } else if (customTheme && customTheme === this.config.theme) {
      return;
    } else if (customTheme) {
      this.config.theme = customTheme;
      this.activeTheme = customTheme;
    }

    const theme = this.getTheme(config.theme || 'dark');
    this.removeExistingStyleElement();
    const styleElement = this.createStyleElement();
    this.document.head.appendChild(styleElement);

    const cssVariables = this.generateCssVariables(theme, config, root);
    styleElement.innerHTML = `:root {\n${cssVariables}}`;
  }

  private getTheme(theme: string): ZapTheme {
    if (theme === 'light') {
      return lightTheme;
    } else if (theme === 'dark') {
      return darkTheme;
    } else if (this.config.themeLibrary) {
      return this.config.themeLibrary[theme];
    } else {
      return darkTheme;
    }
  }

  private removeExistingStyleElement(): void {
    const existingStyleElement =
      this.document.getElementById('zap-theme-styles');
    if (existingStyleElement) {
      existingStyleElement.remove();
    }
  }

  private createStyleElement(): HTMLStyleElement {
    const styleElement = this.document.createElement('style');
    styleElement.setAttribute('id', 'zap-theme-styles');
    return styleElement;
  }

  private generateCssVariables(
    theme: ZapTheme,
    config: ZapConfig,
    root: HTMLElement
  ): string {
    let cssVariables = '';
    cssVariables += generateColorVariables(theme, root);
    cssVariables += generateFontSizeVariables(theme);
    cssVariables += generateGlobalStylesVariables(theme);

    if (config.components) {
      for (const [componentKey, value] of Object.entries(config.components)) {
        switch (componentKey) {
          case 'global':
            cssVariables += generateComponentGlobalVariables(
              value as GlobalConfig
            );
            break;
          case 'alert':
            cssVariables += generateComponentAlertVariables(
              value as AlertConfig
            );
            break;
          case 'button':
            cssVariables += generateComponentButtonVariables(
              value as ButtonConfig,
              root
            );
            break;
          case 'chip':
            cssVariables += generateComponentChipVariables(
              value as ChipConfig,
              root
            );
            break;
          case 'dialog':
            cssVariables += generateComponentDialogVariables(
              value as DialogConfig
            );
            break;
          case 'modal':
            cssVariables += generateComponentModalVariables(
              value as ModalConfig
            );
            break;
          case 'input':
            cssVariables += generateComponentInputVariables(
              value as InputConfig
            );
            break;
          case 'checkbox':
            cssVariables += generateComponentCheckboxVariables(
              value as InputConfig
            );
            break;
          case 'textarea':
            cssVariables += generateComponentTextareaVariables(
              value as TextareaConfig
            );
            break;
          case 'select':
            cssVariables += generateComponentSelectVariables(
              value as SelectConfig
            );
            break;
          case 'tooltip':
            cssVariables += generateComponentTooltipVariables(
              value as TooltipConfig
            );
            break;
          case 'date-picker':
            cssVariables += generateComponentDPVariables(
              value as DatePickerConfig
            );
            break;
          case 'dp-calendar':
            cssVariables += generateComponentDPCalendarVariables(
              value as DPCalendarConfig
            );
            break;
          case 'dp-calendar-select':
            cssVariables += generateComponentDPCalendarSelectVariables(
              value as DPCalendarSelectConfig
            );
            break;
          default:
            break;
        }

        if (value.styles) {
          cssVariables += generateComponentStylesVariables(
            value.styles,
            componentKey,
            this.config
          );
        }
      }
    }

    return cssVariables;
  }
}

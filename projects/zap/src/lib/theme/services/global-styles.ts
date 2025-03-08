import { getDefaultAlertSizeCssValues } from '../components/alert-theme';
import { getDefaultBadgeSizeCssValues } from '../components/badge-theme';
import { getDefaultButtonSizeCssValues } from '../components/button-theme';
import { getDefaultChipSizeCssValues } from '../components/chip-theme';
import { getDefaultDialogSizeCssValues } from '../components/dialog-theme';
import { getDefaultModalSizeCssValues } from '../components/modal-theme';
import { getDefaultInputSizeCssValues } from '../components/input-theme';
import { getDefaultCheckboxSizeCssValues } from '../components/checkbox-theme';
import { getDefaultRadioSizeCssValues } from '../components/radio-theme';
import { getDefaultTextareaSizeCssValues } from '../components/textarea-theme';
import { getDefaultToggleSizeCssValues } from '../components/toggle-theme';
import { getDefaultAccordionSizeCssValues } from '../components/accordion-theme';
import { getDefaultSelectSizeCssValues } from '../components/select-theme';
import { getDefaultTooltipSizeCssValues } from '../components/tooltip-theme';
import { ZapTheme } from '../../interfaces/config.interface';
import { hexToRgba } from '../utils/base-theme-utils';
import { getDefaultDatePickerSizeCssValues } from '../components/date-picker-theme';
import { getDefaultDPCalendarSelectSizeCssValues } from '../components/dp-calendar-select-theme';

/**
 * This function generates the global styles for the all the components
 * @param theme
 * @param root
 * @returns
 */
export function generateGlobalStylesVariables(theme: ZapTheme): string {
  let cssVariables = '';
  const styles = {
    alert: [
      {
        label: 'bg-color',
        value: theme.colors.tertiary,
      },
      {
        label: 'text-color',
        value: theme.colors.primary,
      },
      {
        label: 'border-color',
        value: theme.colors.tertiary,
      },
      {
        label: 'dismiss-color',
        value: theme.colors.primary,
      },
      {
        label: 'dismiss-hover-color',
        value: hexToRgba(theme.colors.primary, 0.7),
      },
    ],
    badge: [
      {
        label: 'bg-color',
        value: theme.colors.tertiary,
      },
      {
        label: 'text-color',
        value: theme.colors.primary,
      },
      {
        label: 'border-color',
        value: theme.colors.tertiary,
      },
      {
        label: 'border-radius',
        value: 'calc(infinity * 1px)',
      },
    ],
    button: [
      {
        label: 'bg-color',
        value: theme.colors.tertiary,
      },
      {
        label: 'text-color',
        value: theme.colors.primary,
      },
      {
        label: 'border-color',
        value: theme.colors.tertiary,
      },
      {
        label: 'bg-hover-color',
        value: hexToRgba(theme.colors.tertiary, 0.9),
      },
      {
        label: 'text-hover-color',
        value: hexToRgba(theme.colors.primary, 0.9),
      },
      {
        label: 'border-hover-color',
        value: hexToRgba(theme.colors.tertiary, 0),
      },
      {
        label: 'bg-active-color',
        value: theme.colors.tertiary,
      },
      {
        label: 'text-active-color',
        value: theme.colors.primary,
      },
      {
        label: 'border-active-color',
        value: 'transparent',
      },
      {
        label: 'disabled-bg-color',
        value: hexToRgba(theme.colors.tertiary, 0.5),
      },
      {
        label: 'disabled-text-color',
        value: hexToRgba(theme.colors.secondary, 0.5),
      },
      {
        label: 'disabled-border-color',
        value: hexToRgba(theme.colors.tertiary, 0),
      },
    ],
    chip: [
      {
        label: 'bg-color',
        value: theme.colors.tertiary,
      },
      {
        label: 'text-color',
        value: theme.colors.primary,
      },
      {
        label: 'border-color',
        value: theme.colors.tertiary,
      },
      {
        label: 'bg-hover-color',
        value: theme.colors.tertiary,
      },
      {
        label: 'text-hover-color',
        value: theme.colors.primary,
      },
      {
        label: 'border-hover-color',
        value: theme.colors.tertiary,
      },
      {
        label: 'dismiss-color',
        value: theme.colors.primary,
      },
      {
        label: 'dismiss-hover-color',
        value: hexToRgba(theme.colors.primary, 0.7),
      },
    ],
    dialog: [
      {
        label: 'bg-color',
        value: theme.colors.primary,
      },
      {
        label: 'border-color',
        value: hexToRgba(theme.colors.secondary, 0.1),
      },
      {
        label: 'text-color',
        value: theme.colors.secondary,
      },
      {
        label: 'title-color',
        value: theme.colors.secondary,
      },
      {
        label: 'dismiss-color',
        value: theme.colors.secondary,
      },
      {
        label: 'dismiss-hover-color',
        value: hexToRgba(theme.colors.secondary, 0.7),
      },
      {
        label: 'primary-btn-bg-color',
        value: theme.colors.error,
      },
      {
        label: 'primary-btn-border-color',
        value: theme.colors.error,
      },
      {
        label: 'primary-btn-text-color',
        value: theme.colors.errorText,
      },
      {
        label: 'primary-btn-bg-hover-color',
        value: hexToRgba(theme.colors.error, 0.9),
      },
      {
        label: 'primary-btn-border-hover-color',
        value: hexToRgba(theme.colors.error, 0.9),
      },
      {
        label: 'primary-btn-text-hover-color',
        value: hexToRgba(theme.colors.errorText, 0.9),
      },
      {
        label: 'secondary-btn-bg-color',
        value: 'transparent',
      },
      {
        label: 'secondary-btn-border-color',
        value: hexToRgba(theme.colors.secondary, 0.15),
      },
      {
        label: 'secondary-btn-text-color',
        value: theme.colors.secondary,
      },
      {
        label: 'secondary-btn-bg-hover-color',
        value: 'transparent',
      },
      {
        label: 'secondary-btn-border-hover-color',
        value: hexToRgba(theme.colors.secondary, 0.2),
      },
      {
        label: 'secondary-btn-text-hover-color',
        value: hexToRgba(theme.colors.secondary, 0.8),
      },
      {
        label: 'overlay-bg-color',
        value: hexToRgba(theme.colors.secondary, 0.1),
      }
    ],
    modal: [
      {
        label: 'bg-color',
        value: theme.colors.primary,
      },
      {
        label: 'border-color',
        value: hexToRgba(theme.colors.secondary, 0.1),
      },
      {
        label: 'text-color',
        value: theme.colors.secondary,
      },
      {
        label: 'dismiss-color',
        value: theme.colors.secondary,
      },
      {
        label: 'dismiss-hover-color',
        value: hexToRgba(theme.colors.secondary, 0.7),
      },
      {
        label: 'overlay-bg-color',
        value: hexToRgba(theme.colors.secondary, 0.1),
      }
    ],
    input: [
      {
        label: 'bg-color',
        value: 'transparent',
      },
      {
        label: 'border-color',
        value: hexToRgba(theme.colors.secondary, 0.1),
      },
      {
        label: 'label-color',
        value: theme.colors.secondary,
      },
      {
        label: 'border-hover-color',
        value: hexToRgba(theme.colors.secondary, 0.1),
      },
      {
        label: 'text-color',
        value: theme.colors.secondary,
      },
      {
        label: 'placeholder-color',
        value: hexToRgba(theme.colors.secondary, 1),
      },
      {
        label: 'border-focus-color',
        value: theme.colors.tertiary,
      },
      {
        label: 'ring-focus-color',
        value: theme.colors.tertiary,
      },
      {
        label: 'icon-color',
        value: hexToRgba(theme.colors.secondary, 1),
      },
      {
        label: 'help-text-color',
        value: hexToRgba(theme.colors.secondary, 0.5),
      },
    ],
    checkbox: [
      {
        label: 'bg-color',
        value: 'transparent',
      },
      {
        label: 'border-color',
        value: theme.colors.secondary,
      },
      {
        label: 'label-color',
        value: theme.colors.secondary,
      },
      {
        label: 'text-color',
        value: theme.colors.secondary,
      },
      {
        label: 'bg-checked-color',
        value: theme.colors.tertiary,
      },
      {
        label: 'text-checked-color',
        value: theme.colors.primary,
      },
      {
        label: 'border-checked-color',
        value: theme.colors.tertiary,
      },
      {
        label: 'bg-focus-color',
        value: theme.colors.tertiary,
      },
      {
        label: 'text-focus-color',
        value: theme.colors.primary,
      },
      {
        label: 'border-focus-color',
        value: theme.colors.tertiary,
      },
    ],
    radio: [
      {
        label: 'bg-color',
        value: 'transparent',
      },
      {
        label: 'border-color',
        value: theme.colors.secondary,
      },
      {
        label: 'text-color',
        value: theme.colors.secondary,
      },
      {
        label: 'label-color',
        value: theme.colors.secondary,
      },
      {
        label: 'bg-checked-color',
        value: 'transparent',
      },
      {
        label: 'checked-color',
        value: theme.colors.tertiary,
      },
      {
        label: 'border-checked-color',
        value: theme.colors.tertiary,
      },
      {
        label: 'border-focus-color',
        value: theme.colors.tertiary,
      },
    ],
    textarea: [
      {
        label: 'bg-color',
        value: 'transparent',
      },
      {
        label: 'label-color',
        value: theme.colors.secondary,
      },
      {
        label: 'border-color',
        value: hexToRgba(theme.colors.secondary, 0.1),
      },
      {
        label: 'border-hover-color',
        value: hexToRgba(theme.colors.secondary, 0.1),
      },
      {
        label: 'text-color',
        value: theme.colors.secondary,
      },
      {
        label: 'placeholder-color',
        value: hexToRgba(theme.colors.secondary, 1),
      },
      {
        label: 'border-focus-color',
        value: theme.colors.tertiary,
      },
      {
        label: 'ring-focus-color',
        value: theme.colors.tertiary,
      },
      {
        label: 'help-text-color',
        value: hexToRgba(theme.colors.secondary, 0.5),
      },
    ],
    toggle: [
      {
        label: 'bg-color',
        value: hexToRgba(theme.colors.secondary, 0.1),
      },
      {
        label: 'border-color',
        value: hexToRgba(theme.colors.secondary, 0.1),
      },
      {
        label: 'roller-color',
        value: theme.colors.primary,
      },
      {
        label: 'bg-on-color',
        value: theme.colors.tertiary,
      },
      {
        label: 'border-on-color',
        value: theme.colors.tertiary,
      },
      {
        label: 'roller-on-color',
        value: theme.colors.primary,
      },
      {
        label: 'label-color',
        value: theme.colors.secondary,
      },
      {
        label: 'help-text-color',
        value: hexToRgba(theme.colors.secondary, 0.5),
      },
    ],
    accordion: [
      {
        label: 'item-border-color',
        value: hexToRgba(theme.colors.secondary, 0.1),
      },
      {
        label: 'header-text-color',
        value: theme.colors.secondary,
      },
      {
        label: 'header-text-hover-color',
        value: theme.colors.secondary,
      },
      {
        label: 'header-icon-color',
        value: hexToRgba(theme.colors.secondary, 0.5),
      },
      {
        label: 'content-text-color',
        value: theme.colors.secondary,
      },
    ],
    select: [
      {
        label: 'bg-color',
        value: 'transparent',
      },
      {
        label: 'label-color',
        value: theme.colors.secondary,
      },
      {
        label: 'text-color',
        value: theme.colors.secondary,
      },
      {
        label: 'text-hover-color',
        value: theme.colors.secondary,
      },
      {
        label: 'border-color',
        value: hexToRgba(theme.colors.secondary, 0.1),
      },
      {
        label: 'border-hover-color',
        value: hexToRgba(theme.colors.secondary, 0.1),
      },
      {
        label: 'placeholder-color',
        value: theme.colors.secondary,
      },
      {
        label: 'border-focus-color',
        value: theme.colors.tertiary,
      },
      {
        label: 'ring-focus-color',
        value: theme.colors.tertiary,
      },
      {
        label: 'icon-color',
        value: hexToRgba(theme.colors.secondary, 0.5),
      },
      {
        label: 'options-bg-color',
        value: theme.colors.primary,
      },
      {
        label: 'options-border-color',
        value: hexToRgba(theme.colors.secondary, 0.1),
      },
      {
        label: 'search-border-color',
        value: hexToRgba(theme.colors.secondary, 0.1),
      },
      {
        label: 'search-text-color',
        value: theme.colors.secondary,
      },
      {
        label: 'search-text-hover-color',
        value: theme.colors.secondary,
      },
      {
        label: 'search-border-hover-color',
        value: hexToRgba(theme.colors.secondary, 0.1),
      },
      {
        label: 'search-icon-color',
        value: hexToRgba(theme.colors.secondary, 0.5),
      },
      {
        label: 'search-placeholder-color',
        value: hexToRgba(theme.colors.secondary, 0.5),
      },
      {
        label: 'no-options-text-color',
        value: hexToRgba(theme.colors.secondary, 0.5),
      },
      {
        label: 'no-options-text-hover-color',
        value: hexToRgba(theme.colors.secondary, 0.5),
      },
      {
        label: 'no-options-border-color',
        value: 'transparent',
      },
      {
        label: 'no-options-border-hover-color',
        value: 'transparent',
      },
      {
        label: 'chip-bg-color',
        value: theme.colors.tertiary,
      },
      {
        label: 'chip-text-color',
        value: theme.colors.primary,
      },
      {
        label: 'chip-border-color',
        value: theme.colors.tertiary,
      },
      {
        label: 'chip-dismiss-color',
        value: theme.colors.primary,
      },
      {
        label: 'chip-dismiss-hover-color',
        value: hexToRgba(theme.colors.primary, 0.7),
      },
      {
        label: 'checkbox-bg-color',
        value: 'transparent',
      },
      {
        label: 'checkbox-border-color',
        value: theme.colors.secondary,
      },
      {
        label: 'checkbox-checked-bg-color',
        value: theme.colors.tertiary,
      },
      {
        label: 'checkbox-checked-border-color',
        value: theme.colors.tertiary,
      },
      {
        label: 'checkbox-checked-color',
        value: theme.colors.primary,
      },
      {
        label: 'option-bg-color',
        value: 'transparent',
      },
      {
        label: 'option-text-color',
        value: theme.colors.secondary,
      },
      {
        label: 'option-border-color',
        value: 'transparent',
      },
      {
        label: 'option-bg-hover-color',
        value: hexToRgba(theme.colors.secondary, 0.03),
      },
      {
        label: 'option-text-hover-color',
        value: theme.colors.secondary,
      },
      {
        label: 'option-border-hover-color',
        value: 'transparent',
      },
      {
        label: 'selected-border-color',
        value: 'transparent',
      },
      {
        label: 'selected-border-hover-color',
        value: 'transparent',
      },
      {
        label: 'selected-bg-hover-color',
        value: hexToRgba(theme.colors.secondary, 0.03),
      },
      {
        label: 'ring-focus-color',
        value: theme.colors.tertiary,
      },
      {
        label: 'search-ring-focus-color',
        value: theme.colors.tertiary,
      },
      {
        label: 'selected-text-color',
        value: theme.colors.secondary,
      },
      {
        label: 'selected-text-hover-color',
        value: theme.colors.secondary,
      },
      {
        label: 'search-bg-color',
        value: theme.colors.primary,
      },
      {
        label: 'icon-color',
        value: hexToRgba(theme.colors.secondary, 1),
      },
      {
        label: 'help-text-color',
        value: hexToRgba(theme.colors.secondary, 0.5),
      },
    ],
    tooltip: [
      {
        label: 'content-bg-color',
        value: theme.colors.primary,
      },
      {
        label: 'content-text-color',
        value: theme.colors.secondary,
      },
      {
        label: 'text-color',
        value: theme.colors.secondary,
      },
      {
        label: 'content-border-color',
        value: hexToRgba(theme.colors.secondary, 0.1),
      },
    ],
    'date-picker': [
      {
        label: 'bg-color',
        value: 'transparent',
      },
      {
        label: 'label-color',
        value: theme.colors.secondary,
      },
      {
        label: 'text-color',
        value: theme.colors.secondary,
      },
      {
        label: 'text-hover-color',
        value: theme.colors.secondary,
      },
      {
        label: 'border-color',
        value: hexToRgba(theme.colors.secondary, 0.1),
      },
      {
        label: 'border-hover-color',
        value: hexToRgba(theme.colors.secondary, 0.1),
      },
      {
        label: 'placeholder-color',
        value: theme.colors.secondary,
      },
      {
        label: 'border-focus-color',
        value: theme.colors.tertiary,
      },
      {
        label: 'ring-focus-color',
        value: theme.colors.tertiary,
      },
      {
        label: 'icon-color',
        value: hexToRgba(theme.colors.secondary, 1),
      },
      {
        label: 'help-text-color',
        value: hexToRgba(theme.colors.secondary, 0.5),
      },
      {
        label: 'disabled-border-color',
        value: hexToRgba(theme.colors.secondary, 0.1),
      },
      {
        label: 'disabled-bg-color',
        value: 'transparent',
      },
      {
        label: 'disabled-text-color',
        value: hexToRgba(theme.colors.secondary, 0.5),
      },
      {
        label: 'disabled-help-text-color',
        value: hexToRgba(theme.colors.secondary, 0.5),
      },
    ],
    'dp-calendar': [
      {
        label: 'bg-color',
        value: theme.colors.primary,
      },
      {
        label: 'border-color',
        value: hexToRgba(theme.colors.secondary, 0.1),
      },
      {
        label: 'title-text-color',
        value: theme.colors.secondary,
      },
      {
        label: 'handler-color',
        value: hexToRgba(theme.colors.secondary, 0.5),
      },
      {
        label: 'handler-bg-color',
        value: theme.colors.primary,
      },
      {
        label: 'handler-border-color',
        value: hexToRgba(theme.colors.secondary, 0.1),
      },
      {
        label: 'handler-bg-hover-color',
        value: hexToRgba(theme.colors.secondary, 0.05),
      },
      {
        label: 'handler-border-hover-color',
        value: hexToRgba(theme.colors.secondary, 0.1),
      },
      {
        label: 'day-text-color',
        value: hexToRgba(theme.colors.secondary, 0.5),
      },
      {
        label: 'day-of-week-text-color',
        value: hexToRgba(theme.colors.secondary, 0.5),
      },
      {
        label: 'day-of-week-text-hover-color',
        value: hexToRgba(theme.colors.secondary, 0.5),
      },
      {
        label: 'day-active-month-text-color',
        value: theme.colors.secondary,
      },
      {
        label: 'day-active-month-bg-color',
        value: 'transparent',
      },
      {
        label: 'day-active-month-border-color',
        value: 'transparent',
      },
      {
        label: 'day-bg-hover-color',
        value: hexToRgba(theme.colors.secondary, 0.03),
      },
      {
        label: 'day-active-month-bg-hover-color',
        value: hexToRgba(theme.colors.secondary, 0.05),
      },
      {
        label: 'day-border-color',
        value: 'transparent',
      },
      {
        label: 'day-border-hover-color',
        value: 'transparent',
      },
      {
        label: 'today-bg-color',
        value: hexToRgba(theme.colors.secondary, 0.1),
      },
      {
        label: 'today-border-color',
        value: 'transparent',
      },
      {
        label: 'today-bg-hover-color',
        value: hexToRgba(theme.colors.secondary, 0.1),
      },
      {
        label: 'today-border-hover-color',
        value: 'transparent',
      },
      {
        label: 'in-range-bg-color',
        value: hexToRgba(theme.colors.secondary, 0.05),
      },
      {
        label: 'in-range-active-month-bg-color',
        value: hexToRgba(theme.colors.secondary, 0.1),
      },
      {
        label: 'in-range-border-color',
        value: 'transparent',
      },
      {
        label: 'in-range-active-month-border-color',
        value: 'transparent',
      },
      {
        label: 'in-range-text-color',
        value: hexToRgba(theme.colors.secondary, 0.5),
      },
      {
        label: 'in-range-active-month-text-color',
        value: theme.colors.secondary,
      },
      {
        label: 'selected-active-month-bg-color',
        value: theme.colors.tertiary,
      },
      {
        label: 'selected-active-month-border-color',
        value: 'transparent',
      },
      {
        label: 'selected-active-month-text-color',
        value: theme.colors.primary,
      },
      {
        label: 'selected-active-month-bg-hover-color',
        value: theme.colors.tertiary,
      },
      {
        label: 'selected-active-month-border-hover-color',
        value: 'transparent',
      },
      {
        label: 'selected-active-month-text-hover-color',
        value: theme.colors.primary,
      },
      {
        label: 'selected-bg-color',
        value: hexToRgba(theme.colors.secondary, 0.05),
      },
      {
        label: 'selected-border-color',
        value: 'transparent',
      },
      {
        label: 'selected-text-color',
        value: hexToRgba(theme.colors.secondary, 0.5),
      },
      {
        label: 'selected-bg-hover-color',
        value: hexToRgba(theme.colors.secondary, 0.05),
      },
      {
        label: 'selected-border-hover-color',
        value: 'transparent',
      },
      {
        label: 'selected-text-hover-color',
        value: hexToRgba(theme.colors.secondary, 0.5),
      },
    ],
    'dp-calendar-select': [
      {
        label: 'bg-color',
        value: 'transparent',
      },
      {
        label: 'label-color',
        value: theme.colors.secondary,
      },
      {
        label: 'text-color',
        value: theme.colors.secondary,
      },
      {
        label: 'text-hover-color',
        value: theme.colors.secondary,
      },
      {
        label: 'border-color',
        value: hexToRgba(theme.colors.secondary, 0.1),
      },
      {
        label: 'border-hover-color',
        value: hexToRgba(theme.colors.secondary, 0.1),
      },
      {
        label: 'placeholder-color',
        value: theme.colors.secondary,
      },
      {
        label: 'border-focus-color',
        value: theme.colors.tertiary,
      },
      {
        label: 'ring-focus-color',
        value: theme.colors.tertiary,
      },
      {
        label: 'icon-color',
        value: hexToRgba(theme.colors.secondary, 0.5),
      },
      {
        label: 'options-bg-color',
        value: theme.colors.primary,
      },
      {
        label: 'options-border-color',
        value: hexToRgba(theme.colors.secondary, 0.1),
      },
      {
        label: 'option-bg-color',
        value: 'transparent',
      },
      {
        label: 'option-text-color',
        value: theme.colors.secondary,
      },
      {
        label: 'option-border-color',
        value: 'transparent',
      },
      {
        label: 'option-bg-hover-color',
        value: hexToRgba(theme.colors.secondary, 0.03),
      },
      {
        label: 'option-text-hover-color',
        value: theme.colors.secondary,
      },
      {
        label: 'option-border-hover-color',
        value: 'transparent',
      },
      {
        label: 'selected-bg-color',
        value: hexToRgba(theme.colors.secondary, 0.05),
      },
      {
        label: 'selected-border-color',
        value: 'transparent',
      },
      {
        label: 'selected-border-hover-color',
        value: 'transparent',
      },
      {
        label: 'selected-bg-hover-color',
        value: hexToRgba(theme.colors.secondary, 0.05),
      },
      {
        label: 'ring-focus-color',
        value: theme.colors.tertiary,
      },
      {
        label: 'selected-text-color',
        value: theme.colors.secondary,
      },
      {
        label: 'selected-text-hover-color',
        value: theme.colors.secondary,
      },
      {
        label: 'search-bg-color',
        value: theme.colors.primary,
      },
    ],
  };
  for (const [component, stylesArray] of Object.entries(styles)) {
    for (const style of stylesArray) {
      const styleExist = style['value'];
      cssVariables += `--zap-${component}-${style['label']}: ${styleExist};\n`;
    }
  }

  cssVariables += getDefaultAlertSizeCssValues();
  cssVariables += getDefaultBadgeSizeCssValues();
  cssVariables += getDefaultButtonSizeCssValues();
  cssVariables += getDefaultChipSizeCssValues();
  cssVariables += getDefaultDialogSizeCssValues();
  cssVariables += getDefaultModalSizeCssValues();
  cssVariables += getDefaultInputSizeCssValues();
  cssVariables += getDefaultCheckboxSizeCssValues();
  cssVariables += getDefaultRadioSizeCssValues();
  cssVariables += getDefaultTextareaSizeCssValues();
  cssVariables += getDefaultToggleSizeCssValues();
  cssVariables += getDefaultAccordionSizeCssValues();
  cssVariables += getDefaultSelectSizeCssValues();
  cssVariables += getDefaultTooltipSizeCssValues();
  cssVariables += getDefaultDatePickerSizeCssValues();
  cssVariables += getDefaultDPCalendarSelectSizeCssValues();

  return cssVariables;
}

import { DatePickerConfig } from "../../interfaces";
import { getShapeCssValues } from "../utils/shape-utils";

export function generateComponentDPVariables(
  value: DatePickerConfig,
) {
  let cssVariables = '';
  const dialogShapeValue = value.shape;

  if (dialogShapeValue) {
    const { shapeCssValue } = getShapeCssValues(dialogShapeValue, 'date-picker');
    cssVariables += `--zap-date-picker-border-radius: ${shapeCssValue};\n`;
    if(dialogShapeValue === 'pill') {
      cssVariables += `--zap-dp-calendar-border-radius: 1.5rem;\n`;
      cssVariables += `--zap-dp-calendar-handler-border-radius: 1.5rem;\n`;
      cssVariables += `--zap-dp-calendar-day-border-radius: 1.5rem;\n`;
      cssVariables += `--zap-dp-calendar-select-border-radius: 1.5rem;\n`;
      cssVariables += `--zap-dp-calendar-select-options-border-radius: 0.675rem;\n`;
    } else {
      cssVariables += `--zap-dp-calendar-border-radius: ${shapeCssValue};\n`;
      cssVariables += `--zap-dp-calendar-select-border-radius: ${shapeCssValue};\n`;
      cssVariables += `--zap-dp-calendar-handler-border-radius: ${shapeCssValue};\n`;
      cssVariables += `--zap-dp-calendar-day-border-radius: ${shapeCssValue};\n`;
      cssVariables += `--zap-dp-calendar-select-options-border-radius: ${shapeCssValue};\n`;
    }
  }

  return cssVariables;
}

export function getDefaultDatePickerSizeCssValues(): string {
  return `
          --zap-date-picker-padding-left: 0.75rem;
          --zap-date-picker-padding-right: 0.75rem;
          --zap-date-picker-padding-top: 0.5rem;
          --zap-date-picker-padding-bottom: 0.5rem;
          --zap-date-picker-font-size: 0.5rem;
          --zap-date-picker-help-text-font-size: 0.875rem;
          --zap-date-picker-icon-font-size: 1rem;
          --zap-dp-calendar-handler-height: 1rem;
          --zap-dp-calendar-handler-width: 1rem;
          --zap-dp-calendar-day-height: 2.65rem;
          --zap-dp-calendar-day-width: 2.65rem;
          --zap-dp-calendar-day-of-week-height: 2.5rem;
          --zap-dp-calendar-day-of-week-width: 2.5rem;
          --zap-dp-calendar-padding-top: 0.5rem;
          --zap-dp-calendar-padding-bottom: 0.5rem;
          --zap-dp-calendar-padding-left: 0.25rem;
          --zap-dp-calendar-padding-right: 0.25rem;
          --zap-dp-calendar-handler-padding-left: 0.5rem;
          --zap-dp-calendar-handler-padding-right: 0.5rem;
          --zap-dp-calendar-handler-padding-top: 0.5rem;
          --zap-dp-calendar-handler-padding-bottom: 0.5rem;
      `;
}

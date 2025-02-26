import { DatePickerConfig } from '../../interfaces';
import { getShapeCssValues } from '../utils/shape-utils';

export function generateComponentDPCalendarVariables(value: DatePickerConfig) {
  let cssVariables = '';
  const dialogShapeValue = value.shape;

  if (dialogShapeValue) {
    const { shapeCssValue } = getShapeCssValues(
      dialogShapeValue,
      'dp-calendar'
    );
    if (dialogShapeValue === 'pill') {
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

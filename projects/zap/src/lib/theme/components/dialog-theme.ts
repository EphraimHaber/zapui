import { DialogConfig } from '../../interfaces';
import { getShapeCssValues } from '../utils/shape-utils';

export function generateComponentDialogVariables(
  value: DialogConfig,
) {
  let cssVariables = '';
  const dialogShapeValue = value.shape;

  if (dialogShapeValue) {
    const { shapeCssValue } = getShapeCssValues(dialogShapeValue, 'dialog');
    cssVariables += `--zap-dialog-border-radius: ${shapeCssValue};\n`;
  }

  return cssVariables;
}
export function getDefaultDialogSizeCssValues(): string {
  return `
    --zap-dialog-padding-left: 1.25rem;
    --zap-dialog-padding-right: 1.25rem;
    --zap-dialog-padding-top: 1.25rem;
    --zap-dialog-padding-bottom: 1.25rem;
    --zap-dialog-title-font-size: 1.25rem;
    --zap-dialog-title-font-weight: 600;
    --zap-dialog-dismiss-font-size: 1rem;
    --zap-dialog-font-size: 1rem;
    --zap-dialog-dismiss-font-weight: 600;
    --zap-dialog-font-weight: 400;
    --zap-dialog-dismiss-height: 1rem;
    --zap-dialog-dismiss-width: 1rem;
  `;
}

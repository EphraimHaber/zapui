import { AlertConfig } from "../../interfaces";
import { getShapeCssValues } from "../utils/shape-utils";

export function generateComponentAlertVariables(
  value: AlertConfig,
  root: HTMLElement,
) {
  let cssVariables = '';
  const alertShapeValue = value.shape;

  if (alertShapeValue) {
    const { shapeCssValue } = getShapeCssValues(alertShapeValue, 'alert');
    cssVariables += `--zap-alert-border-radius: ${shapeCssValue};\n`;
  }

  return cssVariables;
}


export function getDefaultAlertSizeCssValues(): string {
  return `
    --zap-alert-padding-left: 1rem;
    --zap-alert-padding-right: 1rem;
    --zap-alert-padding-top: 1rem;
    --zap-alert-padding-bottom: 1rem;
    --zap-alert-font-size: 1rem;
    --zap-alert-icon-height: 1rem;
    --zap-alert-icon-width: 1rem;
    --zap-alert-dismiss-icon-width: 1rem;
    --zap-alert-dismiss-icon-height: 1rem;
  `;
}
import { ModalConfig } from '../../interfaces';
import { getExistingShapeFor, getShapeCssValues } from '../utils/shape-utils';

export function generateComponentModalVariables(
  value: ModalConfig,
  root: HTMLElement
) {
  let cssVariables = '';
  const modalShapeValue = value.shape;

  if (modalShapeValue) {
    const { shapeCssValue } = getShapeCssValues(modalShapeValue, 'modal');
    cssVariables += `--zap-modal-border-radius: ${shapeCssValue};\n`;
  }

  return cssVariables;
}

export function getDefaultModalSizeCssValues(): string {
  return `
    --zap-modal-padding-left: 1.25rem;
    --zap-modal-padding-right: 1.25rem;
    --zap-modal-padding-top: 1.25rem;
    --zap-modal-padding-bottom: 1.25rem;
    --zap-modal-dismiss-font-size: 1rem;
    --zap-modal-dismiss-font-weight: 400;
    --zap-modal-max-width: 100%;
    --zap-modal-dismiss-height: 1rem;
    --zap-modal-dismiss-width: 1rem;
  `;
}

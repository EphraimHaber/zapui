import { HexCode, Padding, ShapeType } from './index'

export interface SelectConfig {
  shape?: ShapeType
  size?: 'base' | 'compact'
  styles?: {
    colors?: Record<
      string,
      {
        bgColor?: HexCode
        textColor?: HexCode
        borderColor?: HexCode
        bgHoverColor?: HexCode
        ringFocusColor?: HexCode
        textHoverColor?: HexCode
        borderHoverColor?: HexCode
        searchBgColor?: HexCode
        searchTextColor?: HexCode
        searchBorderColor?: HexCode
        searchBgHoverColor?: HexCode
        searchTextHoverColor?: HexCode
        searchBorderHoverColor?: HexCode
        labelColor?: HexCode
        searchPlaceholderColor?: HexCode
        placeholderColor?: HexCode
        checkboxBgColor?: HexCode
        checkboxBorderColor?: HexCode
        checkboxCheckedBgColor?: HexCode
        checkboxCheckedBorderColor?: HexCode
        checkboxCheckedColor?: HexCode
        chipBgColor?: HexCode
        chipTextColor?: HexCode
        chipBorderColor?: HexCode
        dismissColor?: HexCode
        dismissHoverColor?: HexCode
        helpTextColor?: HexCode
      }
    >
    borderRadius?: string
    paddingLeft?: string
    paddingRight?: string
    paddingTop?: string
    paddingBottom?: string
    padding?: Padding
    checkboxPaddingLeft?: string
    checkboxPaddingRight?: string
    checkboxPaddingTop?: string
    checkboxPaddingBottom?: string
    checkboxPadding?: Padding
    checkboxBorderRadius?: string
    checkboxHeight?: string
    checkboxWidth?: string
    searchBorderRadius?: string
    searchPaddingLeft?: string
    searchPaddingRight?: string
    searchPaddingTop?: string
    searchPaddingBottom?: string
    searchPadding?: Padding
    chipPaddingLeft?: string
    chipPaddingRight?: string
    chipPaddingTop?: string
    chipPaddingBottom?: string
    chipPadding?: Padding
    chipBorderRadius?: string
    fontSize?: string
    fontWeight?: string
    lineHeight?: string
    letterSpacing?: string
    labelFontSize?: string
    labelFontWeight?: string
    labelLineHeight?: string
    labelLetterSpacing?: string
    searchFontSize?: string
    searchFontWeight?: string
    searchLineHeight?: string
    searchLetterSpacing?: string
    placeholderFontSize?: string
    placeholderFontWeight?: string
    placeholderLineHeight?: string
    placeholderLetterSpacing?: string
    optionFontSize?: string
    optionFontWeight?: string
    optionLineHeight?: string
    optionLetterSpacing?: string
    chipFontSize?: string
    chipFontWeight?: string
    chipLineHeight?: string
    chipLetterSpacing?: string
    dismissFontSize?: string
    dismissFontWeight?: string
    dismissLineHeight?: string
    dismissLetterSpacing?: string
    helpTextFontSize?: string
    helpTextFontWeight?: string
    helpTextLineHeight?: string
    helpTextLetterSpacing?: string
  }
}

import {
  AlertConfig,
  BadgeConfig,
  ButtonConfig,
  ChipConfig,
  CheckboxConfig,
  DialogConfig,
  InputConfig,
  ModalConfig,
  RadioConfig,
  SelectConfig,
  TextareaConfig,
  ToggleConfig,
  TooltipConfig,
  AccordionConfig,
  DPCalendarConfig,
  DatePickerConfig,
  DPCalendarSelectConfig,
  HexCode,
  ShapeType,
} from './index';

export interface ZapConfig {
  theme?: 'light' | 'dark' | string;
  themeLibrary?: Record<string, ZapTheme>;
  components?: {
    global?: GlobalConfig;
    alert?: AlertConfig;
    badge?: BadgeConfig;
    button?: ButtonConfig;
    chip?: ChipConfig;
    dialog?: DialogConfig;
    modal?: ModalConfig;
    input?: InputConfig;
    checkbox?: CheckboxConfig;
    radio?: RadioConfig;
    textarea?: TextareaConfig;
    toggle?: ToggleConfig;
    accordion?: AccordionConfig;
    select?: SelectConfig;
    tooltip?: TooltipConfig;
    'date-picker'?: DatePickerConfig;
    'dp-calendar'?: DPCalendarConfig;
    'dp-calendar-select'?: DPCalendarSelectConfig;
  };
}

export interface GlobalConfig {
  shape?: ShapeType;
}

export interface ZapTheme {
  colors: {
    primary: HexCode;
    secondary: HexCode;
    tertiary: HexCode;
    quaternary: HexCode;
    success: HexCode;
    successText: HexCode;
    error: HexCode;
    errorText: HexCode;
    warning: HexCode;
    warningText: HexCode;
    info: HexCode;
    infoText: HexCode;
  };
  fontSize: {
    '7xl': string;
    '6xl': string;
    '5xl': string;
    '4xl': string;
    '3xl': string;
    '2xl': string;
    xl: string;
    lg: string;
    md: string;
    sm: string;
    xs: string;
    xxs: string;
  };
}

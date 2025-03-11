export interface ZapToastInterface {
  title?: string;
  text?: string;
  action?: string;
  shape?: 'pill' | 'flat' | 'curve';
  zapClass?: string;
  type?: 'error' | 'default';
  actioned?: () => any;
}

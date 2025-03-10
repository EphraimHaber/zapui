export interface ZapToastInterface {
  actioned?: () => any;
  title?: string;
  text?: string;
  action?: string;
  shape?: 'pill' | 'flat' | 'curve';
  zapClass?: string;
  type?: 'error' | 'default';
}

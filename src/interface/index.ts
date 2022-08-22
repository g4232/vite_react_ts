export interface Theme {
  light: { foreground: string; background: string };
  dark: { foreground: string; background: string };
}
export interface Topic {
  title: string;
  answer: string;
  id: string;
  result: string;
  date: number;
}
export const themes: Theme = {
  light: {
      foreground: '#000000',
      background: '#eeeeee'
  },
  dark: {
      foreground: '#ffffff',
      background: '#222222'
  }
};
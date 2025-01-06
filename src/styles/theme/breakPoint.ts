type BreakPointType =
  | 'blank'
  | 'android'
  | 'ios'
  | 'tablet601'
  | 'desktop1440'
  | 'px320'
  | 'px375'
  | 'px425';

const BreakPoint = {
  blank: '1px',
  px320: '320px',
  px375: '375px',
  px425: '425px',
  android: '425px',
  ios: '375px',
  tablet601: '601px',
  desktop1440: '1440px',
} satisfies Record<BreakPointType, string>;

export const BreakPointAsNumber = Object.keys(BreakPoint).reduce(
  (result, key) => {
    const newKey = key as BreakPointType;
    result[newKey] = parseInt(BreakPoint[newKey], 10);
    return result;
  },
  {} as Record<BreakPointType, number>,
);

export default BreakPoint;

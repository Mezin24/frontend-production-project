type Mods = Record<string, boolean | string>;

export const classNames = (
  cls: string,
  mods: Mods = {},
  others: string[] = [],
): string => [
  cls,
  ...others.filter(Boolean),
  ...Object.entries(mods)
    .filter(([_, value]) => Boolean(value))
    .map(([className, _]) => className),
].join(' ');

export const convertStyles = (styles: Record<string, string | number>): string => {
  const stylesArr = Object.entries(styles);

  const styleStringArr = stylesArr.map(([key, value]) => {
    const dashedKey = key.replace(/[A-Z]/g, "-$&").toLowerCase();

    return [dashedKey, value].join(":");
  });

  return styleStringArr.join(";");
};

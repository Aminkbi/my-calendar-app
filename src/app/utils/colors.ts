type color = {
  primary: string;
  secondary: string;
};
type colors = {
  red: color;
  blue: color;
  yellow: color;
};

export const colors: colors = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

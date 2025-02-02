import { css } from 'styled-components';

export const Font = (size: number, weight: number, lineHeight: number) => css`
  font-size: ${size}px;
  font-weight: ${weight};
  line-height: ${lineHeight || size * 1.5}px;
`;

export const FontSize = {
  extraLarge: '20px',
  large: '18px',
  medium: '15px',
  regular: '13px',
  small: '11px',
};

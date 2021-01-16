import React from 'react';
import { colorPalete } from '../../../utils/colors.utils';
import { calcSpacing } from '../../../utils/spacing.utils';

const CheckBox = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  const style: React.CSSProperties = {
    width: calcSpacing(4),
    height: calcSpacing(4),
    border: `3px solid ${colorPalete.primary}`,
    margin: 0
  }
  return <input type="checkbox" style={style} {...props} />
}

export default CheckBox;
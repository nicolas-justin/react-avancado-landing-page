import React from 'react';

/**
 * Types
 */
import { LogoProps } from 'types/api';

/**
 * Styles
 */
import * as S from './styles';

const Logo = ({ url, alternativeText }: LogoProps) => (
  <S.LogoWrapper src={`http://localhost:1337${url}`} alt={alternativeText} />
);

export default Logo;

import React from 'react';

/**
 * Types
 */
import { LogoProps } from 'types/api';

/**
 * Utils
 */
import { getImageUrl } from 'utils/getImageUrl';

/**
 * Styles
 */
import * as S from './styles';

const Logo = ({ url, alternativeText }: LogoProps) => (
  <S.LogoWrapper src={getImageUrl(url)} alt={alternativeText} loading="lazy" />
);

export default Logo;

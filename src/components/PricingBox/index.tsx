import React from 'react';

/**
 * Types
 */
import { PricingBoxProps } from 'types/api';

/**
 * Components
 */
import Button from 'components/Button';

/**
 * Utils
 */
import { gaEvent } from 'utils/ga';

/**
 * Styles
 */
import * as S from './styles';

const onClick = () =>
  gaEvent({ action: 'click', category: 'buy', label: 'pricing box button' });

const PricingBox = ({
  totalPrice,
  priceInstallments,
  numberInstallments,
  benefits,
  button,
}: PricingBoxProps) => (
  <S.Box>
    <S.Prices>
      <S.FullPrice>
        De <span>R${totalPrice}</span> por apenas
      </S.FullPrice>
      <S.DiscountPrice>
        <span>{numberInstallments}x de</span> R${priceInstallments}
      </S.DiscountPrice>
    </S.Prices>
    <S.BenefitsList dangerouslySetInnerHTML={{ __html: benefits }} />

    <Button href={button.url} onClick={onClick} withPrice>
      <p>{button.label}</p>
      <div>
        <S.ButtonFullPrice>R${totalPrice}</S.ButtonFullPrice>
        <S.ButtonDiscountPrice>
          R${numberInstallments * priceInstallments}
        </S.ButtonDiscountPrice>
      </div>
    </Button>
  </S.Box>
);

export default PricingBox;

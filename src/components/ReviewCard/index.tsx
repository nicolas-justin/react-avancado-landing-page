import React, { useEffect, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

/**
 * Types
 */
import { Review } from 'types/api';

/**
 * Utils
 */
import { getImageUrl } from 'utils/getImageUrl';

/**
 * Styles
 */
import * as S from './styles';

type Props = Review & {
  id: number;
};

const ReviewCard: React.FC<Props> = ({ id, name, text, photo }) => {
  const [seeMore, setSeeMore] = useState(false);

  const handleChangeSeeMore = () => setSeeMore(!seeMore);

  useEffect(() => {
    const texts = document.querySelectorAll('p.description');

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        entry.target.classList[
          entry.target.scrollHeight > entry.contentRect.height + 25
            ? 'add'
            : 'remove'
        ]('truncated');
      }
    });

    texts.forEach((text) => observer.observe(text));
  });

  return (
    <S.Card>
      <S.User>
        <S.Image src={getImageUrl(photo.url)} alt={name} loading="lazy" />
        <S.Name>{name}</S.Name>
      </S.User>
      <S.Text>
        <input
          type="checkbox"
          id={`review-${id}`}
          onChange={handleChangeSeeMore}
        />
        <p className="description">{text}</p>
        <label className="label-more" htmlFor={`review-${id}`}>
          {!seeMore ? 'Ver tudo' : 'Ver menos'}
        </label>
      </S.Text>
    </S.Card>
  );
};

export default ReviewCard;

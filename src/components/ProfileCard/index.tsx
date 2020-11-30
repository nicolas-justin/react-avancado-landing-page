import React from 'react';
import { GrGithub } from 'react-icons/gr';
import { FaDribbble, FaTwitter } from 'react-icons/fa';

/**
 * Types
 */
import { Author } from 'types/api';

/**
 * Utils
 */
import { getImageUrl } from 'utils/getImageUrl';

/**
 * Styles
 */
import * as S from './styles';

const icons = {
  twitter: <FaTwitter />,
  github: <GrGithub />,
  dribbble: <FaDribbble />,
};

const ProfileCard: React.FC<Author> = ({
  name,
  role,
  photo,
  socialLinks,
  description,
}) => (
  <S.Card>
    <S.Image
      src={getImageUrl(photo.url)}
      alt={photo.alternativeText}
      loading="lazy"
    />
    <S.Name>{name}</S.Name>
    <S.Role>{role}</S.Role>
    <S.SocialLinks>
      {socialLinks.map(({ title, url }, index) => (
        <S.Link key={index}>
          <a href={url} title={title}>
            {icons[title.toLowerCase()]}
          </a>
        </S.Link>
      ))}
    </S.SocialLinks>
    <S.Description>{description}</S.Description>
  </S.Card>
);

export default ProfileCard;

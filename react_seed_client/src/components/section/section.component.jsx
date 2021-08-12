import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  SectionContainer,
  IconContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from './section.styles';

const Section = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <SectionContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <IconContainer className="background-image" imageUrl={imageUrl} />
    <ContentContainer className="content">
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubtitle>OPEN</ContentSubtitle>
    </ContentContainer>
  </SectionContainer>
);

export default withRouter(Section);

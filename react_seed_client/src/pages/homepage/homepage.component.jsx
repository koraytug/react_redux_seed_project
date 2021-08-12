import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectSections } from '../../redux/section/section.selectors';

import Section from '../../components/section/section.component';

import { Sections, SectionsRow } from './homepage.styles';

const HomePage = ({ sections }) => (
  <Sections>
    <SectionsRow>
      <Section key="1" {...sections[0]}></Section>
      <Section key="2" {...sections[1]}></Section>
    </SectionsRow>
    <SectionsRow>
      <Section key="3" {...sections[2]}></Section>
      <Section key="4" {...sections[3]}></Section>
    </SectionsRow>
  </Sections>
);

const mapStateToProps = createStructuredSelector({
  sections: selectSections,
});

export default connect(mapStateToProps)(HomePage);

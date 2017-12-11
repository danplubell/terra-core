import React from 'react';
import Base from 'terra-base';
import Image from 'terra-image';
import DemographicsBanner from '../../src/DemographicsBanner';
import demographicsImage from '../assets/demographicsCat.jpg';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

const DemographicsBannerDeceased = () => (
  <Base locale={locale}>
    <DemographicsBanner
      age="25 Years"
      dateOfBirth="May 9, 1992"
      deceasedDate="March 12, 2017"
      gender="True Male"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      photo={<Image alt="My Cat" src={demographicsImage} />}
      personName="Johnathon Doe"
      preferredFirstName="John"
    />
  </Base>
);

export default DemographicsBannerDeceased;
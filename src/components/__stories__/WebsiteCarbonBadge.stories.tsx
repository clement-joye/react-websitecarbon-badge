import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import WebsiteCarbonBadge from '../WebsiteCarbonBadge';

export default {
  title: 'WebsiteCarbonBadge',
  component: WebsiteCarbonBadge,
  argTypes: {},
} as ComponentMeta<typeof WebsiteCarbonBadge>;

const Template: ComponentStory<typeof WebsiteCarbonBadge> = (args) => <WebsiteCarbonBadge {...args} />;

export const Light = Template.bind({});
Light.args = {
  dark: false,
  co2: '12',
  percentage: '90'
};

export const Dark = Template.bind({});
Dark.args = {
  dark: true,
  co2: '12',
  percentage: '90'
};

export const English = Template.bind({});
English.args = {
  dark: false,
  co2: '12',
  percentage: '90',
  lang: 'en'
};

export const EnglishDirtier = Template.bind({});
EnglishDirtier.args = {
  dark: false,
  co2: '89',
  percentage: '49',
  lang: 'en'
};

export const French = Template.bind({});
French.args = {
  dark: false,
  co2: '12',
  percentage: '90',
  lang: 'fr'
};

export const FrenchDirtier = Template.bind({});
FrenchDirtier.args = {
  dark: false,
  co2: '89',
  percentage: '49',
  lang: 'fr'
};

export const Url = Template.bind({});
Url.args = {
  dark: false,
  co2: '12',
  percentage: '90',
  lang: 'en',
  url: "www.example.com"
};

export const FetchData = Template.bind({});
FetchData.args = {
  dark: false,
  lang: 'en',
  url: "www.google.com"
};


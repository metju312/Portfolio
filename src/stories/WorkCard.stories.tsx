import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import WorkCard from "../SimpleLayout/WorkCard";
import {withKnobs} from "@storybook/addon-knobs";


export default {
  title: 'Components|WorkCard',
  component: WorkCard,
  decorators: [withKnobs]
} as Meta;

export const workCard = () => {
  return (
    <WorkCard/>
  )
};
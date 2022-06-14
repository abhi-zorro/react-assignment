import ExploreComponent from './index';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';



export default {
    title: "Organisms/Explore",
    component: ExploreComponent,
  }as ComponentMeta<typeof ExploreComponent>;
  
  const template: ComponentStory<typeof ExploreComponent> = (args:any) => <BrowserRouter><ExploreComponent {...args} /></BrowserRouter>;
  export const Explore = template.bind({});
  Explore.args = {};
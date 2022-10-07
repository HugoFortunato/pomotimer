import { ComponentMeta, Story } from "@storybook/react";

import { Button } from "./index";

export default {
  component: Button,
} as ComponentMeta<React.FC<any>>;

export const Default: Story<any> = (args) => <div style={{ width: '78px' }}><Button { ...args }>Porto Cap</Button></div>
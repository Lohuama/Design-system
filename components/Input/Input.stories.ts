import { Meta, StoryObj } from '@storybook/react'
import Input, { InputProps } from './Input'
import { LinkProps } from '../Link/Link';

const meta: Meta<InputProps> = {
    title: 'Molecules/Input',
    component: Input,
    argTypes:{
        // multiline:{
        //     type: 'boolean'
        // },
        // label:{
        //     type: 'string'
        // }
    }
}

export default meta;

export const Primary: StoryObj<InputProps> = {
    args:{
        value: 'Input',
    }
}

export const PrimaryDisabled: StoryObj<InputProps> = {
    args: {
        value: 'Input',
        disabled: true
    }
}
export const PrimaryLabel: StoryObj<InputProps> = {
    args:{
        value: 'Input',
        label: 'Label'
    }
}

export const Multiline: StoryObj<InputProps> = {
    args: {
        value: 'Input',
        multiline: true
    }
}

export const MultilineLabel: StoryObj<InputProps> = {
    args:{
        value: 'Input',
        label: 'Label'
    }
}

export const MultilineDisabled: StoryObj<InputProps> = {
    args: {
        value: 'Input',
        multiline: true,
        disabled: true
    }
}

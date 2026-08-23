import type { Meta, StoryObj } from '@storybook/react';
import WhatsAppButton from '../components/ui/whatsapp-button';

const meta = {
	title: 'UI/WhatsAppButton',
	component: WhatsAppButton,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof WhatsAppButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const Decorator = (Story: any) => (
	<div className="relative min-h-[400px] w-full bg-slate-50 border-4 border-dashed border-gray-200 p-8">
		<h3 className="text-xl font-bold text-gray-500">
			El botón flotará en la esquina del iframe.
		</h3>
		<Story />
	</div>
);

export const DefaultRight: Story = {
	args: {
		phoneNumber: '5493514597594',
		message: 'Hola Industria Gráfica, me gustaría hacer una consulta',
	},
	decorators: [Decorator],
};

export const PositionLeft: Story = {
	args: {
		phoneNumber: '1234567890',
		message: 'Hola, tengo una duda.',
		position: 'bottom-left',
	},
	decorators: [Decorator],
};

// import { h } from '@stencil/core';
// import { storiesOf } from '@storybook/web-components';
// import readme from './readme.md';
// import { UsersAdd } from '../components/users-add';

// storiesOf('ibk-users-add', module)
//   .addParameters({
//     docs: {
//       description: {
//         component: 'Componente de adicionar usuarios',
//       },
//       source: {
//         code: `<ibk-users-add ibkId={'test'} allRequiredFields={true}></ibk-users-add>`,
//       },
//     },
//   })
//   .add('Default', () => <UsersAdd />)
//   .add('with custom properties', () => <ibk-users-add ibkId={'test'} allRequiredFields={true}></ibk-users-add>);

import { h } from '@stencil/core';
import { UsersAdd } from '../components/users-add'; // Asegúrate de importar tu componente de manera correcta

new UsersAdd(); // Asegúrate de que tus componentes Stencil estén registrados

export default {
  title: 'Components/ibk-users-add', // La categoría/nombre de tus componentes
};

export const Default = () => '<ibk-users-add></ibk-users-add>';

export const WithCustomProps = () => '<ibk-users-add ibkId="Value 1" allRequiredFields={true}></ibk-users-add>';

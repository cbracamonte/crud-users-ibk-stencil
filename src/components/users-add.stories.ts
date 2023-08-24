export default {
  title: 'components/UsersAdd',
};

const Template = (args) => `<ibk-users-add ibkId="${args.ibkId}" allRequiredFields="${args.allRequiredFields}"></ibk-users-add>`;
export const IbkUsersAdd = Template.bind({});
IbkUsersAdd.args = {
  ibkId: '100',
  allRequiredFields: true,
};
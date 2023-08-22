import { Component, Element, Prop, State, h } from '@stencil/core';
import { getUserById, updateUser } from '../api/users';
import BroadcastChannelIbk from 'broadcast-channel-hb';
import html2canvas from 'html2canvas';

@Component({
  tag: 'ibk-users-edit',
  styleUrl: 'ibk-users-add.css',
})
export class UsersEdit {
  @Element() hostElement: HTMLElement;
  @State() formUser: {
    name: string;
    position: string;
    email: string;
  } = {
    name: '',
    position: '',
    email: '',
  };
  @Prop() idUser: string = null;

  public channel: BroadcastChannelIbk;
  constructor() {
    this.channel = new BroadcastChannelIbk('crud-users');
  }

  getIdUser(): void {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    this.idUser = urlParams.get('id');
    this.getUserById(this.idUser);
  }

  componentDidLoad() {
    this.getIdUser();
    this.channel.addListener('send-idUser', this.handleMessage.bind(this));
    console.log('channel-stencil', this.channel);
  }

  handleMessage(data: any) {
    this.idUser = data.message;
    this.getUserById(this.idUser);
    console.log('ID Usuario enviado desde Angular', this.idUser);
  }

  async getUserById(id: string): Promise<void> {
    try {
      const response = await getUserById(id);
      const { success, userInfo } = response;
      if (success) {
        this.formUser = {
          name: userInfo.name,
          position: userInfo.position,
          email: userInfo.email,
        };
      }
    } catch (error) {
      console.log(error);
    }
  }

  handleSubmit(e): void {
    e.preventDefault();
    this.updateUser();
  }

  async updateUser(): Promise<void> {
    const body = { id: this.idUser, user: this.formUser };
    try {
      await updateUser(body);
      this.captureScreenshot();
      setTimeout(() => {
        this.goBack();
      }, 200);
    } catch (error) {
      console.error(error);
    }
  }

  handleChange(event): void {
    const { id, value } = event.target;
    this.formUser[id] = value;
  }

  goBack(): void {
    window.history.back();
  }

  captureScreenshot() {
    const formEditUser = this.hostElement.querySelector('#formEditUser') as any;

    html2canvas(formEditUser).then(canvas => {
      const screenshotUrl = canvas.toDataURL('image/png');

      const a = document.createElement('a');
      a.href = screenshotUrl;
      a.download = 'editar-usuario.png'; // Nombre de archivo de descarga
      a.click();
    });
  }

  render() {
    return (
      <div class="container" id="formEditUser">
        <h1 class="title">Editar Usuario</h1>
        <form class="contact-form" onSubmit={e => this.handleSubmit(e)}>
          <label class="contact-form__form-label" htmlFor="nombre">
            Nombre:
          </label>
          <input class="contact-form__form-input" type="text" id="name" name="name" value={this.formUser.name} onInput={event => this.handleChange(event)} required />
          <label class="contact-form__form-label" htmlFor="nombre">
            Posición:
          </label>
          <input class="contact-form__form-input" type="text" id="position" name="position" value={this.formUser.position} onInput={event => this.handleChange(event)} required />
          <label class="contact-form__form-label" htmlFor="email">
            Email:
          </label>
          <input class="contact-form__form-input" type="email" id="email" name="email" value={this.formUser.email} onInput={event => this.handleChange(event)} required />
          <button class="contact-form__btn-submit" type="submit">
            Guardar
          </button>
        </form>
      </div>
    );
  }
}

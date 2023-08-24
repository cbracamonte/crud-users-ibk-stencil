import { Component, Element, Event, EventEmitter, Prop, State, h } from '@stencil/core';
import { createUser } from '../api/users';
import BroadcastChannelIbk from 'broadcast-channel-hb';
import html2canvas from 'html2canvas';

@Component({
  tag: 'ibk-users-add',
  styleUrl: 'ibk-users-add.css',
})
export class UsersAdd {
  @Prop() ibkId: string;
  @Prop() allRequiredFields = true;
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
  @State() receivedMessages: string[] = [];
  @Event() myClick: EventEmitter;

  public channel: BroadcastChannelIbk;

  constructor() {
    this.channel = new BroadcastChannelIbk('crud-users');
  }

  componentDidLoad() {
    this.channel.addListener('send-message', this.handleMessage.bind(this));
    console.log('channel-stencil', this.channel);
  }

  handleMessage(data: any) {
    this.receivedMessages = [...this.receivedMessages, data.message];
    console.log('messages-stencil', this.receivedMessages);
  }

  sendMessage() {
    const message = `Hello from Stencil! (${new Date().toLocaleTimeString()})`;
    this.channel.sendMessage('send-message', { message });
  }

  handleSubmit(e): void {
    e.preventDefault();
    this.saveUser();
  }

  async saveUser(): Promise<void> {
    try {
      const response = await createUser(this.formUser);
      if (response.success) {
        this.formUser = {
          name: '',
          position: '',
          email: '',
        };
        this.captureScreenshot();
        setTimeout(() => {
          this.goBack();
        }, 200);
      }
    } catch (error) {
      console.error(error);
    }
  }

  handleChange(event): void {
    const { id, value } = event.target;
    this.formUser[id] = value;
  }

  goBack(): void {
    // Reemplazar con 4200 si en caso lo ejecuta como localhost y no en el servidor nginx
    window.location.href = 'http://localhost/users';
  }

  captureScreenshot() {
    console.log(this.hostElement);
    const formAddUser = this.hostElement.querySelector('#formAddUser') as any;

    html2canvas(formAddUser).then(canvas => {
      const screenshotUrl = canvas.toDataURL('image/png');

      const a = document.createElement('a');
      a.href = screenshotUrl;
      a.download = 'agregar-usuario.png'; // Nombre de archivo de descarga
      a.click();
    });
  }

  render() {
    return (
      <div class="container" id="formAddUser">
        <h1 class="title">Agregar Usuario</h1>
        <form id={this.ibkId} class="contact-form" onSubmit={e => this.handleSubmit(e)}>
          <label class="contact-form__form-label" htmlFor="nombre">
            Nombre:
          </label>
          <input
            class="contact-form__form-input"
            type="text"
            id="name"
            name="name"
            value={this.formUser.name}
            onInput={event => this.handleChange(event)}
            required
          />
          <label class="contact-form__form-label" htmlFor="nombre">
            Posición:
          </label>
          <input
            class="contact-form__form-input"
            type="text"
            id="position"
            name="position"
            value={this.formUser.position}
            onInput={event => this.handleChange(event)}
            required
          />
          <label class="contact-form__form-label" htmlFor="email">
            Email:
          </label>
          <input
            class="contact-form__form-input"
            type="email"
            id="email"
            name="email"
            value={this.formUser.email}
            onInput={event => this.handleChange(event)}
            required
          />
          <button class="contact-form__btn-submit" type="submit">
            Guardar
          </button>
        </form>
      </div>
    );
  }
}

import { Component, h } from '@stencil/core';
import '@stencil/router';

@Component({
  tag: 'app-root',
})
export class AppRoot {
  render() {
    return (
      <stencil-router>
        <stencil-route-switch scrollTopOffset={0}>
          <stencil-route url="/" component="ibk-users-add" exact={true} />
          <stencil-route url="/edit" component="ibk-users-edit" exact={true} />
        </stencil-route-switch>
      </stencil-router>
    );
  }
}

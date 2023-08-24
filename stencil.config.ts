import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  outputTargets: [
    // Para generar los customElements para StoryBook
    // {
    //   type: 'dist-custom-elements',
    //   customElementsExportBehavior: 'bundle',
    // },
    // Para generar la web y alojarla en un servidor http
    {
      type: 'www',
      baseUrl: 'http://localhost:3333',
    }
  ],
};

import type { Struct, Schema } from '@strapi/strapi';

export interface ElementsPublicPlayer extends Struct.ComponentSchema {
  collectionName: 'components_elements_public_players';
  info: {
    displayName: 'Public Player';
  };
  attributes: {
    videoId: Schema.Attribute.String;
    videoUrl: Schema.Attribute.String;
    timecode: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.public-player': ElementsPublicPlayer;
    }
  }
}

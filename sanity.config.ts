import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'hushed-ink-on-paper',

  projectId: 'f6zshzn1',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S: any) =>
        S.list()
          .title('Content')
          .items([
            S.documentTypeListItem('post')
              .title('Blog Posts')
              .child(
                S.documentTypeList('post')
                  .defaultOrdering([{field: 'publishedAt', direction: 'desc'}])
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})

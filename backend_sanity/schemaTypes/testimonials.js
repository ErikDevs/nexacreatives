import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'testmonial',
  title: 'Testmonials',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Name', type: 'string'}),
    defineField({name: 'company', title: 'Companay', type: 'string'}),
    defineField({name: 'imageurl', title: 'ImgURL', type: 'image', options: {hotspot: true}}),
    defineField({name: 'feedback', title: 'Feedback', type: 'string'}),
  ],
})

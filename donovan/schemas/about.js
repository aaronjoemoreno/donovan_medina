export default {
    // Computer Name
    name: 'about',
    // visible title
    title: 'About',
    type: 'document',
    fields: [
    {
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'About...',
      },
    ],
    preview: {
      select: {
        title: 'name',
      },
    },
  };
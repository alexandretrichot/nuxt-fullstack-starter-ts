module.exports = {
  prompts: {
    name: {
      type: 'string', // Question type
      required: true, // Is question Required
      message: 'Project name' // Question it's self
    },
    author: {
      type: 'string',
      message: 'Author'
    },
  },
  completeMessage: 'Project Complete!'
};

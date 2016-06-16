export default function() {
  export default function() {
    this.get('/notes', function() {
      return {
        data: [
          {
            type: 'notes',
            id: 1,
            attributes: {
              index: '1',
              content: 'Remember to feed dog',
            }
          },
          {
            type: 'notes',
            id: 2,
            attributes: {
              index: '2',
              content: 'You will add tests for all this, right?',
            }
          },
          {
            type: 'notes',
            id: 3,
            attributes: {
              index: '3',
              content: 'Learn React Native at some point',
            }
          }]
      };
    });
  }
}

window.TrelloPowerUp.initialize({
    'card-back-section': function(t, options) {
      return {
        title: 'Mermaid Diagram',
        content: {
          type: 'iframe',
          url: t.signUrl('./mermaid.html'), 
          height: 500 
        }
      };
    },
    'card-buttons': function(t, options) {
      return [{
        text: 'Edit Mermaid Diagram',
        callback: function(t) {
          return t.popup({
            title: 'Edit Mermaid Diagram',
            url: './edit-mermaid.html', 
            height: 184
          });
        }
      }];
    }
  });
  
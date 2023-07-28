window.TrelloPowerUp.initialize({
    'card-back-section': function(t, options) {
      return {
        title: 'Mermaid Diagram',
        icon: './mermaid_144.png', 
        content: {
          type: 'iframe',
          url: t.signUrl('./mermaid.html'), 
          height: 500 
        }
      };
    },
    'card-buttons': function(t, options) {
      return [{
        icon: './mermaid_144.png',
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
  
const langIcons = {
  java: 'https://cdn-icons-png.flaticon.com/512/226/226777.png',
  python: 'data:image/jpeg;base64,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',
  c: 'data:image/png;base64,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',
  rust: 'data:image/png;base64,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',
  'c++': 'data:image/png;base64,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',
  kotlin: '',
};

export default langIcons;
class VirtualKeyboard {
  constructor() {
    this.keyboardEventsCode = [
      [
        'Backquote',
        'Digit1',
        'Digit2',
        'Digit3',
        'Digit4',
        'Digit5',
        'Digit6',
        'Digit7',
        'Digit8',
        'Digit9',
        'Digit0',
        'Minus',
        'Equal',
        'Backslash',
        'Backspace',
      ],
      [
        'Tab',
        'KeyQ',
        'KeyW',
        'KeyE',
        'KeyR',
        'KeyT',
        'KeyY',
        'KeyU',
        'KeyI',
        'KeyO',
        'KeyP',
        'BracketLeft',
        'BracketRight',
        'Delete',
      ],
      [
        'CapsLock',
        'KeyA',
        'KeyS',
        'KeyD',
        'KeyF',
        'KeyG',
        'KeyH',
        'KeyJ',
        'KeyK',
        'KeyL',
        'Semicolon',
        'Quote',
        'Enter',
      ],
      [
        'ShiftLeft',
        'KeyZ',
        'KeyX',
        'KeyC',
        'KeyV',
        'KeyB',
        'KeyN',
        'KeyM',
        'Comma',
        'Period',
        'Slash',
        'ShiftRight',
        'ArrowUp',
      ],
      [
        'ControlLeft',
        'MetaLeft',
        'AltLeft',
        'Space',
        'AltRight',
        'MetaRight',
        'ContextMenu',
        'ControlRight',
        'ArrowLeft',
        'ArrowDown',
        'OSLeft',
        'ArrowRight',
      ],
    ];

    this.keyboardEnLowerCase = [
      [
        '`',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '0',
        '-',
        '=',
        '\\',
        'Backspace',
      ],
      [
        'Tab',
        'q',
        'w',
        'e',
        'r',
        't',
        'y',
        'u',
        'i',
        'o',
        'p',
        '[',
        ']',
        'Delete',
      ],
      [
        'Capslock',
        'a',
        's',
        'd',
        'f',
        'g',
        'h',
        'j',
        'k',
        'l',
        ';',
        'ʹ',
        'Enter',
      ],
      ['Shift',
        'z',
        'x',
        'c',
        'v',
        'b',
        'n',
        'm',
        ',',
        '.',
        '/',
        'Shift',
        '↑'],
      [
        'Ctrl',
        'Win',
        'Alt',
        'Space',
        'Alt',
        'Win',
        'Menu',
        'Ctrl',
        '←',
        '↓',
        '→',
      ],
    ];

    this.keyboardEnUpperCase = [
      [
        '~',
        '!',
        '@',
        '#',
        '$',
        '%',
        '^',
        '&',
        '*',
        '(',
        ')',
        '_',
        '+',
        '|',
        'Backspace',
      ],
      [
        'Tab',
        'Q',
        'W',
        'E',
        'R',
        'T',
        'Y',
        'U',
        'I',
        'O',
        'P',
        '{',
        '}',
        'Delete',
      ],
      [
        'Capslock',
        'A',
        'S',
        'D',
        'F',
        'G',
        'H',
        'J',
        'K',
        'L',
        ':',
        'ʹ',
        'Enter',
      ],
      ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'Shift', '↑'],
      [
        'Ctrl',
        'Win',
        'Alt',
        'Space',
        'Alt',
        'Win',
        'Menu',
        'Ctrl',
        '←',
        '↓',
        '→',
      ],
    ];

    this.keyboardRusLowerCase = [
      [
        'ё',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '0',
        '-',
        '=',
        '\\',
        'Backspace',
      ],
      [
        'Tab',
        'й',
        'ц',
        'у',
        'к',
        'е',
        'н',
        'г',
        'ш',
        'щ',
        'з',
        'х',
        'ъ',
        'Delete',
      ],
      [
        'Capslock',
        'ф',
        'ы',
        'в',
        'а',
        'п',
        'р',
        'о',
        'л',
        'д',
        'ж',
        'э',
        'Enter',
      ],
      ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Shift', '↑'],
      [
        'Ctrl',
        'Win',
        'Alt',
        'Space',
        'Alt',
        'Win',
        'Menu',
        'Ctrl',
        '←',
        '↓',
        '→',
      ],
    ];

    this.keyboardRusUpperCase = [
      [
        'Ё',
        '!',
        'ʹ',
        '№',
        ';',
        '%',
        ':',
        '?',
        '*',
        '(',
        ')',
        '_',
        '+',
        '//',
        'Backspace',
      ],
      [
        'Tab',
        'Й',
        'Ц',
        'У',
        'К',
        'Е',
        'Н',
        'Г',
        'Ш',
        'Щ',
        'З',
        'Х',
        'Ъ',
        'Delete',
      ],
      [
        'Capslock',
        'Ф',
        'Ы',
        'В',
        'А',
        'П',
        'Р',
        'О',
        'Л',
        'Д',
        'Ж',
        'Э',
        'Enter',
      ],
      ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', 'Shift', '↑'],
      [
        'Ctrl',
        'Win',
        'Alt',
        'Space',
        'Alt',
        'Win',
        'Menu',
        'Ctrl',
        '←',
        '↓',
        '→',
      ],
    ];

    this.keyboardState = {
      isCaps: false,
      clicked: undefined,
    };
  }

  // CREATE HTML ELEMENTS
  createElements(args) {
    this.args = args;
    const body = document.querySelector('body');
    body.classList.add('body');

    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    body.prepend(wrapper);

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'Virtual keyboard for Windows';
    wrapper.prepend(title);

    const textArea = document.createElement('textarea');
    textArea.classList.add('textarea');
    wrapper.append(textArea);

    const virtualKeyboard = document.createElement('div');
    virtualKeyboard.classList.add('virtual-keyboard');
    wrapper.append(virtualKeyboard);
  }

  // FILL BUTTONS CODE NUMBER
  fillCodeNumber() {
    const eventCode = this.keyboardEventsCode;
    for (let i = 0; i < eventCode.length; i += 1) {
      const keyboardRows = document.createElement('div');
      keyboardRows.classList.add('row');
      document.querySelector('.virtual-keyboard').append(keyboardRows);

      eventCode[i].forEach((elem) => {
        const btn = document.createElement('div');
        btn.classList.add('btn');
        btn.classList.add(elem);

        if (elem === 'Space') {
          btn.classList.add('spaceLong');
        } else if (elem === 'ArrowUp') {
          btn.classList.add('arrowUp');
        } else if (
          elem === 'Backspace'
          || elem === 'Enter'
          || elem === 'CapsLock'
          || elem === 'ShiftLeft'
          || elem === 'ShiftRight'
        ) {
          btn.classList.add('long');
        } else if (
          elem === 'ControlRight'
          || elem === 'ControlLeft'
          || elem === 'Tab'
          || elem === 'Delete'
        ) {
          btn.classList.add('medium');
        }
        keyboardRows.append(btn);
      });
    }
  }
}

const keyboard = new VirtualKeyboard();
keyboard.createElements();
keyboard.fillCodeNumber();

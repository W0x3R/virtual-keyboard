class VirtualKeyboard {
  constructor() {
    this.keyboardEventsCode = [
      ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backslash', 'Backspace'],
      ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Delete'],
      ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
      ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ArrowUp'],
      ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'MetaRight', 'ContextMenu', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],
    ];

    this.keyboardEnLowerCase = [
      ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '\\', 'Backspace'],
      ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Delete'],
      ['Capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', 'ʹ', 'Enter'],
      ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift', '↑'],
      ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Win', 'Menu', 'Ctrl', '←', '↓', '→'],
    ];

    this.keyboardEnUpperCase = [
      ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '|', 'Backspace'],
      ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', 'Delete'],
      ['Capslock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', 'ʹ', 'Enter'],
      ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'Shift', '↑'],
      ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Win', 'Menu', 'Ctrl', '←', '↓', '→'],
    ];

    this.keyboardRusLowerCase = [
      ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '\\', 'Backspace'],
      ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'Delete'],
      ['Capslock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
      ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Shift', '↑'],
      ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Win', 'Menu', 'Ctrl', '←', '↓', '→'],
    ];

    this.keyboardRusUpperCase = [
      ['Ё', '!', 'ʹ', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', '//', 'Backspace'],
      ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', 'Delete'],
      ['Capslock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
      ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', 'Shift', '↑'],
      ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Win', 'Menu', 'Ctrl', '←', '↓', '→'],
    ];

    this.keyboardState = {
      caps: false,
      click: undefined,
    };
  }

  // CREATE HTML ELEMENTS
  createElements() {
    const body = document.querySelector('body');
    body.classList.add('body');

    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    body.prepend(wrapper);

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'Virtual keyboard for Windows';
    wrapper.prepend(title);

    const textarea = document.createElement('textarea');
    textarea.classList.add('textarea');
    wrapper.append(textarea);
    textarea.placeholder = 'To change language press shift + alt';

    const virtualKeyboard = document.createElement('div');
    virtualKeyboard.classList.add('virtual-keyboard');
    wrapper.append(virtualKeyboard);

    this.textarea = textarea;
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

  newApportionment(app) {
    this.app = app;
    const allBtn = document.querySelectorAll('.btn');
    const newApp = app.reduce((first, others) => first.concat(others));
    allBtn.forEach((element, index) => {
      const el = element;
      el.innerHTML = newApp[index];
    });
  }

  // Events code for keyboard
  keyboardEvent(event) {
    this.event = event;
    if (event.code === undefined) {
      return event.target;
    }
    return document.querySelector(`.${event.code}`);
  }

  // Check language
  keyboardCheckLanguage(language) {
    this.language = language;
    if (localStorage.getItem('En') === null) {
      localStorage.setItem('En', true);
    } else {
      localStorage.setItem('En', language);
    }
    return language;
  }

  // Check upperCase or lowerCase
  checkUpOrLow() {
    const currentState = {
      upper: undefined,
      lower: undefined,
    };

    if (localStorage.getItem('En') === 'false') {
      currentState.upper = this.keyboardRusUpperCase;
      currentState.lower = this.keyboardRusLowerCase;
    } else {
      currentState.upper = this.keyboardEnUpperCase;
      currentState.lower = this.keyboardEnLowerCase;
    }
    return currentState;
  }

  // Swapping language
  swapLang() {
    if (document.querySelector('.ShiftLeft').className.includes('active') && document.querySelector('.AltLeft').className.includes('active')) {
      if (localStorage.getItem('En') === 'true') {
        this.keyboardCheckLanguage(false);

        if (this.keyboardState.caps) {
          this.newApportionment(this.checkUpOrLow().upper);
        } else {
          this.newApportionment(this.checkUpOrLow().lower);
        }
      } else if (localStorage.getItem('En') === 'false') {
        this.keyboardCheckLanguage(true);

        if (this.keyboardState.caps) {
          this.newApportionment(this.checkUpOrLow().upper);
        } else {
          this.newApportionment(this.checkUpOrLow().lower);
        }
      }
    }
  }

  // Capslock switch active
  switchActive(value) {
    this.value = value;
    if (value.className.includes('CapsLock')) {
      value.classList.toggle('active');
    } else {
      value.classList.add('active');
    }
  }

  // Shift buttons
  shiftPress() {
    if (!this.keyboardState.caps) {
      this.newApportionment(this.checkUpOrLow().lower);
    } else if (this.keyboardState.caps) {
      this.newApportionment(this.checkUpOrLow().upper);
    }
  }

  shiftRelease(event) {
    if (!this.keyboardState.caps) {
      this.newApportionment(this.checkUpOrLow().upper);
    } else if (this.keyboardState.caps) {
      this.newApportionment(this.checkUpOrLow().lower);
    }
    this.switchActive(this.keyboardEvent(event));
  }

  // Capslock button
  buttonCapslock(event) {
    if (!this.keyboardState.caps) {
      this.newApportionment(this.checkUpOrLow().upper);
      this.keyboardState.caps = true;
    } else if (this.keyboardState.caps) {
      this.newApportionment(this.checkUpOrLow().lower);
      this.keyboardState.caps = false;
    }
    this.switchActive(this.keyboardEvent(event));
  }

  // Space button
  buttonSpace(event) {
    event.preventDefault();

    const start = this.textarea.selectionStart;
    const end = this.textarea.selectionEnd;

    this.switchActive(this.keyboardEvent(event));
    this.textarea.setRangeText(' ', start, end, 'end');
  }

  // Enter button
  buttonEnter(event) {
    event.preventDefault();

    const start = this.textarea.selectionStart;
    const end = this.textarea.selectionEnd;

    this.switchActive(this.keyboardEvent(event));
    this.textarea.setRangeText('\n', start, end, 'end');
  }

  // Tab button
  buttonTab(event) {
    event.preventDefault();

    const start = this.textarea.selectionStart;
    const end = this.textarea.selectionEnd;

    this.switchActive(this.keyboardEvent(event));
    this.textarea.setRangeText('\t', start, end, 'end');
  }

  // Space button
  buttonBackspace(event) {
    event.preventDefault();
    this.switchActive(this.keyboardEvent(event));

    const start = this.textarea.selectionStart;
    const end = this.textarea.selectionEnd;

    if (this.textarea.value === '') {
      return;
    }

    if (start === end) {
      this.textarea.setRangeText('', start - 1, end);
    } else {
      this.textarea.setRangeText('', start, end);
    }
  }

  // Delete button
  buttonDelete(event) {
    event.preventDefault();
    this.switchActive(this.keyboardEvent(event));

    const start = this.textarea.selectionStart;
    const end = this.textarea.selectionEnd;

    if (this.textarea.value === '') {
      return;
    }
    if (start === end) {
      this.textarea.setRangeText('', start, end + 1);
    } else {
      this.textarea.setRangeText('', start, end);
    }
  }

  // Sounds for keyboard
  soundsPlay(element) {
    this.element = element;
    const buttons = document.querySelectorAll('.btn');
    const audio = new Audio('../Assets/cb08c3923b42e5c.mp3');

    buttons.forEach((elem) => elem.addEventListener('click', () => {
      audio.play();
    }));

    document.querySelector('body').addEventListener('keydown', () => {
      audio.play();
    });
  }

  addSymbol(event) {
    event.preventDefault();

    const start = this.textarea.selectionStart;
    const end = this.textarea.selectionEnd;

    this.switchActive(this.keyboardEvent(event));
    this.textarea.setRangeText(this.keyboardEvent(event).textContent, start, end, 'end');
  }

  introduction(event) {
    this.textarea.focus();
    this.keyboardState.click = event.target;

    try {
      if (this.keyboardEvent(event).className.includes('Tab')) {
        this.buttonTab(event);
      } else if (this.keyboardEvent(event).className.includes('CapsLock')) {
        this.buttonCapslock(event);
      } else if (this.keyboardEvent(event).className.includes('ShiftLeft') || this.keyboardEvent(event).className.includes('ShiftRight')) {
        this.shiftRelease(event);
      } else if (this.keyboardEvent(event).className.includes('Space')) {
        this.buttonSpace(event);
      } else if (this.keyboardEvent(event).className.includes('ControlLeft')
      || this.keyboardEvent(event).className.includes('ControlRight')
      || this.keyboardEvent(event).className.includes('AltLeft')
      || this.keyboardEvent(event).className.includes('AltRight')
      || this.keyboardEvent(event).className.includes('OSLeft')) {
        event.preventDefault();
        this.keyboardEvent(event).classList.add('active');
      } else if (this.keyboardEvent(event).className.includes('Backspace')) {
        this.buttonBackspace(event);
      } else if (this.keyboardEvent(event).className.includes('Delete')) {
        this.buttonDelete(event);
      } else if (this.keyboardEvent(event).className.includes('Enter')) {
        this.buttonEnter(event);
      } else if (this.keyboardEvent(event).className.includes('btn')) {
        this.addSymbol(event);
      }
      this.swapLang();
    } catch (err) {
      this.soundsPlay();
    }
  }

  output(event) {
    try {
      if (!this.keyboardState.click.className.includes('CapsLock')) {
        this.keyboardState.click.classList.remove('active');
      }

      if (!this.keyboardEvent(event).className.includes('CapsLock')) {
        this.keyboardEvent(event).classList.remove('active');
      }

      if (this.keyboardState.click.className.includes('ShiftLeft') || this.keyboardState.click.className.includes('ShiftRight')
      || this.keyboardEvent(event).className.includes('ShiftLeft') || this.keyboardEvent(event).className.includes('ShiftRight')) {
        this.shiftPress(event);
        document.querySelector('.ShiftLeft').classList.remove('active');
        document.querySelector('.ShiftRight').classList.remove('active');
      }
    } catch (err) {
      this.soundsPlay();
    }
  }

  action() {
    document.addEventListener('keydown', this.introduction.bind(this));
    document.addEventListener('keyup', this.output.bind(this));
    window.addEventListener('mousedown', this.introduction.bind(this));
    window.addEventListener('mouseup', this.output.bind(this));
  }
}

const keyboard = new VirtualKeyboard();
keyboard.createElements();
keyboard.fillCodeNumber();
keyboard.newApportionment(keyboard.checkUpOrLow().lower);
keyboard.keyboardCheckLanguage(localStorage.getItem('En'));
keyboard.action();
keyboard.soundsPlay();

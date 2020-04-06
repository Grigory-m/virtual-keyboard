window.onload = function () {
   document.body.insertAdjacentHTML('afterbegin', '<div class="wrapper">\
   <textarea rows="5" id="area" class="area" ></textarea><div class="keyboard">\
   <div class="row">\
   <div class="key"><span class="rus"><span class="down hidden">ё</span><span class="up hidden">Ё</span></span>\
   <span class="eng"><span class="up hidden">~</span><span class="down">`</span></span></div>\
   <div class="key"><span class="rus"><span class="down hidden">1</span><span class="up hidden">!</span></span>\
   <span class="eng"><span class="up hidden">!</span><span class="down">1</span></span></div>\
   <div class="key"><span class="rus"><span class="down hidden">2</span><span class="up hidden">"</span></span>\
   <span class="eng"><span class="up hidden">@</span><span class="down">2</span></span></div>\
   <div class="key"><span class="rus"><span class="down hidden">3</span><span class="up hidden">№</span></span>\
   <span class="eng"><span class="up hidden">#</span><span class="down">3</span></span></div>\
   <div class="key"><span class="rus"><span class="down hidden">4</span><span class="up hidden">;</span></span>\
   <span class="eng"><span class="up hidden">$</span><span class="down">4</span></span></div>\
   <div class="key"><span class="rus"><span class="down hidden">5</span><span class="up hidden">%</span></span>\
   <span class="eng"><span class="up hidden">%</span><span class="down">5</span></span></div>\
   <div class="key"><span class="rus"><span class="down hidden">6</span><span class="up hidden">:</span></span>\
   <span class="eng"><span class="up hidden">^</span><span class="down">6</span></span></div>\
   <div class="key"><span class="rus"><span class="down hidden">7</span><span class="up hidden">?</span></span>\
   <span class="eng"><span class="up hidden">&</span><span class="down">7</span></span></div>\
   <div class="key"><span class="rus"><span class="down hidden">8</span><span class="up hidden">*</span></span>\
   <span class="eng"><span class="up hidden">*</span><span class="down">8</span></span></div>\
   <div class="key"><span class="rus"><span class="down hidden">9</span><span class="up hidden">(</span></span>\
   <span class="eng"><span class="up hidden">(</span><span class="down">9</span></span></div>\
   <div class="key"><span class="rus"><span class="down hidden">0</span><span class="up hidden">)</span></span>\
   <span class="eng"><span class="up hidden">)</span><span class="down">0</span></span></div>\
   <div class="key"><span class="rus"><span class="down hidden">-</span><span class="up hidden">_</span></span>\
   <span class="eng"><span class="up hidden">_</span><span class="down">-</span></span></div>\
   <div class="key"><span class="rus"><span class="down hidden">=</span><span class="up hidden">+</span></span>\
   <span class="eng"><span class="up hidden">+</span><span class="down">=</span></span></div>\
   <div id="backspace" class="key widest selected"><span class="rus hidden"><span class="down hidden">Backspace</span><span class="up hidden">Backspace</span></span>\
   <span><span class="up hidden">Backspace</span><span class="down">Backspace</span></span></div>\
   </div>\
   <div class="row">\
   <div id="tab" class="key wide selected">\
   <span><span class="up hidden">Tab</span><span class="down">Tab</span></span></div>\
   <div class="key"><span class="rus"><span class="down hidden">й</span><span class="up hidden">Й</span></span>\
   <span class="eng"><span class="up hidden">Q</span><span class="down">q</span></span></div>\
   <div class="key"><span class="rus"><span class="down hidden">ц</span><span class="up hidden">Ц</span></span>\
   <span class="eng"><span class="up hidden">W</span><span class="down">w</span></span></div>\
   <div class="key"><span class="rus"><span class="down hidden">у</span><span class="up hidden">У</span></span>\
   <span class="eng"><span class="up hidden">E</span><span class="down">e</span></span></div>\
   <div class="key"><span class="rus"><span class="down hidden">к</span><span class="up hidden">К</span></span>\
   <span class="eng"><span class="up hidden">R</span><span class="down">r</span></span></div>\
   <div class="key"><span class="rus"><span class="down hidden">е</span><span class="up hidden">Е</span></span>\
   <span class="eng"><span class="up hidden">T</span><span class="down">t</span></span></div>\
   <div class="key"><span class="rus"><span class="down hidden">н</span><span class="up hidden">Н</span></span>\
   <span class="eng"><span class="up hidden">Y</span><span class="down">y</span></span></div>\
   <div class="key"><span class="rus"><span class="down hidden">г</span><span class="up hidden">Г</span></span>\
   <span class="eng"><span class="up hidden">U</span><span class="down">u</span></span></div>\
   <div class="key"><span class="rus"><span class="down hidden">ш</span><span class="up hidden">Ш</span></span>\
   <span class="eng"><span class="up hidden">I</span><span class="down">i</span></span></div>\
   <div class="key"><span class="rus"><span class="down hidden">щ</span><span class="up hidden">Щ</span></span>\
   <span class="eng"><span class="up hidden">O</span><span class="down">o</span></span></div>\
   <div class="key"><span class="rus"><span class="down hidden">з</span><span class="up hidden">З</span></span>\
   <span class="eng"><span class="up hidden">P</span><span class="down">p</span></span></div>\
   <div class="key"><span class="rus"><span class="down hidden">х</span><span class="up hidden">Х</span></span>\
   <span class="eng"><span class="up hidden">{</span><span class="down">[</span></span></div>\
   <div class="key"><span class="rus"><span class="down hidden">ъ</span><span class="up hidden">Ъ</span></span>\
   <span class="eng"><span class="up hidden">}</span><span class="down">]</span></span></div>\
   <div class="key"><span class="rus"><span class="down hidden">\\</span><span class="up hidden">/</span></span>\
   <span class="eng"><span class="up hidden">|</span><span class="down">\\</span></span></div>\
   <div id="delete" class="key wide selected"><span class="rus hidden"><span class="down hidden">Del</span><span class="up hidden">Del</span></span>\
   <span><span class="up hidden">Del</span><span class="down">Del</span></span></div>\
   </div>\
   <div class="row">\
   <div id="capslock" class="key widest selected">\
   <span><span class="up hidden">CapsLock</span><span class="down">CapsLock</span></span></div>\
   <div class="key"><span class="rus"><span class="down hidden">ф</span><span class="up hidden">Ф</span></span>\
   <span class="eng"><span class="up hidden">A</span><span class="down">a</span></span></div>\
   <div class="key"><span class="rus"><span class="down hidden">ы</span><span class="up hidden">Ы</span></span>\
   <span class="eng"><span class="up hidden">S</span><span class="down">s</span></span></div>\
   <div class="key"><span class="rus"><span class="down hidden">в</span><span class="up hidden">В</span></span>\
   <span class="eng"><span class="up hidden">D</span><span class="down">d</span></span></div>\
   <div class="key"><span class="rus"><span class="down hidden">а</span><span class="up hidden">А</span></span>\
   <span class="eng"><span class="up hidden">F</span><span class="down">f</span></span></div>\
   <div class="key"><span class="rus"><span class="down hidden">п</span><span class="up hidden">П</span></span>\
   <span class="eng"><span class="up hidden">G</span><span class="down">g</span></span></div>\
   <div class="key"><span class="rus"><span class="down hidden">р</span><span class="up hidden">Р</span></span>\
   <span class="eng"><span class="up hidden">H</span><span class="down">h</span></span></div>\
   <div class="key"><span class="rus"><span class="down hidden">о</span><span class="up hidden">О</span></span>\
   <span class="eng"><span class="up hidden">J</span><span class="down">j</span></span></div>\
   <div class="key"><span class="rus"><span class="down hidden">л</span><span class="up hidden">Л</span></span>\
   <span class="eng"><span class="up hidden">K</span><span class="down">k</span></span></div>\
   <div class="key"><span class="rus"><span class="down hidden">д</span><span class="up hidden">Д</span></span>\
   <span class="eng"><span class="up hidden">L</span><span class="down">l</span></span></div>\
   <div class="key"><span class="rus"><span class="down hidden">ж</span><span class="up hidden">Ж</span></span>\
   <span class="eng"><span class="up hidden">:</span><span class="down">;</span></span></div>\
   <div class="key"><span class="rus"><span class="down hidden">э</span><span class="up hidden">Э</span></span>\
   <span class="eng"><span class="up hidden">\'</span><span class="down">\'</span></span></div>\
   <div id="enter" class="key widest selected"><span class="rus hidden"><span class="down hidden">Enter</span><span class="up hidden">Enter</span></span>\
   <span><span class="up hidden">Enter</span><span class="down">Enter</span></span></div>\
   </div>\
   <div class="row">\
   <div id="shiftleft" class="key widest selected">\
   <span><span class="up hidden">Shift</span><span class="down">Shift</span></span></div>\
   <div class="key"><span class="rus"><span class="down hidden">я</span><span class="up hidden">Я</span></span>\
   <span class="eng"><span class="up hidden">Z</span><span class="down">z</span></span></div>\
   <div class="key"><span class="rus"><span class="down hidden">ч</span><span class="up hidden">Ч</span></span>\
   <span class="eng"><span class="up hidden">X</span><span class="down">x</span></span></div>\
   <div class="key"><span class="rus"><span class="down hidden">с</span><span class="up hidden">С</span></span>\
   <span class="eng"><span class="up hidden">C</span><span class="down">c</span></span></div>\
   <div class="key"><span class="rus"><span class="down hidden">м</span><span class="up hidden">М</span></span>\
   <span class="eng"><span class="up hidden">V</span><span class="down">v</span></span></div>\
   <div class="key"><span class="rus"><span class="down hidden">и</span><span class="up hidden">И</span></span>\
   <span class="eng"><span class="up hidden">B</span><span class="down">b</span></span></div>\
   <div class="key"><span class="rus"><span class="down hidden">т</span><span class="up hidden">Т</span></span>\
   <span class="eng"><span class="up hidden">N</span><span class="down">n</span></span></div>\
   <div class="key"><span class="rus"><span class="down hidden">ь</span><span class="up hidden">Ь</span></span>\
   <span class="eng"><span class="up hidden">M</span><span class="down">m</span></span></div>\
   <div class="key"><span class="rus"><span class="down hidden">б</span><span class="up hidden">Б</span></span>\
   <span class="eng"><span class="up hidden"><</span><span class="down">,</span></span></div>\
   <div class="key"><span class="rus"><span class="down hidden">ю</span><span class="up hidden">Ю</span></span>\
   <span class="eng"><span class="up hidden">></span><span class="down">.</span></span></div>\
   <div class="key"><span class="rus"><span class="down hidden">.</span><span class="up hidden">,</span></span>\
   <span class="eng"><span class="up hidden">?</span><span class="down">/</span></span></div>\
   <div id="arrowup" class="key">\
   <span><span class="up hidden">&#9650</span><span class="down">&#9650</span></span></div>\
   <div id="shiftright" class="key widest selected">\
   <span><span class="up hidden">Shift</span><span class="down">Shift</span></span></div>\
   </div>\
   <div class="row">\
   <div id="controlleft" class="key selected">\
   <span><span class="up hidden">Ctrl</span><span class="down">Ctrl</span></span></div>\
   <div id="metaleft" class="key selected">\
   <span><span class="up hidden">Win</span><span class="down">Win</span></span></div>\
   <div id="altleft" class="key selected">\
   <span><span class="up hidden">Alt</span><span class="down">Alt</span></span></div>\
   <div id="space" class="key space">\
   <span><span class="up hidden"> </span><span class="down"> </span></span></div>\
   <div id="altright"  class="key selected">\
   <span><span class="up hidden">Alt</span><span class="down">Alt</span></span></div>\
   <div id="arrowleft" class="key">\
   <span><span class="up hidden">&#9668</span><span class="down">&#9668</span></span></div>\
   <div id="arrowdown" class="key">\
   <span><span class="up hidden">&#9660</span><span class="down">&#9660</span></span></div>\
   <div id="arrowright" class="key">\
   <span><span class="up hidden">&#9658</span><span class="down">&#9658</span></span></div>\
   <div id="controlright" class="key selected">\
   <span><span class="up hidden">Ctrl</span><span class="down">Ctrl</span></span></div>\
   </div>\
   </div><p>Клавиатура создана в операционной системе Windows</p><p>Для переключения языка комбинация: левыe ctrl + alt</p></div>');

  const area = document.getElementById('area');
  const engKeyDown = document.querySelectorAll('.eng .down');
  const rusKeyDown = document.querySelectorAll('.rus .down');
  const engKeyUp = document.querySelectorAll('.eng .up');
  const rusKeyUp = document.querySelectorAll('.rus .up');
  const keys = document.querySelectorAll('.key');
  let elem;
  let eng = true;
  let rusDown = true;
  let engDown = true;
  let keyDown = false;
  
  eng = localStorage.getItem('eng');
  if (eng == 'false') {
    engKeyDown.forEach(i => i.classList.add('hidden'));
    rusKeyDown.forEach(i => i.classList.remove('hidden'));
    eng = false;
  }

  window.onkeydown = keyHandler;
  keys.forEach(i => i.addEventListener('mousedown', mouseHandler)); 
  keys.forEach(i => i.addEventListener('mouseup', mouseUp)); 
  window.addEventListener('keyup', () => keys.forEach(i => {
    
    if (i.id !== 'capslock') {
      keyDown = false;
      i.classList.remove('active');
    }        
  }));
  
  function mouseUp() {
    if (this.id == 'capslock') return;
    this.classList.remove('active');
  }

  function mouseHandler() {
    keys.forEach(i => i.addEventListener('mouseup', mouseUp)); 
    
    let pos = area.selectionStart;
    if (this.id !== 'capslock') {
      this.classList.add('active');
    }
    
    if (this.id === 'enter') {
      area.value = area.value.slice(0, pos) + '\n' + area.value.slice(pos);
      area.selectionStart = area.selectionEnd = pos + 1;
      return;
    }

    if (this.id === 'backspace') {
      area.value = area.value.slice(0, pos-1) + area.value.slice(pos);
      area.selectionStart = area.selectionEnd = pos - 1;
      return;
    }

    if (this.id === 'delete') {
      area.value = area.value.slice(0, pos) + area.value.slice(pos + 1);
      area.selectionStart = area.selectionEnd = pos;
      return;
    }

    if (this.id === 'tab') {
      area.value = area.value.slice(0, pos) + '  ' + area.value.slice(pos);
      area.selectionStart = area.selectionEnd = pos + 2;
      return;
    }

    if (this.id === 'space') {
      area.value = area.value.slice(0, pos) + ' ' + area.value.slice(pos);
      area.selectionStart = area.selectionEnd = pos + 1;
      return;
    }

    if (this.id === 'capslock') {
      this.classList.toggle('active');
      changeLetters();
      return;
    }

    if (this.id === 'metaleft' || this.id === 'controlleft' || this.id === 'altleft' ||
        this.id === 'altright' || this.id === 'controlright' || this.id === 'shiftright' || this.id === 'shiftleft') {
      return;
    }
        
    for (let node of this.children) {
      for (let elem of node.children) {
        if (!elem.classList.contains('hidden')) {
          area.value += elem.textContent;
        }
      }
    }
    
  }

  function keyHandler(e) {

    e.preventDefault();
    area.focus();
    let pos = area.selectionStart;
    elem = document.getElementById(`${e.code.toLowerCase()}`);
    if (keyDown && !e.altKey && !e.ctrlKey) return;
    keyDown = true;
    
    if (e.altKey && e.ctrlKey) {
      if (eng && engDown) {
        engKeyDown.forEach(i => i.classList.add('hidden'));
        rusKeyDown.forEach(i => i.classList.remove('hidden'));
        eng = false;
      } else if (eng && !engDown) {
        engKeyUp.forEach(i => i.classList.add('hidden'));
        rusKeyUp.forEach(i => i.classList.remove('hidden'));
        eng = false; rusDown = false; engDown = true;
      } else if (!eng && rusDown) {
        engKeyDown.forEach(i => i.classList.remove('hidden'));
        rusKeyDown.forEach(i => i.classList.add('hidden'));
        eng = true;
      } else if (!eng && !rusDown) {
        engKeyUp.forEach(i => i.classList.remove('hidden'));
        rusKeyUp.forEach(i => i.classList.add('hidden'));
        eng = true; rusDown = true; engDown = false;
      }        
    }
    
    localStorage.setItem('eng', eng);
      
    if (e.code === 'Tab') {
      e.preventDefault();
      area.value = area.value.slice(0, pos) + '  ' + area.value.slice(pos);
      area.selectionStart = area.selectionEnd = pos + 2;
      elem.classList.add('active');
      return;      
    }

    if (e.code === 'Space') {
      area.value = area.value.slice(0, pos) + ' ' + area.value.slice(pos);
      area.selectionStart = area.selectionEnd = pos + 1;
      elem.classList.add('active');
      return;
    }

    if (e.code === 'Delete') {
      area.value = area.value.slice(0, pos) + area.value.slice(pos + 1);
      area.selectionStart = area.selectionEnd = pos;
      elem.classList.add('active');
      return;
    }

    if (e.code === 'Enter') {
      area.value = area.value.slice(0, pos) + '\n' + area.value.slice(pos);
      area.selectionStart = area.selectionEnd = pos + 1;
      elem.classList.add('active');
      return;
    }

    if (e.code === 'Backspace') {
      area.value = area.value.slice(0, pos-1) + area.value.slice(pos);
      area.selectionStart = area.selectionEnd = pos - 1;
      elem.classList.add('active');
      return;
    }

    if (e.code === 'MetaLeft' || e.code === 'ControlLeft' || e.code === 'ControlRight' || 
      e.code === 'AltLeft' || e.code === 'AltRight' || e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
      elem.classList.add('active');
      return;
    }

    if (e.code === 'ArrowRight' || e.code === 'ArrowDown' || e.code === 'ArrowLeft' || e.code === 'ArrowUp') {
      elem.classList.add('active');
      for (let node of elem.children) {
        for (let item of node.children) {
          if (!item.classList.contains('hidden')) {
            area.value += item.textContent;
          }
        }
      }
      return;
    }

    if (e.code === 'CapsLock') {
      elem.classList.toggle('active');
      changeLetters();
      return;
    }

    function findNode() {      
      for (const node of engKeyDown) {
        if (node.textContent === e.key ) return node;                 
      } 
      for (const node of engKeyUp) {
        if (node.textContent === e.key) return node;                 
      }  
      for (const node of rusKeyDown) {
        if (node.textContent === e.key) return node;                 
      }  
      for (const node of rusKeyUp) {
        if (node.textContent === e.key) return node;                 
      }    
    }   
    elem = findNode().parentElement.parentElement;
    elem.classList.add('active');
    
    for (const node of elem.children) {
      for (const item of node.children) {
        if (!item.classList.contains('hidden')) {
          area.value += item.textContent;
        }
      }
    }
  }

  function changeLetters() {
    if (eng && engDown) {
      engKeyDown.forEach(i => i.classList.add('hidden'));
      engKeyUp.forEach(i => i.classList.remove('hidden')); 
      engDown = false;     
    } else if (eng && !engDown) {
      engKeyDown.forEach(i => i.classList.remove('hidden'));
      engKeyUp.forEach(i => i.classList.add('hidden')); 
      engDown = true;     
    } else if (!eng && rusDown) {
      rusKeyDown.forEach(i => i.classList.add('hidden'));
      rusKeyUp.forEach(i => i.classList.remove('hidden')); 
      rusDown = false;     
    } else if (!eng && !rusDown) {
      rusKeyDown.forEach(i => i.classList.remove('hidden'));
      rusKeyUp.forEach(i => i.classList.add('hidden')); 
      rusDown = true;     
    } 
  }
  
  
}

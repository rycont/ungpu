class DraggableBox {
  makePressed() {
    this.element.classList.add('elevated')
    
  }

  makeUnpressed() {
    this.element.classList.remove('elevated')
  }

  folloxCursorX(mouseX) {
    const nIndex = Math.round((mouseX - 50) / 120)

    const targetX = nIndex * 120
    const delta = (mouseX - 50) - targetX

    this.index = nIndex
    this.element.style.setProperty('left', targetX + (delta / 16) ** 3 + 'px')
  }

  folloxCursorY(mouseY) {
    this.element.style.setProperty('top', (mouseY - 50) + 'px')
  }

  followCursor = (event) => {
    this.folloxCursorX(event.clientX)
    this.folloxCursorY(event.clientY)
  }

  mouseDown() {
    this.makePressed()
    document.body.addEventListener('mousemove', this.followCursor)
  }

  mouseUp() {
    this.makeUnpressed()
    document.body.removeEventListener('mousemove', this.followCursor)
    this.element.style.setProperty('left', (this.index) * 120 + 'px')
  }

  constructor(e, initIndex) {
    e.style.setProperty('left', 120 * (initIndex) + 'px')
    e.style.setProperty('top', '100px')
    this.element = e
    this.index = initIndex
    e.addEventListener('mousedown', this.mouseDown.bind(this))
    document.body.addEventListener('mouseup', this.mouseUp.bind(this))
  }
}

[...document.getElementsByClassName('box')].forEach((e, i) =>
  new DraggableBox(e, i)
)

import { createCustomElement } from 'ficusjs/custom-element'
import { html, renderer } from '@ficusjs/renderers/htm'
import { unsafeHTML } from './unsafe-html.js'
import { elementEmpty } from './element-empty.js'

createCustomElement('scrum-poker-card', {
  renderer,
  props: {
    num: {
      type: String
    },
    selected: {
      type: Boolean
    }
  },
  computed: {
    icons () {
      return {
        h: { icon: 'h.svg', text: '&#189;' },
        1: { icon: '1.svg', text: '1' },
        2: { icon: '2.svg', text: '2' },
        3: { icon: '3.svg', text: '3' },
        5: { icon: '5.svg', text: '5' },
        8: { icon: '8.svg', text: '8' },
        13: { icon: '13.svg', text: '13' },
        20: { icon: '20.svg', text: '20' },
        40: { icon: '40.svg', text: '40' },
        q: { icon: 'q.svg', text: '?' },
        c: { icon: 'c.svg', text: '&#9749;' }
      }
    }
  },
  selectCard (e) {
    const selected = document.getElementById('selected')
    elementEmpty(selected)
    const clone = e.currentTarget.cloneNode(true)
    clone.classList.add('selected')
    clone.addEventListener('click', e => {
      e.currentTarget.parentNode.removeChild(e.currentTarget)
      document.body.classList.toggle('noscroll')
    })
    selected.appendChild(clone)
    document.body.classList.toggle('noscroll')
  },
  render () {
    return html`
      <article class="${this.props.selected ? 'selected' : ''}" onclick="${this.selectCard}">
        <small>${unsafeHTML(this.icons[this.props.num].text)}</small>
        <figure>
          <h2>${unsafeHTML(this.icons[this.props.num].text)}</h2>
          <img src="${`/img/${this.icons[this.props.num].icon}`}" height="70" alt="${this.icons[this.props.num].text}" />
        </figure>
        <small>${unsafeHTML(this.icons[this.props.num].text)}</small>
      </article>
    `
  }
})

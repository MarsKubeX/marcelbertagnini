import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ExperienceCard from '../ExperienceCard.vue'

const defaultProps = {
  title: 'Vue.js',
  description: ['Built SPAs', 'Used Vuex', 'Component architecture'],
  titleIcon: 'https://example.com/vue-logo.png'
}

describe('ExperienceCard', () => {
  it('renders the card with title and image', () => {
    const wrapper = mount(ExperienceCard, { props: defaultProps })
    expect(wrapper.find('.card-title').text()).toBe('Vue.js')
    expect(wrapper.find('.card-image img').attributes('src')).toBe(
      'https://example.com/vue-logo.png'
    )
  })

  it('renders description bullet points on the back', () => {
    const wrapper = mount(ExperienceCard, { props: defaultProps })
    const items = wrapper.findAll('.flip-card-back li')
    expect(items).toHaveLength(3)
    expect(items[0].text()).toBe('Built SPAs')
    expect(items[1].text()).toBe('Used Vuex')
    expect(items[2].text()).toBe('Component architecture')
  })

  it('toggles flipped state when More Info button is clicked', async () => {
    const wrapper = mount(ExperienceCard, { props: defaultProps })
    const inner = wrapper.find('.flip-card-inner')
    expect(inner.classes()).not.toContain('flipped')

    await wrapper.find('.more-info-button').trigger('click')
    expect(inner.classes()).toContain('flipped')

    await wrapper.find('.more-info-button').trigger('click')
    expect(inner.classes()).not.toContain('flipped')
  })

  it('has the flip-card element', () => {
    const wrapper = mount(ExperienceCard, { props: defaultProps })
    const flipCard = wrapper.find('.flip-card')
    expect(flipCard.exists()).toBe(true)
  })

  it('has a scrollable back face with the card-back-content class', () => {
    const wrapper = mount(ExperienceCard, { props: defaultProps })
    const backContent = wrapper.find('.flip-card-back .card-back-content')
    expect(backContent.exists()).toBe(true)
  })

  it('renders the image at compact size (80x80) for mobile-friendly layout', () => {
    const wrapper = mount(ExperienceCard, { props: defaultProps })
    const img = wrapper.find('.card-image img')
    expect(img.attributes('width')).toBe('80')
    expect(img.attributes('height')).toBe('80')
  })

  it('shows a go-back button on the back face to flip card back', async () => {
    const wrapper = mount(ExperienceCard, { props: defaultProps })
    // Flip to back
    await wrapper.find('.more-info-button').trigger('click')
    expect(wrapper.find('.flip-card-inner').classes()).toContain('flipped')

    // Find the go-back button on the back face
    const goBackBtn = wrapper.find('.flip-card-back .go-back-button')
    expect(goBackBtn.exists()).toBe(true)

    // Click it to flip back
    await goBackBtn.trigger('click')
    expect(wrapper.find('.flip-card-inner').classes()).not.toContain('flipped')
  })
})
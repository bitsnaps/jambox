import { mount } from '@vue/test-utils'
import PageNotFound from '@/components/PageNotFound.vue'

describe('PageNotFound', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(PageNotFound)
    expect(wrapper.vm).toBeTruthy()
  })
})

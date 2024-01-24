



import { mount } from '@vue/test-utils'
import { describe, expect, it } from "vitest";
import Button from './button.vue';
import { buttonType } from './button';

describe('Button组件', () => {
  // 组件是否创建成功
  it('create', () => {
    const wrapper = mount(Button);
    expect(wrapper.classes()).toContain('qf-button');
  });

  // 按钮组件的type属性是否生效
  it('type', () => {
    /**
     * 本质上来我们的按钮类型是通过css显示
     * 那么我们就可以判断当前按钮里有没有对应的css
     */
     const types: buttonType[] = ['success', 'primary', 'warning', 'danger', 'info']
     types.forEach(item => {
      /**
       * 有多少种类型我们就需要创建多少个组件
       */
      const wrapper = mount(Button, {
        props: {
          type: item
        }
      })

      expect(wrapper.classes()).toContain(`qf-button--${item}`)
     })
  })
    // 按钮组件的disabled属性是否生效
    it('disabled', async () => {
      const wrapper = mount<any>(Button, {
        props: {
          disabled: true
        }
      })
      /**
       * 当前按钮样式是否是disable的样式
       */
      expect(wrapper.classes()).toContain('qf-button--disabled')

      /**
       * 当前按钮是否还能点击
       */
      await wrapper.trigger('click')
      expect(wrapper.emitted('click')).toBeUndefined()
    })
})


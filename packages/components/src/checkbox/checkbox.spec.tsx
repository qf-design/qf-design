import { describe, expect, it } from "vitest";
import { mount } from '@vue/test-utils'
import Checkbox from "./checkbox.vue";
import CheckboxGroup from "./checkbox-group.vue";
import { h } from 'vue'

describe('Checkbox 组件', () => {
  it('create', () => {
    const wrapper = mount(Checkbox)
    expect(wrapper.classes()).toContain('qf-checkbox')
  })

  // 检查 checkbox v-model 是否正确更新了
  it('v-model', async () => {
    const wrapper = mount(Checkbox, {
      props: {
        modelValue: false,
        // 每次状态改变同步状态的方法
        'onUpdate:modelValue': () => {
          // 手动同步
          wrapper.setProps({ modelValue: true })
        }
      }
    })

    await wrapper.trigger('click')
    expect(wrapper.props('modelValue')).toBe(true)
  })

  // checkbox change事件是否触发了
  it('change event', async () => {
    const wrapper = mount(Checkbox, {
      props: {
        modelValue: false,
        'onUpdate:modelValue': () => {
          wrapper.setProps({ modelValue: true })
        }
      }
    })

    await wrapper.trigger('click')
    expect(wrapper.emitted().change[0]).toEqual([true])
  })

  // 没有传入v-mode的时候，checkbox仍然可以进行xuanzhong
  it('without v-model', async () => {
    const wrapper = mount(Checkbox)
    /**
     * 没有添加v-model
     * 点击后，也需要选中选项
     * 也就是model为true
     * 直接拿组件示例看里面的状态是不是true
     */
    await wrapper.trigger('click')
    expect((wrapper.vm as any).model).toBe(true)
  })

  // disabled的情况
  it('disabled', async () => {
    const wrapper = mount(Checkbox, {
      props: {
        disabled: true,
        modelValue: false,
        'onUpdate:modelValue': () => {
          wrapper.setProps({ modelValue: true })
        }
      }
    })

    // 判断样式是否生效
    expect(wrapper.classes()).toContain('qf-checkbox--disabled');

    // 点击当前组件
    await wrapper.trigger('click')
    /**
     * 禁用状态下
     * 点击后状态不能发生改变
     */
    expect(wrapper.props('modelValue')).toBe(false)
  })

  it('group', () => {
    // 渲染
    const wrapper = mount(CheckboxGroup, {
      props: {
        modelValue: [],
        'onUpdate:modelValue': (modelValue: string[]) => {
          wrapper.setProps({ modelValue })
        }
      },
      // 通过插槽插入两个checkbox组件
      slots: {
        default: [
          h(Checkbox, {
            label: 'checkbox1'
          }),
          h(Checkbox, {
            label: 'checkbox2'
          })
        ]
      }
    })

    // 此时通过getComponent获取到第一个组件，触发点击事件
    wrapper.getComponent(Checkbox).trigger('click')
    // 期望此时 checkbox-group v-model的值应该为 第一个组件的label
    expect(wrapper.props('modelValue')).toEqual(['checkbox1'])
  })
})
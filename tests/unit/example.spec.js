import { shallowMount } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";

describe("Counter.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(Counter, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

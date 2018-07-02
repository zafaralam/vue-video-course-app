import Form from "@/components/contact/Form.vue";
import { mount } from "@vue/test-utils";

function factory(options = {}) {
    return mount(Form, {
        ...options
    })
}

//1. Pass down some props
test("for passed in props", () => {

    const { vm } = factory({
        propsData: {
            submitButtonText: "Test"
        }
    });

    expect(vm.submitButtonText).toBe("Test");
});

//2. Alter some data
test("for name in data", () => {
    const wrapper = factory()
    wrapper.setData({
        name: 'John'
    });

    expect(wrapper.vm.name).toBe("John");
    const field = wrapper.find('input#name');
    expect(field.element.value).toBe('John');
});

//3. Check a computed property
test("twitter link is right", () => {
    const wrapper = factory()

    wrapper.vm.contact.main.twitter.value = "Codebryo";

    expect(wrapper.vm.links.twitter).toBe("https://twitter.com/Codebryo");
})

//4. Listen to the submit event
test("check submit event", () => {
    const wrapper = factory()

    const form = wrapper.find("form");

    form.trigger("submit");

    expect(wrapper.emitted().submit).toBeTruthy();
    expect(wrapper.emitted().submit).toEqual([
        [wrapper.vm.$data]
    ]);
});
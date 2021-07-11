import PrintFormatBuilderComponent from "./PrintFormatBuilder.vue";

class PrintFormatBuilder {
	constructor({ wrapper, page, print_format }) {
		this.$wrapper = $(wrapper);
		this.page = page;
		this.print_format = print_format;
		this.page.set_title(__("Editing {0}", [this.print_format]));
		this.page.set_primary_action(__("Save changes"), () => {
			this.$component.save_changes();
		});
		this.page.set_secondary_action(__("Reset changes"), () => {
			this.$component.reset_changes();
		});

		let $vm = new Vue({
			el: this.$wrapper.get(0),
			render: h =>
				h(PrintFormatBuilderComponent, {
					props: {
						print_format_name: print_format
					}
				})
		});
		this.$component = $vm.$children[0];
	}
}

frappe.provide("frappe.ui");
frappe.ui.PrintFormatBuilder = PrintFormatBuilder;
export default PrintFormatBuilder;

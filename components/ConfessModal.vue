<script lang="ts" setup>
import {
	NModal,
	NForm,
	NFormItem,
	NInput,
	FormInst,
	FormRules,
	FormItemRule,
	FormValidationError,
	NCheckbox,
	NSpace,
	NButton
} from 'naive-ui';

const { show } = defineProps<{
	show: boolean
}>();

/* eslint-disable func-call-spacing */
const emitter = defineEmits<{
	(e: 'close'): void
}>();

const formRef = ref<FormInst | null>(null);
const isLoading = ref<boolean | 'error'>(false);

const formValue = ref<FormValue>({
	title: '',
	content: '',
	withWebsite: false,
	websiteName: '',
	websiteLink: ''
});

const trigger = ['blur', 'input'];

const noSpacesOnly: FormItemRule = {
	validator: (rule: FormItemRule, value: any) => new Promise<void>((resolve, reject) => {
		if (value !== '' && /^\s*$/.test(value)) {
			reject(Error("Cannot be only spaces."));
		} else {
			resolve();
		}
	}),
	trigger
};

const rules: FormRules = {
	title: [
		{
			required: true,
			message: "Title is required",
			trigger
		},
		noSpacesOnly
	],
	content: [
		{
			required: true,
			message: "Content is required",
			trigger
		},
		noSpacesOnly
	],
	websiteName: [
		{
			message: "Website name is required",
			trigger
		},
		noSpacesOnly
	],
	websiteLink: [
		{
			message: "Website link is required",
			trigger
		},
		noSpacesOnly
	]
};

function submitForm() {
	formRef.value?.validate((errors?: FormValidationError[]) => {
		const f = formValue.value;
		if (f.withWebsite) {
			if (!f.websiteName || !f.websiteLink) {
				alert("Website name/website link is required!");
			}
		}
		if (!errors) {
			isLoading.value = true;
			useFetch("/api/confessions/create", {
				body: JSON.stringify(formValue.value),
				method: "POST"
			})
				.then(({ _error }) => {
					isLoading.value = false;
					emitter("close");
					window.location.reload();
				});
		}
	});
}

</script>

<template>
	<div>
		<n-modal
			:show="show"
			:style="{width: '450px'}"
			title="Confess"
			preset="card"
			:mask-closable="true"
			:close-on-esc="true"
			:header-style="{ fontSize: '1.5rem' }"
			@esc="() => { emitter('close') }"
			@mask-click="() => { emitter('close') }"
		>
			<n-form
				ref="formRef"
				:model="formValue"
				:rules="rules"
			>
				<n-space vertical>
					<n-form-item label="Title" path="title">
						<n-input v-model:value="formValue.title" placeholder="Title" />
					</n-form-item>
					<n-form-item label="Content" path="content">
						<n-input v-model:value="formValue.content" placeholder="Content" />
					</n-form-item>
				</n-space>
				<n-checkbox v-model:checked="formValue.withWebsite" style="margin-block: 1rem;">
					With website?
				</n-checkbox>
				<n-space vertical style="margin-top: 10px;">
					<n-form-item
						:required="formValue.withWebsite"
						label="Website Name"
						path="websiteName"
					>
						<n-input
							v-model:value="formValue.websiteName"
							:disabled="!formValue.withWebsite"
							placeholder="Website name"
						/>
					</n-form-item>
					<n-form-item
						:required="formValue.withWebsite"
						label="Website Link"
						path="websiteLink"
					>
						<n-input
							v-model:value="formValue.websiteLink"
							:disabled="!formValue.withWebsite"
							placeholder="Website link"
						/>
					</n-form-item>
				</n-space>
			</n-form>
			<div class="right">
				<n-button type="info" class="right" @click="submitForm">
					{{ isLoading ? 'Submitting...' : 'Submit' }}
				</n-button>
			</div>
		</n-modal>
	</div>
</template>

<style lang="scss" scoped>
.right {
	display: flex;
	justify-content: flex-end;
}
</style>

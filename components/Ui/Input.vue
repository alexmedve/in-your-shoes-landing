<template>
    <div class="input-group">
        <input
            :type="type"
            :placeholder="placeholder"
            :name="name"
            :id="name"
            :value="value"
            :disabled="disabled"
            step=".01"
            class="input-group__field"
            @keyup="$emit('keyup', $event.target.value)"
            @input="$emit('input', $event.target.value)"
            @blur="$emit('blur')"
        >
        <div class="small-copy" v-if="error">
            {{error}}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'text'
        },
        name: {
            type: String,
            default: null
        },
        placeholder: {
            type: String,
            default: null
        },
        value: {
            type: [String, Number],
            default: null
        },
        error: {
            type: String,
            default: null
        },
        disabled: {
            type: Boolean,
            default: false
        }
    }
}
</script>
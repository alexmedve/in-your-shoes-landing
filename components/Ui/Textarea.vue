<template>
    <div class="input">
        <textarea
            :placeholder="placeholder"
            :value="value"
            :name="name"
            :id="name"
            class="input__field"
            @keyup="$emit('keyup', $event.target.value)"
            @input="$emit('input', $event.target.value)"
            @blur="$emit('blur')">
        </textarea>
        <div class="error-text" v-if="error">
            {{error}}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: null
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
            type: String,
            default: null
        },
        error: {
            type: String,
            default: null
        }
    }
}
</script>
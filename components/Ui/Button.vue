<template>
    <button
        v-if="type == 'button'"
        class="button"
        @click="$emit('click')"
    >
        {{placeholder}}
    </button>
    <button
        v-else-if="type == 'submit'"
        :disabled="disabled"
        class="button"
        type="submit"
        name="submit"
        @click="$emit('click')"
    >
        {{placeholder}}
    </button>
    <NuxtLink
        v-else-if="type == 'route-link'" 
        :to="link"
        class="button"
    >
        {{placeholder}}
    </NuxtLink>
    <a
        v-else
        :href="link"
        class="button"
    >
        {{placeholder}}
    </a>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'button'
        },
        link: {
            type: String,
            default: null
        },
        placeholder: {
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

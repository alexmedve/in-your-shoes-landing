<template>
    <div class="loader">
        <div class="body-copy loader__text" v-if="text">
            {{text}}
        </div>
        <div :class="['loader__bar', {'loader__bar--gray': grayBar}]">
            <div class="loader__bar-fill"></div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            text: {
                type: String,
                default: null
            },
            grayBar: {
                type: Boolean,
                default: false
            }
        }
    }
</script>
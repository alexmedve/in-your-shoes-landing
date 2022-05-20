<template>
    <section class="about-values section-m-top container">
        <h2 class="heading-2">
            What we value
        </h2>
        <div
            v-for="(value, i) in values"
            :key="'value-card' + i"
            class="about-values__card card-white"
        >
            <h3 class="heading-3 u-text-secondary">
                {{value.title}}
            </h3>
            <p class="body-copy">
                {{value.content}}
            </p>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                values: [
                    {
                        title: 'Empathy',
                        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                    },
                    {
                        title: 'Transparency',
                        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                    },
                    {
                        title: 'Flexibility',
                        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                    }
                ]
            }
        }
    }
</script>

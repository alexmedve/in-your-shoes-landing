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
                        content: 'How can we really understand someone withouth empathy? The same goes for a business. Only when we know for sure what we are working for we can set realistic goals and set up a good plan.'
                    },
                    {
                        title: 'Transparency',
                        content: 'Building trust as soon as possible in our process, and trust is built by action. Speaking out on the parts that don\'t go so smooth is important, and for long term results each member of a project must take it\'s job very seriously.'
                    },
                    {
                        title: 'Flexibility',
                        content: 'There are a few times when the initial plan goes as it was intented. Learning on the go and adapting our strategy is vital to achieving the initial goal, no matter the obstacles.'
                    }
                ]
            }
        }
    }
</script>

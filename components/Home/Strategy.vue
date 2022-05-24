<template>
    <section class="home-strategy container section-m-top">
        <h2 class="heading-2 home-strategy__first-title">
            But do I need a new
            online strategy?
        </h2>
        <div class="home-strategy__list">
            <h3 class="heading-3">
                If you have any of these feelings, you might want to
                contact us as soon as possible
            </h3>
            <div class="home-strategy__item">
                <div class="home-strategy__item-icon">
                    <img src="@/assets/icons/sad-face.svg" alt="Sad face" class="u-image-contain">
                </div>
                <p class="body-copy">
                    You are overwhelmed by how big the digital marketing world is and you're not sure where to start
                </p>
            </div>
            <div class="home-strategy__item">
                <div class="home-strategy__item-icon">
                    <img src="@/assets/icons/sad-face.svg" alt="Sad face" class="u-image-contain">
                </div>
                <p class="body-copy">
                    You are taking your first steps in your business and want to make sure your online profile is on point.
                </p>
            </div>
            <div class="home-strategy__item">
                <div class="home-strategy__item-icon">
                    <img src="@/assets/icons/sad-face.svg" alt="Sad face" class="u-image-contain">
                </div>
                <p class="body-copy">
                    You are not reaching enough customers and it's hard to close a sale
                </p>
            </div>
            <div class="home-strategy__line"></div>
            <UiButton
                placeholder="Let's talk"
                type="router-link"
                link="/contact"
            />
        </div>
        <h2 class="heading-2 home-strategy__second-title">
            Steps for a new strategy
        </h2>
        <div
            v-for="(step, i) in steps"
            :key="'step' + i"
            class="home-strategy__step card-white"
        >
            <div class="home-strategy__step-header">
                <div class="home-strategy__step-number heading-4 u-text-secondary">
                    {{'0'+ (i + 1)}}
                </div>
                <div class="home-strategy__step-header-line"></div>
                <h4 class="heading-4">
                    {{step.title}}
                </h4>
            </div>
            <div class="home-strategy__step-body">
                <p class="body-copy">
                    {{step.content}}
                </p>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                steps: [
                    {
                        title: 'Research and discovery',
                        content: 'Understanding the business we are working with and it\'s clients is the key to making good choices in digital marketing.'
                    },
                    {
                        title: 'Strategy',
                        content: 'With enough information from the previous phase, we\'ll tailor a custom plan that fits like a glove!'
                    },
                    {
                        title: 'Project management',
                        content: 'No need to worry that the final product won\'t deliver, we\'ll watch closely so that you can just sit back and watch your growth.'
                    },
                    {
                        title: 'Success measurement',
                        content: 'We\'ll make you a good-looking report showing you how much your business has grown since you gave it new shoes from us!'
                    },
                ]
            }
        }
    }
</script>
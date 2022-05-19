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
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                </p>
            </div>
            <div class="home-strategy__item">
                <div class="home-strategy__item-icon">
                    <img src="@/assets/icons/sad-face.svg" alt="Sad face" class="u-image-contain">
                </div>
                <p class="body-copy">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                </p>
            </div>
            <div class="home-strategy__item">
                <div class="home-strategy__item-icon">
                    <img src="@/assets/icons/sad-face.svg" alt="Sad face" class="u-image-contain">
                </div>
                <p class="body-copy">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
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
                <div class="home-strategy__step-number heading-4">
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
                        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  Lorem Ipsum has been Lorem Ipsum has been '
                    },
                    {
                        title: 'Strategy',
                        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  Lorem Ipsum has been Lorem Ipsum has been  '
                    },
                    {
                        title: 'Project management',
                        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  Lorem Ipsum has been Lorem Ipsum has been  '
                    },
                    {
                        title: 'Success measurement',
                        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  Lorem Ipsum has been Lorem Ipsum has been '
                    },
                ]
            }
        }
    }
</script>
<template>
    <div>
        <section class="service-about section-m-top section-white">
            <div class="container">
                <div class="service-about__content">
                    <h2 class="heading-2">
                        <span class="text-highlight">
                            Data Analytics
                        </span>
                    </h2>
                    <p class="body-copy">
                        Data analytics is the science of analyzing raw data to make conclusions about that information. Many of the techniques and processes of data analytics have been automated into mechanical processes and algorithms that work over raw data for human consumption.
                    </p>
                </div>
                <div class="service-about__image">
                    <img src="@/assets/images/data-analytics.png" alt="Data Analytics" class="u-image-cover">
                </div>
                <div class="service-about__content service-about__content--second">
                    <h2 class="heading-2">
                        Data Analytics that
                        breaks through the noise
                    </h2>
                    <p class="body-copy">
                        A business strategy that doesn't rely on data analytics is not complete and InYourShoes is aware of that. 
                        With our automations and expertise in this field, we are able of interpreting raw data to find trends and patterns, which help in decision-making and planning the next actions. 
                    </p>
                    <UiButton
                        placeholder="Let's talk"
                        type="router-link"
                        link="/contact"
                    />
                </div>
                <div class="service-about__dots">
                    <img src="@/assets/images/home-about-dots.svg" alt="Digital Marketing" class="u-image-contain">
                </div>
            </div>
        </section>
        <section class="service-result section-m-top container">
            <h2 class="heading-2">
                The numbers don’t lie
            </h2>
            <div class="service-result__numbers">
                <div class="service-result__number">
                    <div class="heading-1 u-text-secondary">
                        26%
                    </div>
                    <h4 class="heading-4">
                        Increase in income
                    </h4>
                </div>
                <div class="service-result__number">
                    <div class="heading-1 u-text-secondary">
                        19%
                    </div>
                    <h4 class="heading-4">
                        Cost avoidance
                    </h4>
                </div>
            </div>
            <div class="service-result__details">
                <div class="service-result__logo">
                    <img src="@/assets/images/testimonials/invisibly.png" alt="Invisibly" class="u-image-contain">
                </div>
                <div class="service-result__line"></div>
                <p class="body-copy">
                    Invisibly is a data collection company with an already good audience. But raw data isn't that efficient without a proper interpretation, right? With our expertise in this sector and automation tools, we increased their income by 26% and achieved a cost avoidance of 19%. How? By studying historical data we created a clear picture of what they were doing, discovered what the actual trends are and made scenarios on the possible next steps.\
                    <br>
                    <br>
                    Through our consultancy we set up together an improved strategy for campaigns to onboard new targeted clients easily and at the same time we helped re-organizing their internal data, also finding new ways to use it. Win win.
                </p>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'data-analytics'
}
</script>
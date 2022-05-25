<template>
    <div>
        <section class="service-about section-m-top section-white">
            <div class="container">
                <div class="service-about__content">
                    <h2 class="heading-2">
                        <span class="text-highlight">
                            Consulting
                        </span>
                    </h2>
                    <p class="body-copy">
                        In one sentence, digital consulting is a focused form of management consulting designed to enable firms to better leverage their data and technology and create business value.
                    </p>
                </div>
                <div class="service-about__image">
                    <img src="@/assets/images/consulting.png" alt="Consulting" class="u-image-cover">
                </div>
                <div class="service-about__content service-about__content--second">
                    <h2 class="heading-2">
                        Consulting that
                        breaks through the noise
                    </h2>
                    <p class="body-copy">
                        InYourShoes understands the obstacles in our clients journey towards success.
                        We help our customers realize what they can do better, while also setting an implementation strategy and supporting in the execution of the advices provided to achieve an improved and stronger model. 
                    </p>
                    <UiButton
                        placeholder="Let's talk"
                        type="router-link"
                        link="/contact"
                    />
                </div>
                <div class="service-about__dots">
                    <img src="@/assets/images/home-about-dots.svg" alt="Consulting" class="u-image-contain">
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
                        61%
                    </div>
                    <h4 class="heading-4">
                        Visits with conversion
                    </h4>
                </div>
                <div class="service-result__number">
                    <div class="heading-1 u-text-secondary">
                        127%
                    </div>
                    <h4 class="heading-4">
                        More traffic
                    </h4>
                </div>
            </div>
            <div class="service-result__details">
                <div class="service-result__logo">

                </div>
                <div class="service-result__line"></div>
                <p class="body-copy">
                    Descriere digital marketing Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'consulting'
}
</script>
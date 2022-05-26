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
                        93%
                    </div>
                    <h4 class="heading-4">
                        More visits
                    </h4>
                </div>
                <div class="service-result__number">
                    <div class="heading-1 u-text-secondary">
                        37%
                    </div>
                    <h4 class="heading-4">
                        Increase in sales
                    </h4>
                </div>
            </div>
            <div class="service-result__details">
                <div class="service-result__logo">
                    <img src="@/assets/images/testimonials/mobexpert.png" alt="Mobexpert" class="u-image-contain">
                </div>
                <div class="service-result__line"></div>
                <p class="body-copy">
                    Mobexpert is a local furniture company, which was struggling with getting new customers and in closing a sale through its online platform. Before starting the partnership with InYourShoes, it wasn't even aware of what it was doing wrong or what could be done better. With the help of our consultancy, together we identified the obstacles and set up a strategy to overcome them.
                    <br>
                    <br>
                    From SEO to e-mail nurturing, in a period of 6 months, their website was accessed 93% more and their sales grow up by 37%. Isn't that awesome?! Don't you want to be the next one in our success stories? See you soon!
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